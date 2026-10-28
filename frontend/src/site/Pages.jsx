import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Check,
  Heart,
  Leaf,
  Music2,
  Palette,
  Shapes,
  Sparkles,
  Sun as SunIcon,
  Users,
} from "lucide-react";
import { Flower, ProgramArt, Rainbow } from "./Art";
import {
  ButtonLink,
  Eyebrow,
  FAQ,
  PageHero,
  Photo,
  SectionHeading,
  SEO,
  VisitCTA,
} from "./UI";
import { programmes, photos, school } from "./data";
import { WhyWisdom } from "./Home";

export function About() {
  return (
    <>
      <SEO title="About our school" />
      <PageHero
        eyebrow="About our school"
        title={
          <>
            A small world with
            <br />
            <span className="text-coral">a very big heart.</span>
          </>
        }
        text="Welcome to Wisdom World Academy, a caring learning community in Silicon City, Indore, where curiosity is encouraged and childhood is celebrated."
      />
      <section className="section">
        <div className="container editorial-grid">
          <div className="editorial-photo reveal">
            <Photo id="classroom-friends" alt={photos[3].alt} eager />
            <span className="photo-label">
              <Heart size={17} />
              Belonging begins here
            </span>
          </div>
          <div className="editorial-copy reveal">
            <Eyebrow>More than a school day</Eyebrow>
            <h2>
              Big feelings.
              <br />
              Bright ideas.
              <br />
              <span className="text-teal">Beautiful possibilities.</span>
            </h2>
            <p>
              For a child, school is a whole new world. We want that world to
              feel welcoming: a place to ask questions, try things out, make
              friends, and feel proud of little achievements.
            </p>
            <p>
              Our preschool and primary programmes connect academic foundations
              with creativity, confidence, and care. Through stories, hands-on
              experiences, and play, we help children enjoy the process of
              learning.
            </p>
            <Link to="/story" className="text-link">
              The story behind our school <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section bg-mint">
        <div className="container">
          <SectionHeading
            eyebrow="What matters to us"
            title="Rooted in care. Growing with purpose."
          />
          <div className="mission-grid">
            <article className="reveal">
              <span className="reason-icon bg-coral">
                <Heart />
              </span>
              <h3>Our mission</h3>
              <p>
                To help every child embrace learning, develop their thinking,
                build self-confidence, and achieve their personal best.
              </p>
            </article>
            <article className="reveal">
              <span className="reason-icon bg-purple">
                <Sparkles />
              </span>
              <h3>Our vision</h3>
              <p>
                To encourage thoughtful, capable young people who pursue their
                aspirations and contribute to the world around them.
              </p>
            </article>
            <article className="reveal">
              <span className="reason-icon bg-yellow">
                <Users />
              </span>
              <h3>Our everyday values</h3>
              <p>
                Kindness in our interactions. Curiosity in our questions.
                Respect for each child’s individuality. A partnership with every
                family.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container campus-grid">
          <div className="reveal">
            <Eyebrow>A place to feel at home</Eyebrow>
            <h2>
              Come meet our
              <br />
              <span className="text-purple">little community.</span>
            </h2>
            <p>
              Get a feel for our classrooms, talk to the team, and see what
              learning looks like here. There’s no better way to begin than a
              conversation.
            </p>
            <p className="address-copy">{school.address}</p>
            <ButtonLink to="/enquiry?intent=visit#enquiry-form">
              Plan a visit
            </ButtonLink>
          </div>
          <Photo
            id="colourful-celebrations"
            alt={photos[2].alt}
            className="campus-photo reveal"
          />
        </div>
      </section>
      <VisitCTA />
    </>
  );
}

