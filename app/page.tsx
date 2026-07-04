import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Play, Sparkles } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { ServiceCardGrid, ServiceDirectory, Stars, TrustPanel } from "@/components/PageParts";
import { contact, mainServiceCards, servicePages } from "@/lib/site-data";

const aboutBullets = [
  "Professional packing services and quality supplies",
  "Furniture, appliance, fitness equipment, and small-item moving",
  "Residential and commercial office relocations",
  "Ottawa, Canada, and America long-distance requests",
];

const reviews = [
  {
    quote:
      "One of the most comfortable, helpful shipment experiences. The team communicated clearly and handled everything with care.",
    name: "Roshan Sharma",
  },
  {
    quote:
      "Very reliable and nice people. They helped at the last minute, did not overcharge, and were cooperative from start to finish.",
    name: "Tristan Duperre",
  },
  {
    quote:
      "Best moving experience with the Let's Start Moving team. Fabulous job and highly recommended for careful, reasonable service.",
    name: "Bateki Prince",
  },
];

const marketProof = [
  "Fully Licensed",
  "Fair, Transparent Quotes",
  "Experienced Crews",
  "Canada & America Support",
  "WhatsApp Ready",
];

const processSteps = [
  {
    title: "Tell us the basics",
    text: "Share addresses, move date, home size, access details, and whether the move is local, Canada-wide, or cross-border.",
  },
  {
    title: "Get a clear quote",
    text: "The team confirms crew size, truck timing, route details, and a transparent price before move day.",
  },
  {
    title: "Move day, handled",
    text: "Movers protect, load, transport, and place furniture exactly where you want it.",
  },
];

const areaGroups = [
  {
    title: "Canada - Ottawa",
    places: "Ottawa, Nepean, Barrhaven, Orleans, Kanata, Gatineau and nearby areas",
  },
  {
    title: "Canada - Long Distance",
    places: "Ontario moves, province-to-province relocations, storage stops and scheduled delivery windows",
  },
  {
    title: "America",
    places: "USA-bound moving requests, cross-border planning, route coordination and availability confirmation",
  },
];

const pricingOptions = [
  {
    title: "Hourly",
    price: "Clear quote",
    text: "Best for smaller local moves and flexible timing.",
  },
  {
    title: "Flat-rate",
    price: "Custom",
    text: "Fixed-scope moves with defined inventory, access and route details.",
  },
  {
    title: "Office & Cross-border",
    price: "Quote",
    text: "After-hours, business, Canada-wide and America-bound moving support.",
  },
];

