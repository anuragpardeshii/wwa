import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Menu,
  X,
  Heart,
} from "lucide-react";
import { school } from "./data";
import { Wave } from "./Art";
import { ButtonLink } from "./UI";

const groups = [
  {
    title: "Our world",
    links: [
      ["About our school", "/about-us"],
      ["Our story", "/story"],
      ["The Wisdom difference", "/difference"],
    ],
  },
  {
    title: "Programmes",
    links: [
      ["Preschool & primary", "/preschool-programme"],
      ["Bagless learning", "/bagless-school"],
    ],
  },
];

export function Brand({ footer = false }) {
  return (
    <Link
      to="/"
      className={`brand ${footer ? "brand-footer" : ""}`}
      aria-label="Wisdom World Academy home"
    >
      <img src="/images/school-logo.webp" width="55" height="55" alt="" />
      <span>
        Wisdom World<strong>ACADEMY</strong>
        <small>Little learners. Limitless possibilities.</small>
      </span>
    </Link>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const navRef = useRef(null);
  const menuButton = useRef(null);
  const location = useLocation();
  useEffect(() => {
    setMenuOpen(false);
    setDropdown(null);
  }, [location.pathname, location.search, location.hash]);
  useEffect(() => {
    const closeOutside = (event) => {
      if (!navRef.current?.contains(event.target)) {
        setDropdown(null);
        setMenuOpen(false);
      }
    };
    const escape = (event) => {
      if (event.key === "Escape") {
        if (dropdown) {
          navRef.current
            ?.querySelector(`[data-dropdown="${dropdown}"]`)
            ?.focus();
          setDropdown(null);
        } else if (menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", escape);
    };
  }, [dropdown, menuOpen]);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="topbar">
        <div className="container">
          <a href={school.maps} target="_blank" rel="noopener noreferrer">
            <MapPin size={14} />
            Silicon City, Indore
          </a>
          <span>
            A happy place for curious little minds{" "}
            <span aria-hidden="true">✦</span>
          </span>
          <a href={school.phoneHref}>
            <Phone size={13} />
            {school.phone}
          </a>
        </div>
      </div>
      <header className="site-header" ref={navRef}>
        <div className="container header-inner">
          <Brand />
          <button
            className="mobile-toggle icon-button"
            ref={menuButton}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setDropdown(null);
            }}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav
            id="main-navigation"
            className={`main-nav ${menuOpen ? "is-open" : ""}`}
            aria-label="Main navigation"
          >
            <NavLink end to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            {groups.map((group) => (
              <div
                className="nav-dropdown"
                key={group.title}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget))
                    setDropdown((current) =>
                      current === group.title ? null : current,
                    );
                }}
              >
                <button
                  data-dropdown={group.title}
                  className={
                    group.links.some(([, path]) => path === location.pathname)
                      ? "active"
                      : ""
                  }
                  aria-expanded={dropdown === group.title}
                  aria-controls={`nav-${group.title.replace(" ", "-")}`}
                  onClick={() =>
                    setDropdown(dropdown === group.title ? null : group.title)
                  }
                >
                  {group.title}
                  <ChevronDown size={14} />
                </button>
                <div
                  id={`nav-${group.title.replace(" ", "-")}`}
                  className="dropdown-panel"
                  hidden={dropdown !== group.title}
                >
                  {group.links.map(([name, path]) => (
                    <NavLink
                      key={path}
                      to={path}
                      onClick={() => {
                        setDropdown(null);
                        setMenuOpen(false);
                      }}
                    >
                      {name}
                      <ArrowUpRight size={15} />
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
            <NavLink to="/media" onClick={() => setMenuOpen(false)}>
              Gallery
            </NavLink>
            <NavLink to="/parents-speak" onClick={() => setMenuOpen(false)}>
              For parents
            </NavLink>
            <ButtonLink
              to="/enquiry?intent=visit#enquiry-form"
              className="nav-cta"
            >
              Come say hello
            </ButtonLink>
          </nav>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <Wave color="var(--navy)" background="var(--yellow)" />
      <div className="footer-body">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand-block">
              <Brand footer />
              <p>
                A little world of wonder.
                <br />A wonderful place to grow.
              </p>
              <div className="social-links">
                <a
                  href={school.instagram}
                  aria-label="Wisdom World Academy on Instagram (opens in a new tab)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={school.facebook}
                  aria-label="Wisdom World Academy on Facebook (opens in a new tab)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h3>Explore our world</h3>
              <Link to="/about-us">About us</Link>
              <Link to="/story">Our story</Link>
              <Link to="/difference">The Wisdom difference</Link>
              <Link to="/media">Little moments gallery</Link>
              <Link to="/franchise">Start your own preschool</Link>
            </div>
            <div className="footer-column">
              <h3>Grow with us</h3>
              <Link to="/preschool-programme">Our programmes</Link>
              <Link to="/bagless-school">Bagless learning</Link>
              <Link to="/parents-speak">Parent corner</Link>
              <Link to="/enquiry">Admissions & enquiries</Link>
              <Link to="/parents-speak#faqs">Frequently asked questions</Link>
            </div>
            <div className="footer-column footer-contact">
              <h3>Our door is always open</h3>
              <a href={school.maps} target="_blank" rel="noopener noreferrer">
                <MapPin size={19} />
                <span>{school.address}</span>
              </a>
              <a href={school.phoneHref}>
                <Phone size={17} />
                {school.phone}
              </a>
              <Link
                className="footer-visit"
                to="/enquiry?intent=visit#enquiry-form"
              >
                Plan a school visit <ArrowRight size={17} />
              </Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} Wisdom World Academy. Made for little
              wonders.
            </p>
            <p>
              Created & managed with <Heart size={12} aria-label="love" /> by{" "}
              <a
                href="https://www.linkedin.com/in/pardeshianurag22/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Anurag Pardeshi
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
