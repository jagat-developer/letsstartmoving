import { ArrowRight, CheckCircle2 } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { PageHero, TrustPanel } from "@/components/PageParts";

const quotePromises = [
  "Clear, upfront quote with no hidden charges",
  "Pickup and drop-off access details captured",
  "Property type and freight/access type included",
  "Residential, commercial, packing, storage, and specialty options",
];

export default function QuotePage() {
  return (
    <main>
      <PageHero
        eyebrow="Get a free quote"
        title="Tell us about your move and we will get back to you."
        subtitle="Share move details, distance, property type, and access details so the team can prepare a precise obligation-free quote."
        image="/brand-assets/lsm-ca-why.jpg"
      />
      <TrustPanel />

      <section className="quote-page-wrap">
        <div className="quote-intro large">
          <p className="eyebrow">Request your free moving quote</p>
          <h2>Committed to delivering the best service.</h2>
          <p>
            Let's Start Moving is a dedicated team where excellence is the
            standard and customer satisfaction is the top priority.
          </p>
          <div className="check-list">
            {quotePromises.map((item) => (
              <span key={item}>
                <CheckCircle2 size={18} aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
          <a className="btn btn-dark" href="/video-quote">
            Prefer a video quote?
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="quote-page-card">
          <QuoteForm detailed />
        </div>
      </section>
    </main>
  );
}