const faqs = [
  {
    question: "Do you help with Canada and America moves?",
    answer:
      "Yes. The team can support local Ottawa moves, Canada-wide moves and America-bound moving requests. Availability and route details are confirmed during the quote.",
  },
  {
    question: "Can I request a quote on WhatsApp?",
    answer:
      "Yes. Use WhatsApp to send move details, photos, access notes or quick questions before the quote is prepared.",
  },
  {
    question: "Do you offer flat-rate quotes?",
    answer:
      "For moves with clear inventory and access details, the team can prepare a fixed quote. Otherwise, hourly or customized pricing may be recommended.",
  },
  {
    question: "Are packing and specialty items included?",
    answer:
      "Packing, appliances, furniture, pianos, treadmills, hot tubs and small-item moving can be included depending on your move plan.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              Canada & America movers
            </p>
            <h1>Moving made stress-free across Ottawa, Canada & America.</h1>
            <p className="hero-lede">
              Professional packing, efficient transportation, and budget-friendly
              rates from a local Ottawa team handling local, Canada-wide, and
              America-bound moving requests with care.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary btn-large" href="/get-a-quote">
                Request a Free Quote
                <ArrowRight size={20} aria-hidden="true" />
              </Link>
              <a className="btn btn-dark btn-large" href={contact.phoneHref}>
                <Phone size={20} aria-hidden="true" />
                {contact.phone}
              </a>
              <a className="btn btn-primary btn-large" href={contact.whatsappHref}>
                <MessageCircle size={20} aria-hidden="true" />
                WhatsApp us
              </a>
            </div>
            <div className="rating-row">
              <Stars />
              <strong>4.9 / 5 trusted by Ottawa and Canada customers</strong>
              <span>Same-week availability</span>
            </div>
          </div>

          <div className="hero-media" aria-label="Moving service preview">
            <div className="hero-photo">
              <Image
                src="/brand-assets/lsm-ca-hero.jpg"
                alt="Professional mover loading boxes into a van"
                fill
                sizes="(max-width: 900px) 100vw, 48vw"
                priority
              />
            </div>
            <div className="fleet-strip">
              <Image
                src="/brand-assets/lsm-ca-team.jpg"
                alt="Let's Start Moving crew handling boxes inside a home"
                fill
                sizes="(max-width: 900px) 88vw, 320px"
              />
            </div>
            <div className="hero-badge-card">
              <span>10+</span>
              Years of careful moves
            </div>
          </div>
        </div>
      </section>

      <section className="quote-band" aria-label="Request a quote">
        <div className="quote-intro">
          <p className="eyebrow">Free quote in 60 seconds</p>
          <h2>Tell us where the move starts and where it lands.</h2>
          <p>
            Share your pickup, drop-off, move type, date, contact details, and
            access needs so the team can prepare a clear, upfront moving quote.
          </p>
        </div>
        <QuoteForm />
      </section>

      <section className="market-strip" aria-label="Canada and America moving support">
        <div>
          <p className="eyebrow">We move Canada & America</p>
          <h2>Local focus, cross-border confidence.</h2>
        </div>
        <div className="market-proof-grid">
          {marketProof.map((item) => (
            <span key={item}>
              <CheckCircle2 size={17} aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <TrustPanel />

      <section className="section services-section">
        <div className="section-heading">
          <p className="eyebrow">What we offer</p>
          <h2>Comprehensive moving services tailored for Ottawa.</h2>
          <p>
            From packing and local moves to commercial relocations, residential
            moving, long-distance support, and specialty items, every detail is
            planned around your move.
          </p>
        </div>
        <ServiceCardGrid items={mainServiceCards} />
      </section>

      <section className="section process-section">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>Three calm steps to moving day.</h2>
          <p>
            Start with the basics, confirm a clear plan, then let the crew handle
            the heavy work.
          </p>
        </div>
        <div className="step-grid">
          {processSteps.map((step, index) => (
            <article className="step-card" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-feature" id="why">
        <div className="feature-image">
          <Image
            src="/brand-assets/lsm-ca-why.jpg"
            alt="Professional movers loading boxes into a moving van"
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
          />
        </div>
        <div className="feature-copy">
          <p className="eyebrow">Reliable, efficient, cost-effective</p>
          <h2>Moving solutions built on care, reliability, and experience.</h2>
          <p>
            Let's Start Moving is dedicated to simplifying transportation for
            households and businesses across Canada and America with dependable,
            timely service and a team that treats every move with professionalism.
          </p>
          <div className="proof-grid">
            {aboutBullets.map((point) => (
              <div className="proof-point" key={point}>
                <CheckCircle2 size={18} aria-hidden="true" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">Service menu</p>
            <h2>A complete service menu for homes, offices, and specialty moves.</h2>
          </div>
          <Link className="btn btn-outline" href="/services">
            View all services
          </Link>
        </div>
        <ServiceDirectory />
      </section>

      <section className="section reviews-section">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">Testimonials</p>
            <h2>What customers say after the boxes land.</h2>
          </div>
          <div className="review-score">
            <Stars />
            <strong>4.9 / 5</strong>
          </div>
        </div>
        <div className="review-grid">
          {reviews.map((testimonial) => (
            <article className="review-card" key={testimonial.name}>
              <Stars />
              <p>"{testimonial.quote}"</p>
              <strong>{testimonial.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section areas-section" id="areas">
        <div className="section-heading">
          <p className="eyebrow">Areas we serve</p>
          <h2>Canada-first service with America-ready coordination.</h2>
          <p>
            Local and long-distance moves begin with Ottawa-area expertise, then
            extend to Canada-wide and America-bound relocation requests when the
            route and schedule are confirmed.
          </p>
        </div>
        <div className="area-grid">
          {areaGroups.map((group) => (
            <article className="area-card" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.places}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section pricing-section">
        <div className="section-heading">
          <p className="eyebrow">Pricing</p>
          <h2>Honest quotes with no bait-and-switch.</h2>
          <p>
            Pricing depends on inventory, access, crew size, distance and timing.
            The goal is always a clear quote before move day.
          </p>
        </div>
        <div className="pricing-grid">
          {pricingOptions.map((option) => (
            <article className="pricing-card" key={option.title}>
              <span>{option.title}</span>
              <h3>{option.price}</h3>
              <p>{option.text}</p>
              <Link href="/get-a-quote">
                Get a quote
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="video-section">
        <div>
          <p className="eyebrow">Video quote</p>
          <h2>Record. Submit. Move.</h2>
          <p>
            Record your items with a smartphone, upload the video, and receive a
            personalized fixed-price estimate without an in-person appointment.
          </p>
        </div>
        <Link className="video-button" href="/video-quote">
          <span>
            <Play size={24} fill="currentColor" aria-hidden="true" />
          </span>
          Video quote
        </Link>
      </section>

      <section className="section faq-section">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Questions customers ask before booking.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="fleet-section">
        <div className="fleet-copy">
          <p className="eyebrow">Ottawa moving support</p>
          <h2>Ready when you are.</h2>
          <p>
            Same-week slots can fill quickly. Send the move details by quote
            form, phone, or WhatsApp and the team will help confirm the next
            step.
          </p>
        </div>
        <div className="mini-service-list">
          {servicePages.slice(0, 8).map((service) => (
            <Link key={service.slug} href={`/${service.slug}`}>
              {service.title}
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
