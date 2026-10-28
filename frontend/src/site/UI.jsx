import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Plus, Heart, Sparkles } from "lucide-react";
import { Flower, Sun, Wave } from "./Art";
import { faqs } from "./data";
import imageManifest from "./image-manifest.json";

export function Photo({
  id,
  alt,
  className = "",
  eager = false,
  sizes = "(max-width: 700px) 100vw, 50vw",
  style,
}) {
  const meta = imageManifest.find((item) => item.name === id);
  const widths = [480, 960, 1440].filter(
    (width, index, list) => index === 0 || meta?.width > list[index - 1],
  );
  return (
    <img
      className={className}
      src={`/images/${id}-960.webp`}
      srcSet={widths
        .map(
          (width) =>
            `/images/${id}-${width}.webp ${Math.min(width, meta?.width || width)}w`,
        )
        .join(", ")}
      sizes={sizes}
      width={meta?.width}
      height={meta?.height}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      decoding="async"
      style={style}
    />
  );
}

export function ButtonLink({
  to = "/enquiry",
  children,
  className = "",
  secondary = false,
  external = false,
  arrow = true,
  ...props
}) {
  const classes = `button ${secondary ? "button-secondary" : "button-primary"} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <ArrowUpRight size={19} aria-hidden="true" />}
    </>
  );
  return external ? (
    <a
      href={to}
      className={classes}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {content}
    </a>
  ) : (
    <Link to={to} className={classes} {...props}>
      {content}
    </Link>
  );
}

export function Eyebrow({ children, light = false }) {
  return (
    <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <span aria-hidden="true">✳</span>
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  centered = true,
  children,
}) {
  return (
    <div className={`section-heading ${centered ? "centered" : ""} reveal`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {text && <p className="section-intro">{text}</p>}
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  color = "cream",
  children,
  art = "sun",
}) {
  return (
    <section className={`page-hero bg-${color}`}>
      <div className="container page-hero-inner">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{eyebrow}</span>
        </div>
        <div className="page-hero-copy">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p>{text}</p>
          {children}
        </div>
        {art === "flower" ? (
          <Flower className="page-hero-art" />
        ) : (
          <Sun className="page-hero-art" />
        )}
      </div>
      <Wave color="var(--paper)" />
    </section>
  );
}

export function VisitCTA() {
  return (
    <section className="visit-cta" aria-labelledby="visit-title">
      <Wave color="var(--yellow)" />
      <div className="visit-cta-body">
        <div className="container visit-cta-inner">
          <Flower className="cta-flower" />
          <div className="reveal">
            <Eyebrow>A little hello. A wonderful beginning.</Eyebrow>
            <h2 id="visit-title">
              Come for a visit.
              <br />
              Stay for the <span className="handwritten">happy feeling.</span>
            </h2>
            <p>
              Meet our teachers, explore our world, and picture your little one
              here.
            </p>
            <ButtonLink
              to="/enquiry?intent=visit#enquiry-form"
              className="button-dark"
            >
              Let’s plan your visit
            </ButtonLink>
          </div>
          <Sun className="cta-sun" />
        </div>
      </div>
    </section>
  );
}

export function FAQ({ compact = false }) {
  return (
    <section className="section faq-section">
      <div className="container faq-layout">
        <div className="reveal">
          <Eyebrow>Big questions, little answers</Eyebrow>
          <h2>
            A little clarity
            <br />
            for your next step.
          </h2>
          <p>
            Choosing a school is a big decision. We’re here to help you feel at
            home.
          </p>
          <Link className="text-link" to="/enquiry">
            Let’s talk <ArrowRight size={18} />
          </Link>
        </div>
        <div className="faq-list reveal">
          {faqs.slice(0, compact ? 3 : faqs.length).map((faq) => (
            <details key={faq.question} name="school-faq">
              <summary>
                {faq.question}
                <Plus size={20} aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ValuesStrip() {
  return (
    <div className="values-strip">
      <div className="container">
        <span>
          <Heart aria-hidden="true" />A caring little community
        </span>
        <i aria-hidden="true">✳</i>
        <span>
          <Sparkles aria-hidden="true" />
          Learning through play
        </span>
        <i aria-hidden="true">✳</i>
        <span>
          <Sun />
          Room to be themselves
        </span>
      </div>
    </div>
  );
}

export function RouteEffects() {
  const location = useLocation();
  const previousPath = useRef(null);
  useEffect(() => {
    const pathChanged = previousPath.current !== location.pathname;
    const firstLoad = previousPath.current === null;
    previousPath.current = location.pathname;
    let timeout;
    if (location.hash) {
      // Give lazy routes time to mount before following an in-page link.
      let attempts = 0;
      const followHash = () => {
        const target = document.getElementById(
          decodeURIComponent(location.hash.slice(1)),
        );
        if (target)
          target.scrollIntoView({ behavior: "instant", block: "start" });
        else if (++attempts < 20) timeout = window.setTimeout(followHash, 100);
      };
      timeout = window.setTimeout(followHash, 50);
    } else if (pathChanged) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    if (pathChanged && !firstLoad)
      document.getElementById("main-content")?.focus({ preventScroll: true });
    return () => clearTimeout(timeout);
  }, [location.pathname, location.hash]);
  return null;
}

export function RevealObserver({ children }) {
  const ref = useRef(null);
  const location = useLocation();
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    const register = () =>
      ref.current
        ?.querySelectorAll(".reveal:not(.reveal-ready)")
        .forEach((node) => {
          node.classList.add("reveal-ready");
          observer.observe(node);
        });
    register();
    const mutation = new MutationObserver(register);
    if (ref.current)
      mutation.observe(ref.current, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, [location.pathname]);
  return <div ref={ref}>{children}</div>;
}

export function SEO({ title, description }) {
  useEffect(() => {
    document.title = title
      ? `${title} | Wisdom World Academy, Indore`
      : "Wisdom World Academy | A happy beginning in Indore";
    const content =
      description ||
      "Discover a joyful world of play, learning, and growing at Wisdom World Academy in Silicon City, Indore. Explore our programmes and plan a school visit.";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", content);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", document.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", content);
  }, [title, description]);
  return null;
}
