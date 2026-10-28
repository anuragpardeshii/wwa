import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  Sparkles,
  Smile,
  Shapes,
  Sprout,
  BookOpen,
  Check,
} from "lucide-react";
import { Flower, Sun, Rainbow, Scribble, ProgramArt, Wave } from "./Art";
import {
  ButtonLink,
  Eyebrow,
  FAQ,
  Photo,
  SectionHeading,
  SEO,
  ValuesStrip,
  VisitCTA,
} from "./UI";
import { programmes, photos } from "./data";

export function ProgrammeCards() {
  return (
    <div className="programme-grid">
      {programmes.map((programme, index) => (
        <Link
          key={programme.id}
          to={`/preschool-programme?stage=${programme.id}#programme-explorer`}
          className={`programme-card card-${programme.color} reveal`}
          style={{ "--delay": `${index * 65}ms` }}
        >
          <div className="programme-art">
            <ProgramArt type={programme.art} />
            <span className="programme-number">0{index + 1}</span>
          </div>
          <div className="programme-card-copy">
            <span className="programme-age">{programme.age}</span>
            <h3>{programme.name}</h3>
            <p>{programme.description}</p>
            <span className="programme-link">
              Let’s explore{" "}
              <span>
                <ArrowUpRight size={20} />
              </span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function WhyWisdom({ full = false }) {
  const reasons = [
    {
      icon: Heart,
      color: "coral",
      title: "Little hearts come first",
      text: "A warm welcome, a listening ear, and the space to feel comfortable being themselves.",
    },
    {
      icon: Shapes,
      color: "teal",
      title: "Play with a purpose",
      text: "Stories, art, movement, and hands-on discoveries make learning a joyful adventure.",
    },
    {
      icon: Sprout,
      color: "purple",
      title: "Room for every kind of growth",
      text: "Building confidence and kindness alongside language, thinking, and everyday skills.",
    },
    {
      icon: Smile,
      color: "blue",
      title: "Growing together",
      text: "Teachers and parents working together to understand and encourage every child.",
    },
  ];
  return (
    <section className="section why-section">
      <div className="container">
        <div className="why-heading">
          <SectionHeading
            centered={false}
            eyebrow="The Wisdom way"
            title={
              <>
                Small things.
                <br />A <span className="text-teal">big difference.</span>
              </>
            }
            text="Because the best beginnings are full of care, curiosity, and the freedom to discover."
          />
          <Rainbow className="why-rainbow" />
        </div>
        <div className="reasons-grid">
          {reasons.map(({ icon: Icon, color, title, text }, index) => (
            <article
              className="reason reveal"
              key={title}
              style={{ "--delay": `${index * 60}ms` }}
            >
              <span className={`reason-icon bg-${color}`}>
                <Icon size={27} strokeWidth={1.7} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        {!full && (
          <Link to="/difference" className="text-link">
            Discover the Wisdom difference <ArrowRight size={18} />
          </Link>
        )}
      </div>
    </section>
  );
}

export function GalleryPreview() {
  return (
    <section className="section gallery-preview bg-mint">
      <div className="container">
        <div className="heading-with-link">
          <SectionHeading
            centered={false}
            eyebrow="A peek into our happy world"
            title={
              <>
                Little moments.
                <br />
                Memories for <span className="text-teal">a lifetime.</span>
              </>
            }
          />
          <ButtonLink to="/media" secondary>
            Explore the gallery
          </ButtonLink>
        </div>
        <div className="gallery-preview-grid">
          {[photos[2], photos[1], photos[0]].map((photo, i) => (
            <Link
              key={photo.id}
              to={`/media?photo=${photo.id}`}
              className={`preview-photo preview-photo-${i} reveal`}
            >
              <Photo
                id={photo.id}
                alt={photo.alt}
                sizes="(max-width: 600px) 90vw, 33vw"
              />
              <div className="preview-caption">
                <span>
                  {photo.category}
                  <strong>{photo.title}</strong>
                </span>
                <span className="circle-arrow">
                  <ArrowUpRight size={22} />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <p className="gallery-footnote">
          <Heart size={15} /> Real children. Real moments. Our Wisdom World
          family.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SEO />
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-location">
              <span className="tiny-flower" aria-hidden="true">
                ✳
              </span>
              A happy beginning in Silicon City, Indore
            </div>
            <h1>
              Little minds.
              <br />
              <span className="hero-highlight">
                Big wonders.
                <svg
                  viewBox="0 0 420 18"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 11Q180 1 412 9M23 16Q203 6 390 14"
                    stroke="#F6C349"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              <span className="hero-last-line">Beautiful beginnings.</span>
            </h1>
            <p>
              A world of play, discovery, and belonging. At Wisdom World
              Academy, we help little learners grow into their wonderful selves.
            </p>
            <div className="hero-actions">
              <ButtonLink to="/enquiry?intent=visit#enquiry-form">
                Come, explore our world
              </ButtonLink>
              <Link className="hero-secondary" to="/preschool-programme">
                Our programmes <ArrowRight size={18} />
              </Link>
            </div>
            <div className="hero-reassurance">
              <span>
                <Heart size={16} />
                Nurtured with care
              </span>
              <span>
                <Sparkles size={16} />
                Inspired through play
              </span>
            </div>
          </div>
          <div className="hero-collage">
            <Sun className="hero-sun" />
            <span className="hero-confetti confetti-one" aria-hidden="true">
              ✦
            </span>
            <span className="hero-confetti confetti-two" aria-hidden="true">
              ✧
            </span>
            <div className="hero-photo-backdrop" />
            <figure className="hero-main-photo">
              <Photo
                id="green-day"
                alt={photos[0].alt}
                eager
                sizes="(max-width: 760px) 92vw, 48vw"
              />
              <figcaption>
                <span aria-hidden="true">✿</span> A little messy. A lot of
                happy.
              </figcaption>
            </figure>
            <figure className="hero-small-photo">
              <Photo
                id="little-gardeners"
                alt={photos[1].alt}
                eager
                sizes="(max-width: 760px) 40vw, 230px"
              />
              <figcaption>
                Growing, together <Heart size={14} />
              </figcaption>
            </figure>
            <div className="hero-sticker">
              <Heart size={27} strokeWidth={1.6} />
              <span>
                Small steps.
                <br />
                Big smiles.
              </span>
              <span className="sticker-stars" aria-hidden="true">
                ✦ ✦ ✦
              </span>
            </div>
            <Scribble className="hero-scribble" />
          </div>
        </div>
        <Wave color="var(--mint)" />
      </section>
      <ValuesStrip />
      <section className="section welcome-section">
        <div className="container welcome-grid">
          <div className="welcome-visual reveal">
            <div className="dot-pattern" />
            <Photo
              id="colourful-celebrations"
              alt={photos[2].alt}
              className="welcome-photo"
            />
            <Flower className="welcome-flower" />
            <div className="photo-note">
              <Heart size={23} />
              <span>
                Where every child
                <br />
                <strong>belongs.</strong>
              </span>
            </div>
            <span className="handwritten photo-handwriting">
              Our kind of happy place.
            </span>
          </div>
          <div className="welcome-copy reveal">
            <Eyebrow>Hello, little dreamers!</Eyebrow>
            <h2>
              A little world.
              <br />A whole lot of{" "}
              <span className="text-coral">possibility.</span>
            </h2>
            <p>
              First friendships. The joy of “I did it!” A question that leads to
              ten more. Childhood is full of wonderful little moments—and we
              make room for them all.
            </p>
            <p>
              Here in Indore, Wisdom World Academy brings learning to life
              through play, creativity, and caring connections. We see each
              child as a whole little person, with their own pace, personality,
              and potential.
            </p>
            <div className="welcome-checks">
              <span>
                <Check size={16} />
                Playful learning
              </span>
              <span>
                <Check size={16} />
                Caring connections
              </span>
              <span>
                <Check size={16} />
                Confident beginnings
              </span>
            </div>
            <ButtonLink to="/about-us" secondary>
              Get to know us
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="programmes-section">
        <Wave />
        <div className="programmes-body">
          <div className="container">
            <SectionHeading
              eyebrow="A happy step at every stage"
              title="Little learners. Big adventures."
              text="From their first school day to their next big leap, there’s a world of discovery waiting."
            />
            <ProgrammeCards />
            <p className="programmes-note">
              Every child grows at their own pace.{" "}
              <Link to="/enquiry">
                Let’s find their happy starting point <ArrowRight size={15} />
              </Link>
            </p>
          </div>
        </div>
        <Wave color="var(--yellow)" flip />
      </section>
      <WhyWisdom />
      <GalleryPreview />
      <section className="section parent-home">
        <div className="container parent-home-grid">
          <div className="parent-home-copy reveal">
            <Eyebrow>For the grown-ups who care</Eyebrow>
            <h2>
              Their first steps.
              <br />
              <span className="text-purple">Our shared journey.</span>
            </h2>
            <p>
              We know choosing a school comes with a heart full of hopes and a
              head full of questions. You don’t have to figure it all out alone.
            </p>
            <p>
              From settling in to celebrating progress, an open conversation
              between parents and teachers helps every child feel supported.
            </p>
            <Link className="text-link" to="/parents-speak">
              A little guidance for parents <ArrowRight size={18} />
            </Link>
          </div>
          <div className="parent-note reveal">
            <span className="tape" />
            <BookOpen size={32} strokeWidth={1.6} />
            <h3>Dear parent,</h3>
            <p>
              You know their favourite story, their biggest smile, and the
              little things that make them, them.
            </p>
            <p>We’d love to get to know them, too.</p>
            <span className="handwritten">
              Let’s make a wonderful beginning.
            </span>
            <div className="parent-note-signature">
              With care,
              <br />
              <strong>Your Wisdom World family</strong>
              <Heart size={25} />
            </div>
          </div>
        </div>
      </section>
      <FAQ compact />
      <VisitCTA />
    </>
  );
}
