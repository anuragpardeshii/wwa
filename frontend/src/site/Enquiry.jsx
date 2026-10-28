import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Heart,
  LoaderCircle,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";
import { Rainbow } from "./Art";
import { Eyebrow, FAQ, PageHero, Photo, SEO, VisitCTA } from "./UI";
import { photos, programmes, school } from "./data";

// Web3Forms access keys are public form identifiers. Retain the existing school's
// configured recipient; an environment override supports future rotation.
const formAccessKey =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
  "422abc9b-bde7-443b-ac1c-79e2b489d827";

function Field({ label, name, error, required = false, children, ...props }) {
  return (
    <div className={`form-field ${props.className || ""}`}>
      <label htmlFor={name}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {children || (
        <input
          {...props}
          id={name}
          name={name}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      )}
      {error && (
        <p className="field-error" id={`${name}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}

export function EnquiryForm({ franchise = false }) {
  const [params] = useSearchParams();
  const form = useRef(null);
  const statusRef = useRef(null);
  const controllerRef = useRef(null);
  const [state, setState] = useState({ status: "idle", message: "" });
  const [errors, setErrors] = useState({});
  const requestedProgramme =
    programmes.find((item) => item.id === params.get("programme"))?.name || "";
  const intent = params.get("intent");
  const topic = params.get("topic");
  const enquiryType = franchise
    ? "Franchise enquiry"
    : intent === "visit"
      ? "School visit request"
      : topic === "feedback"
        ? "Parent feedback"
        : topic === "bagless"
          ? "Bagless programme enquiry"
          : "Admission enquiry";
  useEffect(() => () => controllerRef.current?.abort(), []);
  useEffect(() => {
    if (state.status === "success" || state.status === "error")
      statusRef.current?.focus();
  }, [state.status]);
  const submit = async (event) => {
    event.preventDefault();
    if (state.status === "sending") return;
    const formElement = event.currentTarget;
    const data = new FormData(formElement);
    const nextErrors = {};
    if (String(data.get("name")).trim().length < 2)
      nextErrors.name = "Please enter your name.";
    const phone = String(data.get("phone")).replace(/\D/g, "");
    if (phone.length < 10 || phone.length > 15)
      nextErrors.phone = "Please enter a valid phone number with 10–15 digits.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.get("email")).trim()))
      nextErrors.email = "Please enter a valid email address.";
    if (franchise && String(data.get("city")).trim().length < 2)
      nextErrors.city = "Please enter your city.";
    if (!data.get("consent"))
      nextErrors.consent = "Please allow us to contact you about this enquiry.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      formElement.elements[Object.keys(nextErrors)[0]]?.focus();
      return;
    }
    if (data.get("botcheck")) return;
    setState({ status: "sending", message: "" });
    data.set("name", String(data.get("name")).trim());
    data.set("email", String(data.get("email")).trim());
    data.append("access_key", formAccessKey);
    const selectedType = String(data.get("interest") || enquiryType);
    data.append("subject", `${selectedType} — Wisdom World Academy website`);
    data.append("from_name", "Wisdom World Academy website");
    data.append("enquiry_type", selectedType);
    const controller = new AbortController();
    controllerRef.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("Submission failed");
      setState({
        status: "success",
        message: franchise
          ? "Your interest has been shared with our team. We’ll be in touch to continue the conversation."
          : selectedType === "School visit request"
            ? "Your visit request has been sent. Our team will contact you to agree on a date and time. Your visit is not yet booked."
            : "Your message has been sent to our team. We look forward to speaking with you.",
      });
      formElement.reset();
    } catch {
      setState({
        status: "error",
        message:
          "We couldn’t send your message. Your details are still here—please try again, or call us on +91 95893 04050.",
      });
    } finally {
      clearTimeout(timeout);
      controllerRef.current = null;
    }
  };
  return (
    <div className="enquiry-form-card" id="enquiry-form">
      {state.status === "success" ? (
        <div
          className="form-success"
          role="status"
          tabIndex={-1}
          ref={statusRef}
        >
          <CheckCircle2 size={48} />
          <h2>A lovely first hello!</h2>
          <p>{state.message}</p>
          <button
            className="button button-secondary"
            onClick={() => setState({ status: "idle", message: "" })}
          >
            Send another enquiry <ArrowRight size={18} />
          </button>
        </div>
      ) : (
        <>
          <Eyebrow>
            {franchise
              ? "Start a conversation"
              : topic === "feedback"
                ? "We’re listening"
                : "A wonderful beginning"}
          </Eyebrow>
          <h2>
            {franchise
              ? "Let’s explore the possibilities."
              : topic === "feedback"
                ? "Share your thoughts with us."
                : intent === "visit"
                  ? "Let’s plan a little visit."
                  : "Say hello to your next chapter."}
          </h2>
          <p className="form-intro">
            {franchise
              ? "Tell us about yourself and your interest in early education."
              : "Leave a few details and our team will get in touch."}{" "}
            <span>Fields marked * are required.</span>
          </p>
          {state.status === "error" && (
            <div
              className="form-alert"
              role="alert"
              tabIndex={-1}
              ref={statusRef}
            >
              {state.message} <a href={school.phoneHref}>Call the school</a>
            </div>
          )}
          <form
            ref={form}
            onSubmit={submit}
            noValidate
            aria-busy={state.status === "sending"}
          >
            <fieldset disabled={state.status === "sending"}>
              <legend className="sr-only">{enquiryType}</legend>
              <div className="form-grid">
                <Field
                  label={franchise ? "Your name" : "Parent / guardian name"}
                  name="name"
                  autoComplete="name"
                  placeholder="Your full name"
                  required
                  error={errors.name}
                  maxLength={100}
                />
                <Field
                  label="Phone number"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="Your mobile number"
                  required
                  error={errors.phone}
                  maxLength={22}
                />
                <Field
                  label="Email address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  error={errors.email}
                  maxLength={150}
                />
                {franchise ? (
                  <Field
                    label="City"
                    name="city"
                    autoComplete="address-level2"
                    placeholder="Where would you like to start?"
                    required
                    error={errors.city}
                    maxLength={100}
                  />
                ) : (
                  <Field
                    label="Child’s first name"
                    name="child_name"
                    autoComplete="off"
                    placeholder="Your little one’s name (optional)"
                    maxLength={80}
                  />
                )}
                {franchise ? (
                  <>
                    <Field label="Your background" name="experience">
                      <select name="experience" id="experience" defaultValue="">
                        <option value="">Select an option (optional)</option>
                        <option>Educator / school administrator</option>
                        <option>Business owner</option>
                        <option>New to early education</option>
                        <option>Other background</option>
                      </select>
                    </Field>
                    <Field
                      label="When would you like to begin?"
                      name="timeframe"
                    >
                      <select name="timeframe" id="timeframe" defaultValue="">
                        <option value="">Select a timeframe (optional)</option>
                        <option>Within 6 months</option>
                        <option>6–12 months</option>
                        <option>Just exploring</option>
                      </select>
                    </Field>
                  </>
                ) : (
                  <>
                    <Field label="Programme of interest" name="programme">
                      <select
                        id="programme"
                        name="programme"
                        defaultValue={requestedProgramme}
                        key={requestedProgramme}
                      >
                        <option value="">Help me choose</option>
                        {programmes.map((item) => (
                          <option key={item.id} value={item.name}>
                            {item.name} · {item.age}
                          </option>
                        ))}
                        <option>Classes I–VIII / other enquiry</option>
                      </select>
                    </Field>
                    <Field label="How can we help?" name="interest">
                      <select
                        id="interest"
                        name="interest"
                        defaultValue={enquiryType}
                        key={enquiryType}
                      >
                        <option>Admission enquiry</option>
                        <option>School visit request</option>
                        <option>Bagless programme enquiry</option>
                        <option>Parent feedback</option>
                        <option>General question</option>
                      </select>
                    </Field>
                  </>
                )}
                <div className="form-field form-full">
                  <label htmlFor="message">
                    A little more about your enquiry
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    maxLength={2000}
                    placeholder={
                      franchise
                        ? "Tell us about your plans and any questions you have…"
                        : "Questions, a preferred visit time, or anything you’d like us to know…"
                    }
                  />
                </div>
                <div className="honeypot" aria-hidden="true">
                  <label htmlFor="botcheck">Leave this field empty</label>
                  <input
                    type="text"
                    name="botcheck"
                    id="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <div className="form-full">
                  <label className="consent-label">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      aria-invalid={Boolean(errors.consent)}
                      aria-describedby={
                        errors.consent ? "consent-error" : undefined
                      }
                    />
                    <span>
                      I agree to be contacted by Wisdom World Academy about this
                      enquiry. *
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="field-error" id="consent-error">
                      {errors.consent}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="button button-primary form-submit"
                >
                  {state.status === "sending" ? (
                    <>
                      Sending your hello{" "}
                      <LoaderCircle className="loading-spinner" size={18} />
                    </>
                  ) : (
                    <>
                      {franchise
                        ? "Send franchise enquiry"
                        : "Send your enquiry"}
                      <Send size={18} />
                    </>
                  )}
                </button>
              </div>
            </fieldset>
            <p className="form-privacy">
              <ShieldCheck size={15} />
              We’ll use your details to respond to this enquiry.
            </p>
          </form>
        </>
      )}
    </div>
  );
}

export default function Enquiry() {
  return (
    <>
      <SEO title="Visit, admissions & contact" />
      <PageHero
        eyebrow="Come say hello"
        title={
          <>
            Big beginnings start
            <br />
            <span className="text-coral">with a little hello.</span>
          </>
        }
        text="Curious about our school? Wondering where your child might fit in? We’d love to meet you and help you take the next step."
      />
      <section className="section contact-section">
        <div className="container contact-grid">
          <aside className="contact-info">
            <Eyebrow>Let’s get to know each other</Eyebrow>
            <h2>
              Our door is open.
              <br />
              <span className="text-teal">So are our hearts.</span>
            </h2>
            <p>
              Talk to our team about programmes, admissions, or a visit to our
              school.
            </p>
            <div className="contact-detail">
              <span>
                <Phone />
              </span>
              <div>
                <h3>Give us a ring</h3>
                <a href={school.phoneHref}>{school.phone}</a>
              </div>
            </div>
            <div className="contact-detail">
              <span>
                <MapPin />
              </span>
              <div>
                <h3>Find our little world</h3>
                <p>{school.address}</p>
                <a
                  className="text-link"
                  href={school.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get directions <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div className="contact-detail">
              <span>
                <Clock3 />
              </span>
              <div>
                <h3>Let’s find a good time</h3>
                <p>
                  Please call ahead to confirm office hours and arrange your
                  school visit.
                </p>
              </div>
            </div>
            <div className="contact-photo">
              <Photo id="classroom-friends" alt={photos[3].alt} />
              <span>
                <Heart size={16} />
                We can’t wait to say hello.
              </span>
            </div>
          </aside>
          <EnquiryForm />
        </div>
      </section>
      <FAQ compact />
      <VisitCTA />
    </>
  );
}

export function Franchise() {
  return (
    <>
      <SEO title="Start your own preschool" />
      <PageHero
        eyebrow="Grow with Wisdom World"
        color="lilac"
        title={
          <>
            A passion for little minds.
            <br />
            <span className="text-purple">A possibility worth exploring.</span>
          </>
        }
        text="Interested in starting your own Wisdom World Academy preschool? Let’s begin with a conversation about your vision for early education."
        art="flower"
      />
      <section className="section">
        <div className="container contact-grid">
          <div className="franchise-copy">
            <Eyebrow>A shared purpose</Eyebrow>
            <h2>
              Bring your dream.
              <br />
              Let’s talk about
              <br />
              <span className="text-purple">the next step.</span>
            </h2>
            <p>
              Creating a caring place for children begins with people who
              believe in the value of early learning. We’d love to hear about
              your background, your community, and what you hope to build.
            </p>
            <p>
              Our team will discuss the opportunity, requirements, and
              availability directly with you.
            </p>
            <div className="franchise-art">
              <Rainbow />
              <span className="handwritten">
                Small beginnings. Meaningful possibilities.
              </span>
            </div>
            <a className="text-link" href={school.phoneHref}>
              <Phone size={18} />
              {school.phone}
            </a>
          </div>
          <EnquiryForm franchise />
        </div>
      </section>
      <VisitCTA />
    </>
  );
}
