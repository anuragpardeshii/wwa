import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./site/Layout";
import Home from "./site/Home";
import { RevealObserver, RouteEffects } from "./site/UI";
import "./App.css";

const Gallery = lazy(() => import("./site/Gallery"));
const Enquiry = lazy(() => import("./site/Enquiry"));
const Franchise = lazy(() =>
  import("./site/Enquiry").then((module) => ({ default: module.Franchise })),
);
const page = (name) =>
  lazy(() =>
    import("./site/Pages").then((module) => ({ default: module[name] })),
  );
const About = page("About");
const Story = page("Story");
const Difference = page("Difference");
const Programmes = page("Programmes");
const Bagless = page("Bagless");
const Parents = page("Parents");
const NotFound = page("NotFound");

function Site() {
  return (
    <>
      <RouteEffects />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <RevealObserver>
          <Suspense
            fallback={
              <div className="page-loading" role="status">
                <span aria-hidden="true">✳</span>Opening a little world of
                wonder…
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/story" element={<Story />} />
              <Route path="/difference" element={<Difference />} />
              <Route path="/preschool-programme" element={<Programmes />} />
              <Route path="/bagless-school" element={<Bagless />} />
              <Route path="/parents-speak" element={<Parents />} />
              <Route path="/media" element={<Gallery />} />
              <Route path="/see-more" element={<Gallery />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/enquiry" element={<Enquiry />} />
              <Route path="/contact" element={<Enquiry />} />
              <Route path="/franchise" element={<Franchise />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </RevealObserver>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Site />
    </BrowserRouter>
  );
}
