import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Camera,
  Instagram,
  Maximize2,
  X,
} from "lucide-react";
import { photos, school } from "./data";
import { ButtonLink, PageHero, Photo, SEO, VisitCTA } from "./UI";

const categories = [
  "All moments",
  "School life",
  "Celebrations",
  "Nature & play",
  "Learning journeys",
];

export default function Gallery() {
  const [params, setParams] = useSearchParams();
  const category = categories.includes(params.get("category"))
    ? params.get("category")
    : "All moments";
  const visible =
    category === "All moments"
      ? photos
      : photos.filter((photo) => photo.category === category);
  const requested = params.get("photo");
  const selected = visible.findIndex((photo) => photo.id === requested);
  const dialog = useRef(null);
  const lastFocused = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const changePhoto = (delta) => {
    const next = new URLSearchParams(params);
    next.set(
      "photo",
      visible[(selected + delta + visible.length) % visible.length].id,
    );
    setParams(next, { replace: true, preventScrollReset: true });
  };
  const close = () => {
    const next = new URLSearchParams(params);
    next.delete("photo");
    setParams(next, { replace: true, preventScrollReset: true });
  };
  useEffect(() => {
    const modal = dialog.current;
    if (selected >= 0) {
      if (!modal.open) {
        lastFocused.current = document.activeElement;
        modal.showModal();
      }
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
    if (modal.open) {
      modal.close();
      lastFocused.current?.focus();
    }
  }, [selected]);
  const openPhoto = (id) => {
    const next = new URLSearchParams(params);
    next.set("photo", id);
    setParams(next, { replace: true, preventScrollReset: true });
  };
  return (
    <>
      <SEO title="Little moments gallery" />
      <PageHero
        eyebrow="Our gallery"
        color="mint"
        title={
          <>
            A world of little
            <br />
            <span className="text-teal">wonderful moments.</span>
          </>
        }
        text="The friendships, discoveries, and celebrations that make our school feel like home. A glimpse into the real Wisdom World family."
        art="flower"
      />
      <section className="section gallery-section">
        <div className="container">
          <div className="gallery-toolbar">
            <div className="filter-list" aria-label="Filter school photos">
              {categories.map((item) => (
                <button
                  key={item}
                  aria-pressed={category === item}
                  className={category === item ? "selected" : ""}
                  onClick={() => {
                    const next = new URLSearchParams();
                    if (item !== "All moments") next.set("category", item);
                    setParams(next, {
                      replace: true,
                      preventScrollReset: true,
                    });
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
            <p className="photo-count" role="status">
              <Camera size={17} />
              {visible.length} happy moments
            </p>
          </div>
          <div className="photo-grid">
            {visible.map((photo, index) => (
              <button
                key={photo.id}
                className="gallery-photo"
                onClick={() => openPhoto(photo.id)}
                aria-label={`View photo: ${photo.title}`}
              >
                <div className="gallery-photo-image">
                  <Photo
                    id={photo.id}
                    alt={photo.alt}
                    eager={index < 3}
                    sizes="(max-width: 550px) 90vw, (max-width: 900px) 45vw, 30vw"
                    style={{ objectPosition: photo.position || "center" }}
                  />
                  <span className="photo-expand">
                    <Maximize2 size={19} aria-hidden="true" />
                  </span>
                </div>
                <span className="gallery-photo-caption">
                  <span>{photo.category}</span>
                  <strong>{photo.title}</strong>
                  <ArrowUpRight size={20} aria-hidden="true" />
                </span>
              </button>
            ))}
          </div>
          <div className="social-callout">
            <Instagram size={30} strokeWidth={1.5} />
            <div>
              <h2>There’s always a new little story.</h2>
              <p>Follow our school’s everyday adventures on Instagram.</p>
            </div>
            <ButtonLink to={school.instagram} external secondary>
              @wisdom_world_academy
            </ButtonLink>
          </div>
        </div>
      </section>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-labelledby="lightbox-title"
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            changePhoto(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            changePhoto(-1);
          }
        }}
      >
        {selected >= 0 && (
          <div className="lightbox-inner">
            <div className="lightbox-top">
              <span>{visible[selected].category}</span>
              <button
                className="icon-button"
                onClick={close}
                aria-label="Close photo viewer"
                autoFocus
              >
                <X />
              </button>
            </div>
            <div
              className="lightbox-image"
              onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
              onTouchEnd={(event) => {
                if (touchStart === null) return;
                const distance = event.changedTouches[0].clientX - touchStart;
                if (Math.abs(distance) > 50) changePhoto(distance < 0 ? 1 : -1);
                setTouchStart(null);
              }}
            >
              <Photo
                id={visible[selected].id}
                alt={visible[selected].alt}
                eager
                sizes="90vw"
              />
            </div>
            <div className="lightbox-bottom">
              <button
                className="icon-button"
                onClick={() => changePhoto(-1)}
                aria-label="Previous photo"
              >
                <ArrowLeft />
              </button>
              <div aria-live="polite">
                <h2 id="lightbox-title">{visible[selected].title}</h2>
                <p>
                  {selected + 1} / {visible.length}
                </p>
              </div>
              <button
                className="icon-button"
                onClick={() => changePhoto(1)}
                aria-label="Next photo"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        )}
      </dialog>
      <VisitCTA />
    </>
  );
}
