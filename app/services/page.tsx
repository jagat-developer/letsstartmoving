import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero, ServiceCardGrid, ServiceDirectory, TrustPanel } from "@/components/PageParts";
import { mainServiceCards } from "@/lib/site-data";

const whyItems = [
  "Trained and professional movers",
  "Affordable and transparent pricing",
  "On-time, every time",
  "Careful support from packing through placement",
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our services"
        title="Comprehensive moving services tailored for you."
        subtitle="Best moving service in Barrhaven, Nepean, Orleans, Ottawa and nearby areas - safely, efficiently, and always on time."
        image="/brand-assets/lsm-service-local.jpg"
      />
      <TrustPanel />

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Core services</p>
          <h2>Primary moving services for Ottawa and surrounding areas.</h2>
          <p>
            From single-item moves to full commercial relocations, the service
            catalogue covers residential, commercial, packing, and long-distance
            support across Ottawa and surrounding areas.
          </p>
        </div>
        <ServiceCardGrid items={mainServiceCards} />
      </section>

      <section className="dark-feature compact">
        <div className="feature-copy">
          <p className="eyebrow">Why Ottawa trusts us</p>
          <h2>From the first box to the last piece of furniture.</h2>
          <p>
            Trained movers, transparent pricing, punctual scheduling, and careful
            handling guide every part of the move.
          </p>
        </div>
        <div className="proof-grid">
          {whyItems.map((item) => (
            <div className="proof-point" key={item}>
              <CheckCircle2 size={18} aria-hidden="true" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">Full service directory</p>
            <h2>Every moving service in one clear directory.</h2>
          </div>
          <Link className="btn btn-primary" href="/get-a-quote">
            Get a quote
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <ServiceDirectory />
      </section>
    </main>
  );
}
