import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Play, Star } from "lucide-react";
import {
  iconMap,
  mainServiceCards,
  serviceGroups,
  servicePages,
  trustItems,
  type DetailItem,
  type ServicePage,
} from "@/lib/site-data";

export function Stars() {
  return (
    <span className="stars" aria-label="Five star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={16} fill="currentColor" aria-hidden="true" />
      ))}
    </span>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image = "/brand-assets/lsm-ca-hero.jpg",
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image?: string;
}) {
  return (
    <section className="page-hero">
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="page-hero-image">
        <Image src={image} alt="" fill sizes="(max-width: 900px) 100vw, 42vw" priority />
      </div>
    </section>
  );
}

export function TrustPanel() {
  return (
    <section className="trust-panel" aria-label="Trust highlights">
      {trustItems.map(({ label, icon: Icon }) => (
        <div className="trust-item" key={label}>
          <Icon size={22} aria-hidden="true" />
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}

export function ServiceCardGrid({ items = mainServiceCards }: { items?: ServicePage[] }) {
  return (
    <div className="service-grid">
      {items.map((service) => {
        const Icon = iconMap[service.iconName];
        return (
          <article className="service-card" key={service.slug}>
            <div className="service-photo">
              <Image src={service.image} alt={service.title} fill sizes="(max-width: 900px) 100vw, 25vw" />
            </div>
            <div className="service-body">
              <span className="service-icon">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3>{service.title}</h3>
              <p>{service.subtitle}</p>
              <Link href={`/${service.slug}`}>
                Know more
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function DetailGrid({ items }: { items: DetailItem[] }) {
  return (
    <div className="detail-grid">
      {items.map((item) => (
        <article className="detail-card" key={item.title}>
          <CheckCircle2 size={20} aria-hidden="true" />
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export function ServiceDirectory() {
  return (
    <div className="directory-grid">
      {serviceGroups.map((group) => (
        <section className="directory-group" key={group.title}>
          <h3>{group.title}</h3>
          {group.items.map((item) => (
            <Link key={item.slug} href={`/${item.slug}`}>
              <span>{item.title}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          ))}
        </section>
      ))}
    </div>
  );
}

export function ServiceDetailPage({ service }: { service: ServicePage }) {
  const Icon = iconMap[service.iconName];

  return (
    <>
      <PageHero
        eyebrow={service.category}
        title={service.title}
        subtitle={service.subtitle}
        image={service.image}
      />
      <TrustPanel />
      <section className="section split-feature">
        <div>
          <p className="eyebrow">Service details</p>
          <h2>{service.introTitle}</h2>
          {service.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link className="btn btn-primary" href="/get-a-quote">
            Get a Free Quote
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="feature-stat-card">
          <Icon size={34} aria-hidden="true" />
          <strong>{service.category}</strong>
          <span>Ottawa, Barrhaven, Nepean, Orleans and nearby areas</span>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Included details</p>
          <h2>{service.includesTitle}</h2>
        </div>
        <DetailGrid items={service.includes} />
      </section>

      <section className="dark-feature compact">
        <div className="feature-image">
          <Image src={service.image} alt={service.title} fill sizes="(max-width: 900px) 100vw, 42vw" />
        </div>
        <div className="feature-copy">
          <p className="eyebrow">Why choose us</p>
          <h2>{service.whyTitle}</h2>
          <p>{service.whyIntro}</p>
          <div className="proof-grid">
            {service.why.map((item) => (
              <div className="proof-point" key={item.title}>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>
                  <strong>{item.title}</strong>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="video-section">
        <div>
          <p className="eyebrow">Ready when you are</p>
          <h2>{service.ctaTitle}</h2>
          <p>{service.ctaText}</p>
        </div>
        <Link className="video-button" href="/get-a-quote">
          <span>
            <Play size={24} fill="currentColor" aria-hidden="true" />
          </span>
          Request quote
        </Link>
      </section>

      <section className="section">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">More services</p>
            <h2>Explore the full service menu.</h2>
          </div>
          <Link className="btn btn-outline" href="/services">
            View all services
          </Link>
        </div>
        <ServiceCardGrid items={servicePages.filter((item) => item.slug !== service.slug).slice(0, 4)} />
      </section>
    </>
  );
}