export function Story() {
  return (
    <>
      <SEO title="Our story" />
      <PageHero
        eyebrow="Our story"
        color="pink"
        title={
          <>
            Every wonderful story
            <br />
            <span className="text-coral">starts with a little dream.</span>
          </>
        }
        text="Ours is a simple one: a school where children feel understood, families feel involved, and learning feels full of possibility."
        art="flower"
      />
      <section className="section">
        <div className="container story-layout">
          <div className="story-image reveal">
            <Photo id="green-day" alt={photos[0].alt} eager />
            <span className="handwritten">
              So many little stories. One happy family.
            </span>
          </div>
          <article className="story-letter reveal">
            <Eyebrow>A note to our families</Eyebrow>
            <h2>Hello, dear parent.</h2>
            <p>
              Every child arrives with a world of their own: favourite stories,
              endless questions, little worries, and wonderful ideas. At Wisdom
              World Academy, we believe a good education begins by getting to
              know that world.
            </p>
            <p>
              Our story is rooted in a belief in active learning. Children need
              opportunities to explore, create, practise, and discover—supported
              by people who see their potential and care about their progress.
            </p>
            <p>
              We also know that a child’s first and most important teachers are
              at home. Your hopes, observations, and questions are a valuable
              part of their journey. That’s why we see parents as partners,
              every step of the way.
            </p>
            <p>
              As our children grow, our purpose stays the same: to help them
              become confident learners, kind friends, and curious people.
            </p>
            <div className="letter-signoff">
              <Heart size={24} />
              <span>
                With warmth,
                <br />
                <strong>The Wisdom World Academy family</strong>
              </span>
            </div>
          </article>
        </div>
      </section>
      <section className="story-belief bg-mint">
        <div className="container">
          <Flower />
          <p>
            “Every child deserves an education that sparks joy and ignites
            curiosity.”
          </p>
          <span>Swati Pardeshi · From our school’s story</span>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our story is still growing"
            title="And there’s a place in it for you."
            text="Meet the people, explore the programmes, and discover a community ready to welcome your family."
          />
          <div className="center-actions">
            <ButtonLink to="/preschool-programme" secondary>
              Explore our programmes
            </ButtonLink>
            <ButtonLink to="/enquiry">Start a conversation</ButtonLink>
          </div>
        </div>
      </section>
      <VisitCTA />
    </>
  );
}

export function Difference() {
  return (
    <>
      <SEO title="The Wisdom difference" />
      <PageHero
        eyebrow="The Wisdom difference"
        color="mint"
        title={
          <>
            Childhood is a wonder.
            <br />
            <span className="text-teal">Let’s make room for it.</span>
          </>
        }
        text="Our approach brings together a child’s natural curiosity, the joy of play, and thoughtful guidance. Because learning grows when children feel they belong."
      />
      <WhyWisdom full />
      <section className="section bg-lilac">
        <div className="container editorial-grid">
          <div className="editorial-photo reveal">
            <Photo id="little-gardeners" alt={photos[1].alt} />
            <span className="photo-label">
              <Leaf size={18} />
              Real experiences. Lasting discoveries.
            </span>
          </div>
          <div className="editorial-copy reveal">
            <Eyebrow>Learning is everywhere</Eyebrow>
            <h2>
              A question today.
              <br />
              <span className="text-purple">A discovery tomorrow.</span>
            </h2>
            <p>
              A seed becomes a lesson in patience. A story becomes a chance to
              imagine. A shared activity becomes a first friendship.
            </p>
            <p>
              We connect learning to experiences children can see, touch, talk
              about, and remember. The aim is to grow understanding alongside a
              love of finding things out.
            </p>
            <ul className="check-list">
              <li>
                <Check />
                Hands-on exploration and creative expression
              </li>
              <li>
                <Check />
                Social and emotional growth alongside academics
              </li>
              <li>
                <Check />
                Learning that values each child’s individuality
              </li>
              <li>
                <Check />
                Open conversations between home and school
              </li>
            </ul>
            <ButtonLink to="/bagless-school" secondary>
              Discover bagless learning
            </ButtonLink>
          </div>
        </div>
      </section>
      <DayExplorer />
      <VisitCTA />
    </>
  );
}

