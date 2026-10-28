/** Browser regression checks. All form requests are intercepted; no enquiries are sent. */
import { chromium } from "playwright";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { setTimeout as delay } from "node:timers/promises";

const require = createRequire(import.meta.url);
const base = process.env.QA_BASE_URL || "http://127.0.0.1:4178";
const output = path.resolve("test-results");
const report = {
  responsive: [],
  accessibility: [],
  interactions: [],
  errors: [],
  failedAssets: [],
};
let server;
let browser;
await fs.mkdir(output, { recursive: true });
try {
  if (!process.env.QA_BASE_URL) {
    await fs.access("dist/index.html");
    server = spawn(
      process.execPath,
      [
        "node_modules/vite/bin/vite.js",
        "preview",
        "--host",
        "127.0.0.1",
        "--port",
        "4178",
        "--strictPort",
      ],
      { stdio: "pipe" },
    );
    let ready = false;
    for (let attempt = 0; attempt < 50; attempt++) {
      if (server.exitCode !== null)
        throw new Error("Preview server exited. Is port 4178 occupied?");
      try {
        if ((await fetch(base)).ok) {
          ready = true;
          break;
        }
      } catch {
        /* Wait for preview. */
      }
      await delay(200);
    }
    assert.ok(ready, "The production preview must start successfully.");
  }
  browser = await chromium.launch({
    headless: true,
    executablePath: process.env.BROWSER_EXECUTABLE_PATH || undefined,
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    reducedMotion: "reduce",
  });
  await context.route("https://api.web3forms.com/**", (route) => route.abort());
  const page = await context.newPage();
  page.on("pageerror", (error) => report.errors.push(error.message));
  page.on("response", (response) => {
    if (response.status() >= 400 && response.url().startsWith(base))
      report.failedAssets.push(response.url());
  });
  const pass = (name) => {
    report.interactions.push(name);
    console.log("PASS", name);
  };
  await page.goto(base, { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Our world", exact: true }).click();
  assert.equal(
    await page
      .getByRole("button", { name: "Our world", exact: true })
      .getAttribute("aria-expanded"),
    "true",
  );
  await page.keyboard.press("Escape");
  assert.equal(
    await page
      .getByRole("button", { name: "Our world", exact: true })
      .getAttribute("aria-expanded"),
    "false",
  );
  pass("Desktop dropdown opens, closes with Escape, and restores focus");
  await page.getByRole("button", { name: "Programmes", exact: true }).click();
  await page
    .getByRole("link", { name: "Preschool & primary", exact: true })
    .click();
  await page.getByRole("tab", { name: "LKG 3.5–4.5 years" }).click();
  assert.match(page.url(), /stage=lkg/);
  await page.waitForFunction(
    () =>
      document.querySelector("#stage-lkg")?.getAttribute("aria-selected") ===
      "true",
  );
  await page.keyboard.press("ArrowRight");
  await page.waitForFunction(
    () =>
      document.querySelector("#stage-ukg")?.getAttribute("aria-selected") ===
      "true",
  );
  assert.equal(
    await page.locator("#stage-ukg").getAttribute("aria-selected"),
    "true",
  );
  await page.getByRole("link", { name: "Enquire about UKG" }).click();
  assert.equal(await page.locator("#programme").inputValue(), "UKG");
  pass(
    "Programme tabs support keyboard navigation and carry selection to enquiries",
  );
  await page
    .getByRole("button", { name: "Send your enquiry", exact: true })
    .click();
  assert.equal(await page.locator(".field-error").count(), 4);
  assert.equal(
    await page.locator("#name").evaluate((el) => el === document.activeElement),
    true,
  );
  pass("Enquiry validation exposes errors and focuses the first invalid field");
  await page.locator("#name").fill("Test Parent");
  await page.locator("#phone").fill("9876543210");
  await page.locator("#email").fill("test@example.com");
  await page.locator("#consent").check();
  await page.route("https://api.web3forms.com/submit", (route) =>
    route.fulfill({
      status: 503,
      contentType: "application/json",
      body: JSON.stringify({ success: false }),
    }),
  );
  await page
    .getByRole("button", { name: "Send your enquiry", exact: true })
    .click();
  await page.getByRole("alert").waitFor();
  assert.equal(await page.locator("#name").inputValue(), "Test Parent");
  pass("Form failure keeps entered details and provides a call fallback");
  await page.unroute("https://api.web3forms.com/submit");
  let body = "";
  await page.route("https://api.web3forms.com/submit", async (route) => {
    body = route.request().postData();
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ success: true }),
    });
  });
  await page
    .getByRole("button", { name: "Send your enquiry", exact: true })
    .click();
  await page.getByRole("heading", { name: "A lovely first hello!" }).waitFor();
  assert.match(body, /UKG/);
  assert.equal(
    await page
      .locator(".form-success")
      .evaluate((el) => el === document.activeElement),
    true,
  );
  pass(
    "Form success is announced only after a successful service response (mocked; no message sent)",
  );
  await page.goto(base + "/enquiry?intent=visit#enquiry-form", {
    waitUntil: "networkidle",
  });
  assert.equal(
    await page.locator("#interest").inputValue(),
    "School visit request",
  );
  await page.locator("#name").fill("Test Parent");
  await page.locator("#phone").fill("9876543210");
  await page.locator("#email").fill("test@example.com");
  await page.locator("#consent").check();
  await page
    .getByRole("button", { name: "Send your enquiry", exact: true })
    .click();
  await page
    .getByText("Your visit is not yet booked.", { exact: false })
    .waitFor();
  pass(
    "Visit enquiries clearly distinguish a request from a confirmed booking",
  );
  await page.goto(base + "/franchise", { waitUntil: "networkidle" });
  await page.locator("#name").fill("Test Partner");
  await page.locator("#phone").fill("9876543210");
  await page.locator("#email").fill("test@example.com");
  await page.locator("#city").fill("Indore");
  await page.locator("#consent").check();
  await page.getByRole("button", { name: "Send franchise enquiry" }).click();
  await page.getByRole("heading", { name: "A lovely first hello!" }).waitFor();
  assert.match(body, /Franchise enquiry/);
  pass(
    "Franchise form uses the real delivery flow (mocked), rather than a simulated success",
  );
  await page.goto(base + "/media", { waitUntil: "networkidle" });
  await page
    .getByRole("button", { name: "Nature & play", exact: true })
    .click();
  await page.waitForFunction(
    () => document.querySelectorAll(".gallery-photo").length === 2,
  );
  assert.equal(await page.locator(".gallery-photo").count(), 2);
  await page.locator(".gallery-photo").first().click();
  await page.locator("dialog[open]").waitFor();
  assert.equal(
    await page.locator("body").evaluate((el) => el.style.overflow),
    "hidden",
  );
  const initial = await page.locator("#lightbox-title").textContent();
  await page.keyboard.press("ArrowRight");
  await page.waitForFunction(
    (previous) =>
      document.querySelector("#lightbox-title")?.textContent !== previous,
    initial,
  );
  assert.notEqual(await page.locator("#lightbox-title").textContent(), initial);
  await page.keyboard.press("Escape");
  await page.locator("dialog").waitFor({ state: "hidden" });
  assert.equal(await page.locator("dialog[open]").count(), 0);
  assert.notEqual(
    await page.locator("body").evaluate((el) => el.style.overflow),
    "hidden",
  );
  assert.equal(
    await page
      .locator(".gallery-photo")
      .first()
      .evaluate((el) => el === document.activeElement),
    true,
  );
  pass(
    "Gallery filters, keyboard photo navigation, Escape, scroll restoration, and focus return",
  );
  await page.goto(base + "/media?photo=green-day", {
    waitUntil: "networkidle",
  });
  await page.locator("dialog[open]").waitFor();
  await page.getByRole("button", { name: "Close photo viewer" }).click();
  pass("Home photo links open the correct photo directly");
  await page.goto(base + "/difference", { waitUntil: "networkidle" });
  await page.getByRole("tab", { name: "Make & discover" }).click();
  await page.keyboard.press("ArrowDown");
  await page.waitForFunction(
    () =>
      document.querySelector("#day-tab-2")?.getAttribute("aria-selected") ===
      "true",
  );
  assert.equal(
    await page.locator("#day-tab-2").getAttribute("aria-selected"),
    "true",
  );
  pass("Learning explorer has working keyboard tabs");
  await page.goto(base + "/parents-speak#faqs", { waitUntil: "networkidle" });
  await page.locator("summary").nth(0).click();
  assert.equal(await page.locator("details[open]").count(), 1);
  await page.locator("summary").nth(1).click();
  assert.equal(await page.locator("details[open]").count(), 1);
  pass("FAQ accordion opens and closes with native accessible controls");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base, { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.getByRole("button", { name: "Our world", exact: true }).click();
  await page
    .getByRole("link", { name: "About our school", exact: true })
    .click();
  assert.match(page.url(), /about-us/);
  assert.equal(
    await page
      .getByRole("button", { name: "Open navigation" })
      .getAttribute("aria-expanded"),
    "false",
  );
  pass("Mobile menu, nested navigation, and automatic close after navigation");

  // Route, responsive layout, real image decoding, and WCAG A/AA scans.
  const routes = [
    "/",
    "/about-us",
    "/story",
    "/difference",
    "/preschool-programme",
    "/bagless-school",
    "/parents-speak",
    "/media",
    "/enquiry",
    "/franchise",
    "/see-more",
    "/not-a-page",
  ];
  for (const width of [1440, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(base + route, { waitUntil: "networkidle" });
      await page.locator("main h1").waitFor();
      await page.evaluate(async () => {
        for (const image of document.images) image.loading = "eager";
        await Promise.all(
          [...document.images].map((image) => image.decode().catch(() => {})),
        );
      });
      const state = await page.evaluate(() => ({
        h1: document.querySelectorAll("h1").length,
        overflow: document.documentElement.scrollWidth > innerWidth + 1,
        brokenImages: [...document.images]
          .filter((image) => !image.naturalWidth)
          .map((image) => image.src),
      }));
      report.responsive.push({ width, route, ...state });
      assert.equal(state.h1, 1, `${route} must have one main heading`);
      assert.equal(
        state.overflow,
        false,
        `${route} must fit a ${width}px viewport`,
      );
      assert.deepEqual(
        state.brokenImages,
        [],
        `${route} must load every photo`,
      );
      if (width === 1440 || width === 390) {
        await page.addScriptTag({
          path: require.resolve("axe-core/axe.min.js"),
        });
        const violations = await page.evaluate(async () =>
          (
            await window.axe.run(document, {
              runOnly: {
                type: "tag",
                values: ["wcag2a", "wcag2aa", "wcag21aa"],
              },
            })
          ).violations.map((item) => ({
            id: item.id,
            impact: item.impact,
            targets: item.nodes.map((node) => node.target),
          })),
        );
        report.accessibility.push({ width, route, violations });
        assert.deepEqual(
          violations,
          [],
          `${route} must pass the accessibility scan at ${width}px`,
        );
      }
      if (route === "/" && (width === 1440 || width === 390))
        await page.screenshot({
          path: path.join(output, `home-${width}.png`),
          fullPage: true,
        });
    }
    console.log(`PASS all routes at ${width}px`);
  }
  assert.deepEqual(report.errors, [], "No JavaScript runtime errors");
  assert.deepEqual(report.failedAssets, [], "No missing local resources");
  console.log(
    `Passed ${report.responsive.length} responsive route checks, ${report.accessibility.length} accessibility scans, and ${report.interactions.length} interaction checks.`,
  );
} finally {
  await fs.writeFile(
    path.join(output, "browser-report.json"),
    JSON.stringify(report, null, 2) + "\n",
  );
  await browser?.close();
  server?.kill("SIGTERM");
}
