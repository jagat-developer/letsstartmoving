import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Headphones, Leaf, MapPinned, Satellite, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageParts";

const introBullets = [
  "Dedicated moving specialists with years of hands-on experience",
  "Strategically located hubs and a modern fleet of vehicles",
  "Real-time shipment tracking for full visibility",
  "Eco-conscious practices and sustainable moving options",
  "On-time delivery backed by a proven track record",
];

const missionItems = [
  {
    title: "Real-Time Tracking & Transparency",
    text: "Integrated technology provides tracking, analytics, and reporting so customers know where their belongings are.",
    icon: Satellite,
  },
  {
    title: "Safe & Reliable",
    text: "Moving services are planned to be safely and reliably executed every time.",
    icon: ShieldCheck,
  },
  {
    title: "Dedicated Customer Support",
    text: "Support is available around the clock to answer questions and keep the move on track.",
    icon: Headphones,
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About us"
        title="Deliver reliable moving solutions right on time."
        subtitle="Get to know the company behind Ottawa's trusted moving services - built on care, reliability, and experience."
        image="/brand-assets/lets-start-moving-05.jpg"
      />

      <section className="section about-page-grid">
        <div className="image-stack">
          <Image src="/brand-assets/lets-start-moving-05.jpg" alt="Movers carrying boxes" width={1000} height={1500} />
          <Image src="/brand-assets/lets-start-moving-06.jpg" alt="Packed boxes for a move" width={1500} height={1000} />
          <Image src="/brand-assets/lets-start-moving-07.jpg" alt="Moving service preparation" width={1500} height={1000} />
        </div>
        <div>
          <p className="eyebrow">Know about us</p>
          <h2>Reliable moving for households and businesses across Canada.</h2>
          <p>
            Let's Start Moving is dedicated to simplifying transportation
            solutions for households and businesses, with a focus on getting
            goods to their destination swiftly, securely, and efficiently.
          </p>
          <p>
            With experience and a commitment to excellence, the mission is
            straightforward: streamline the move, reduce costs, and provide
            dependable, timely service.
          </p>
          <div className="check-list">
            {introBullets.map((item) => (
              <span key={item}>
                <CheckCircle2 size={18} aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
          <Link className="btn btn-primary" href="/get-a-quote">
            Get a Free Quote
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="dark-feature compact">
        <div className="feature-copy">
          <p className="eyebrow">Our mission</p>
          <h2>Excellence in every service, every time.</h2>
          <p>
            The mission frames moving as a manageable step forward rather than a
            challenge. Whether the customer is a family seeking a fresh start or
            a business aiming for growth, Let's Start Moving positions itself as
            a reliable partner.
          </p>
        </div>
        <div className="mission-grid">
          {missionItems.map(({ title, text, icon: Icon }) => (
            <article className="mission-card" key={title}>
              <Icon size={26} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-page-grid reverse">
        <div>
          <p className="eyebrow">More about us</p>
          <h2>People, technology, and sustainability.</h2>
          <p>
            From moving specialists and drivers to customer support, the team is
            the backbone of the business. Technology helps optimize routes,
            reduce costs, and create transparency.
          </p>
          <div className="detail-grid tight">
            <article className="detail-card">
              <Leaf size={20} aria-hidden="true" />
              <h3>Sustainability</h3>
              <p>Eco-conscious practices and sustainable moving options are part of the service direction.</p>
            </article>
            <article className="detail-card">
              <MapPinned size={20} aria-hidden="true" />
              <h3>Nationwide Reach</h3>
              <p>Modern fleet and hub language supports urban centres and remote regions alike.</p>
            </article>
            <article className="detail-card">
              <Headphones size={20} aria-hidden="true" />
              <h3>Support</h3>
              <p>Customer support is available to answer questions and help keep the move on track.</p>
            </article>
          </div>
        </div>
        <div className="about-tall-image">
          <Image src="/brand-assets/lets-start-moving-08.jpg" alt="Movers at work" fill sizes="(max-width: 900px) 100vw, 42vw" />
          <span>500+ moves completed</span>
        </div>
      </section>
    </main>
  );
}