const dayMoments = [
  {
    title: "A warm hello",
    icon: SunIcon,
    heading: "A little welcome goes a long way.",
    text: "Familiar faces, a friendly greeting, and time to settle in help children feel ready for the day.",
    prompt: "Growing: belonging & independence",
    art: "sun",
  },
  {
    title: "Make & discover",
    icon: Palette,
    heading: "Little hands. Wonderful ideas.",
    text: "Drawing, building, exploring textures, and asking questions make space for children to express themselves and try something new.",
    prompt: "Growing: creativity & problem-solving",
    art: "rainbow",
  },
  {
    title: "Stories & songs",
    icon: Music2,
    heading: "Once upon a wonderful time…",
    text: "Stories invite imagination. Songs bring rhythm and language to life. Sharing them gives every child a chance to listen, join in, and find their voice.",
    prompt: "Growing: language & self-expression",
    art: "rocket",
  },
  {
    title: "Play & connect",
    icon: Users,
    heading: "Big smiles are better together.",
    text: "Games, movement, and shared play create opportunities to cooperate, take turns, and make friendships.",
    prompt: "Growing: movement & social confidence",
    art: "sprout",
  },
];

export function DayExplorer() {
  const [active, setActive] = useState(0);
  const moment = dayMoments[active];
  return (
    <section className="section day-explorer">
      <div className="container">
        <SectionHeading
          eyebrow="The little things that make a day"
          title="Play. Discover. Smile. Repeat."
          text="Explore the kinds of experiences that bring our learning approach to life."
        />
        <div className="day-layout">
          <div
            className="day-tabs"
            role="tablist"
            aria-label="Explore learning experiences"
            aria-orientation="vertical"
          >
            {dayMoments.map(({ title, icon: Icon }, index) => (
              <button
                key={title}
                id={`day-tab-${index}`}
                role="tab"
                aria-selected={active === index}
                aria-controls="day-panel"
                tabIndex={active === index ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={(event) => {
                  let next;
                  if (event.key === "ArrowDown")
                    next = (index + 1) % dayMoments.length;
                  if (event.key === "ArrowUp")
                    next = (index + dayMoments.length - 1) % dayMoments.length;
                  if (event.key === "Home") next = 0;
                  if (event.key === "End") next = dayMoments.length - 1;
                  if (next !== undefined) {
                    event.preventDefault();
                    setActive(next);
                    document.getElementById(`day-tab-${next}`)?.focus();
                  }
                }}
              >
                <span>
                  <Icon size={22} />
                  {title}
                </span>
                <ArrowRight size={19} />
              </button>
            ))}
          </div>
          <div
            className="day-panel"
            id="day-panel"
            role="tabpanel"
            aria-labelledby={`day-tab-${active}`}
            tabIndex={0}
          >
            <div key={active} className="panel-content">
              <ProgramArt type={moment.art} />
              <h3>{moment.heading}</h3>
              <p>{moment.text}</p>
              <span className="skill-tag">
                <Sparkles size={15} />
                {moment.prompt}
              </span>
            </div>
          </div>
        </div>
        <p className="fine-print centered">
          These are examples of learning experiences, rather than a fixed daily
          timetable. Ask us about your child’s class routine.
        </p>
      </div>
    </section>
  );
}

export function Programmes() {
  const [params, setParams] = useSearchParams();
  const selected = Math.max(
    0,
    programmes.findIndex((item) => item.id === params.get("stage")),
  );
  const programme = programmes[selected];
  const change = (index) => {
    const next = new URLSearchParams(params);
    next.set("stage", programmes[index].id);
    setParams(next, { replace: true, preventScrollReset: true });
  };
  return (
    <>
      <SEO title="Preschool & primary programmes" />
      <PageHero
        eyebrow="Our programmes"
        title={
          <>
            Every stage.
            <br />
            <span className="text-coral">A new kind of wonderful.</span>
          </>
        }
        text="Thoughtful beginnings for nursery, kindergarten, and beyond. Discover a programme that meets your child where they are—and helps them grow."
      />
      <section id="programme-explorer" className="section programme-explorer">
        <div className="container">
          <SectionHeading
            eyebrow="Find their happy starting point"
            title="Little steps, made for them."
          />
          <div
            className="programme-tabs"
            role="tablist"
            aria-label="Choose a school programme"
          >
            {programmes.map((item, index) => (
              <button
                key={item.id}
                id={`stage-${item.id}`}
                role="tab"
                aria-selected={selected === index}
                aria-controls="programme-panel"
                tabIndex={selected === index ? 0 : -1}
                className={`stage-tab card-${item.color}`}
                onClick={() => change(index)}
                onKeyDown={(event) => {
                  let next;
                  if (event.key === "ArrowRight")
                    next = (index + 1) % programmes.length;
                  if (event.key === "ArrowLeft")
                    next = (index + programmes.length - 1) % programmes.length;
                  if (event.key === "Home") next = 0;
                  if (event.key === "End") next = programmes.length - 1;
                  if (next !== undefined) {
                    event.preventDefault();
                    change(next);
                    document
                      .getElementById(`stage-${programmes[next].id}`)
                      ?.focus();
                  }
                }}
              >
                <ProgramArt type={item.art} />
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.age}</small>
                </span>
              </button>
            ))}
          </div>
          <div
            className={`programme-detail card-${programme.color}`}
            id="programme-panel"
            role="tabpanel"
            aria-labelledby={`stage-${programme.id}`}
            tabIndex={0}
          >
            <div key={programme.id} className="programme-detail-inner">
              <div>
                <Eyebrow>{programme.nickname}</Eyebrow>
                <h2>
                  {programme.name}: a world
                  <br />
                  of possibility.
                </h2>
                <p>{programme.detail}</p>
                <ul className="check-list">
                  {programme.skills.map((skill) => (
                    <li key={skill}>
                      <Check size={18} />
                      {skill}
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  to={`/enquiry?programme=${programme.id}#enquiry-form`}
                >
                  Enquire about {programme.name}
                </ButtonLink>
              </div>
              <div className="programme-activity">
                <ProgramArt type={programme.art} />
                <h3>A little glimpse of learning</h3>
                <p>{programme.activity}</p>
                <span className="age-label">Age guidance: {programme.age}</span>
              </div>
            </div>
          </div>
          <p className="fine-print centered">
            Age bands are guidance from our existing programmes. Please confirm
            current age cut-offs, eligibility, and class availability with the
            admissions team.
          </p>
        </div>
      </section>
      <DayExplorer />
      <FAQ compact />
      <VisitCTA />
    </>
  );
}

export function Bagless() {
  return (
    <>
      <SEO title="Bagless school programme" />
      <PageHero
        eyebrow="Bagless learning"
        color="mint"
        title={
          <>
            Lighter bags.
            <br />
            <span className="text-teal">Bigger discoveries.</span>
          </>
        }
        text="A little less to carry. A lot more to explore. Our bagless approach puts hands-on experiences and joyful learning at the centre of the school day."
      />
      <section className="section">
        <div className="container editorial-grid">
          <div className="editorial-copy reveal">
            <Eyebrow>Bring your curiosity</Eyebrow>
            <h2>
              Learning is something
              <br />
              <span className="text-teal">we do.</span>
            </h2>
            <p>
              Our Bagless School initiative aims to reduce the burden of heavy
              backpacks and create a more comfortable, engaging learning
              experience.
            </p>
            <p>
              Through practical activities, shared resources, and interactive
              teaching, children have more opportunities to participate,
              explore, and connect ideas to the world around them.
            </p>
            <p>
              Talk to our team about how the initiative works in your child’s
              class and which everyday essentials to bring.
            </p>
            <ButtonLink to="/enquiry?topic=bagless#enquiry-form" secondary>
              Ask about bagless learning
            </ButtonLink>
          </div>
          <div className="editorial-photo reveal">
            <Photo id="learning-together" alt={photos[7].alt} eager />
            <span className="photo-label">
              <Sparkles size={18} />
              Curiosity comes along for the ride
            </span>
          </div>
        </div>
      </section>
      <section className="section bg-mint">
        <div className="container">
          <SectionHeading
            eyebrow="A fresh way to learn"
            title="More doing. More discovering."
          />
          <div className="mission-grid">
            <article>
              <span className="reason-icon bg-coral">
                <Shapes />
              </span>
              <h3>Hands-on experiences</h3>
              <p>
                Making, observing, and experimenting help children connect new
                ideas to things they understand.
              </p>
            </article>
            <article>
              <span className="reason-icon bg-purple">
                <BookOpen />
              </span>
              <h3>Thoughtful resources</h3>
              <p>
                Shared learning materials and interactive resources support
                exploration without a heavy load.
              </p>
            </article>
            <article>
              <span className="reason-icon bg-yellow">
                <Heart />
              </span>
              <h3>A joyful approach</h3>
              <p>
                Space to move, collaborate, and join in helps make learning feel
                more comfortable and enjoyable.
              </p>
            </article>
          </div>
        </div>
      </section>
      <DayExplorer />
      <VisitCTA />
    </>
  );
}

export function Parents() {
  return (
    <>
      <SEO title="For parents" />
      <PageHero
        eyebrow="Parent corner"
        color="lilac"
        title={
          <>
            Their little world.
            <br />
            <span className="text-purple">Our shared adventure.</span>
          </>
        }
        text="A place for the questions, hopes, and everyday moments that come with helping your child grow. We’re in this together."
        art="flower"
      />
      <section className="section">
        <div className="container parent-welcome">
          <div className="reveal">
            <Eyebrow>Every parent’s voice matters</Eyebrow>
            <h2>
              You know them best.
              <br />
              We’re here to <span className="text-purple">listen.</span>
            </h2>
            <p>
              A strong relationship between home and school begins with a simple
              conversation. Tell us about your child’s interests, the things
              they find tricky, and the little achievements that make you proud.
            </p>
            <p>
              Already part of our school family? We welcome your feedback,
              questions, and suggestions.
            </p>
            <ButtonLink to="/enquiry?topic=feedback#enquiry-form" secondary>
              Share your thoughts
            </ButtonLink>
          </div>
          <div className="parent-welcome-art">
            <Rainbow />
            <span className="handwritten">Growing together, every day.</span>
          </div>
        </div>
      </section>
      <section className="section bg-lilac">
        <div className="container">
          <SectionHeading
            eyebrow="A gentle start"
            title="Little ways to make a big day easier."
            text="A few thoughtful habits can help school feel familiar before the first morning."
          />
          <div className="parent-tips">
            {[
              [
                "01",
                "Talk about the happy little things",
                "A new friend, a favourite story, something fun to make. Keep conversations about school simple and reassuring.",
              ],
              [
                "02",
                "Practise a comfortable routine",
                "Familiar wake-up, snack, and bedtime routines help little ones know what to expect. Try small steps at their pace.",
              ],
              [
                "03",
                "Let us get to know your child",
                "Share their interests, comforting habits, and any support they may need. Small details can make a big difference.",
              ],
              [
                "04",
                "Celebrate effort, not just outcomes",
                "Trying something new, asking for help, or being kind to a friend is a lovely reason to say, “I’m proud of you.”",
              ],
            ].map(([number, title, text]) => (
              <article className="parent-tip reveal" key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container admission-steps">
          <SectionHeading
            eyebrow="Your first step starts here"
            title="Let’s make getting started simple."
          />
          <div className="steps-grid">
            <article>
              <span>1</span>
              <h3>Say hello</h3>
              <p>
                Tell us a little about your child and what you’re looking for.
              </p>
            </article>
            <article>
              <span>2</span>
              <h3>Visit our world</h3>
              <p>Meet our team and explore the school at an agreed time.</p>
            </article>
            <article>
              <span>3</span>
              <h3>Find their starting point</h3>
              <p>Discuss the programme, fees, and admission requirements.</p>
            </article>
          </div>
          <div className="center-actions">
            <ButtonLink to="/enquiry?intent=visit#enquiry-form">
              Take the first little step
            </ButtonLink>
          </div>
        </div>
      </section>
      <div id="faqs">
        <FAQ />
      </div>
      <VisitCTA />
    </>
  );
}

export function NotFound() {
  return (
    <>
      <SEO title="Page not found" />
      <section className="not-found container">
        <ProgramArt type="rocket" />
        <Eyebrow>Oops! A little detour.</Eyebrow>
        <h1>
          This page has gone
          <br />
          on an adventure.
        </h1>
        <p>Let’s head back to a place we know.</p>
        <ButtonLink to="/">Back to our happy world</ButtonLink>
      </section>
      <VisitCTA />
    </>
  );
}
