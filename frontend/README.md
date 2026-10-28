# Wisdom World Academy

A React + Vite website for the preschool and primary school in Silicon City, Indore. The redesign keeps the original irregular wave dividers and school crest, with a warm palette, custom SVG illustrations, real school photography, responsive layouts, and accessible interactions.

## Development

```sh
npm install
npm run dev
npm run build
npm run preview
```

The production build is generated in `dist/`. The existing Vercel configuration supports direct visits to client-side routes. No publishing or hosting change was made as part of the source redesign.

## Site structure

- `src/site/Layout.jsx`: shared navigation and footer, with mobile and keyboard controls.
- `src/site/Home.jsx`: home page and shared programme cards.
- `src/site/Pages.jsx`: about, story, difference, programmes, bagless learning, parent corner, and not-found pages.
- `src/site/Gallery.jsx`: category filters, shareable photo URLs, native modal, keyboard controls, and touch swiping.
- `src/site/Enquiry.jsx`: admission, visit, feedback, and franchise enquiries.
- `src/site/data.js`: school details, programme guidance, photo captions, FAQs, and research notes.
- `src/site/Art.jsx`: code-native illustrations and the preserved wave contour.
- `src/site/UI.jsx`: responsive photos, metadata, reduced-motion-aware reveals, and shared sections.
- `src/index.css` and `src/App.css`: self-hosted fonts, design tokens, layouts, and breakpoints.

Existing public routes are preserved, including `/see-more`, which now opens the real school gallery. `/gallery` and `/contact` are additional aliases. The old components remain as a source archive and are no longer imported by the application.

## School information and imagery

The phone number, crest, programme names, age guidance, school story, and school-specific photographs are retained from the existing website. The address was cross-checked against the supplied [Feesback listing](https://www.feesback.org/preschools/indore/silicon-city/7590/wisdom-world-academy-play-school-silicon-city). School hours conflicted between sources, so the site asks families to confirm directly. Fees, availability, rankings, awards, testimonials, and admission deadlines are not invented.

The supplied [Instagram](https://www.instagram.com/wisdom_world_academy/) and [Facebook](https://www.facebook.com/WisdomWorldAcademyIndore/) profiles restricted direct access during research, and [Magicpin](https://magicpin.in/Indore/Silicon-City/Education/Wisdom-World-Academy/store/20cb789) was unavailable. Social links are retained. No inaccessible social content is presented as reviewed or downloaded.

Twelve school photographs were curated from the existing archive. Their sources are recorded in `src/site/image-manifest.json`. No stock or generated children are presented as actual pupils. Original files remain untouched; the pages use responsive local WebP copies in `public/images/`, with lazy loading outside the opening content.

To regenerate the copies with Python 3 and Pillow installed:

```sh
python3 scripts/prepare-images.py
```

Fredoka and Nunito Sans are self-hosted in `public/fonts/`, alongside their SIL Open Font License files. Site fonts and images do not depend on third-party runtime requests.

## Enquiries

The existing Web3Forms public form identifier is retained. To rotate it, set `VITE_WEB3FORMS_ACCESS_KEY` in `.env.local` (see `.env.example`) and rebuild. This identifier is designed for client-side forms and is not a server secret.

Both enquiry and franchise forms use the same delivery service. They validate contact details and consent, prevent duplicate submissions, include a honeypot, retain entries after failure, and only show success after the service confirms acceptance. Visit requests explicitly remain unconfirmed until the school agrees on a time. The site does not store submitted personal details in local storage.

Live email delivery and ownership of the receiving Web3Forms account must be checked by the school. Automated tests mock the provider; they never send enquiries.

## Browser verification

Install a test browser once, then run the production regression suite:

```sh
npx playwright install chromium
npm test
```

An existing Chrome can be used instead:

```sh
BROWSER_EXECUTABLE_PATH=/usr/bin/google-chrome npm test
```

The suite builds the site, starts a temporary local preview on port 4178, tests navigation, tabs, gallery filtering, modal focus, FAQ controls, validation and delivery states, and checks twelve routes at 1440, 768, 390, and 320 pixels. Axe scans run at desktop and phone sizes. Reports and screenshots are written to the ignored `test-results/` directory; the browser and temporary server close afterward.

For an already-running server, use `QA_BASE_URL=http://127.0.0.1:5173 npm run test:browser`. Reduced-motion behavior is respected in both site animations and deterministic browser tests. Automated accessibility scans supplement manual keyboard and visual checks.
