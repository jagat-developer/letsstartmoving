import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, Play, Sparkles } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { ServiceCardGrid, ServiceDirectory, Stars, TrustPanel } from "@/components/PageParts";
import { contact, mainServiceCards, servicePages } from "@/lib/site-data";

const aboutBullets = [
  "Professional packing services and quality supplies",
  "Furniture, appliance, fitness equipment, and small-item moving",
  "Residential and commercial office relocations",
  "Ottawa, Barrhaven, Nepean, Orleans and surrounding areas",
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

export default function HomePage() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              Premium Ottawa movers
            </p>
            <h1>Best moving company in Ottawa & surrounding areas.</h1>
            <p className="hero-lede">
              Professional packing, efficient transportation, and budget-friendly
              rates from a local Ottawa team focused on making every move feel
              calm, clear, and carefully handled.
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
            </div>
            <div className="rating-row">
              <Stars />
              <strong>4.9 / 5 trusted by Ottawa customers</strong>
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

      <section className="dark-feature" id="why">
        <div className="feature-image">
          <Image
            src="/brand-assets/lets-start-moving-05.jpg"
            alt="Professional moving team carrying boxes"
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
          />
        </div>
        <div className="feature-copy">
          <p className="eyebrow">Reliable, efficient, cost-effective</p>
          <h2>Moving solutions built on care, reliability, and experience.</h2>
          <p>
            Let's Start Moving is dedicated to simplifying transportation for
            households and businesses across Canada with dependable, timely
            service and a team that treats every move with professionalism.
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

      <section className="section process-section">
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

      <section className="fleet-section">
        <div className="fleet-copy">
          <p className="eyebrow">Ottawa moving support</p>
          <h2>Local details, Canadian service standards, premium presentation.</h2>
          <p>
            The experience brings together local contact details, a complete
            service structure, practical quote fields, video quote support, and
            clear area coverage for Ottawa customers.
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
