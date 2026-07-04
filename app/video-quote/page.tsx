import Link from "next/link";
import { ArrowRight, Camera, CheckCircle2, FileVideo, Send } from "lucide-react";
import { PageHero } from "@/components/PageParts";

const steps = [
  {
    title: "Record Your Items",
    text: "Walk through your home with your smartphone and film the items you need moved. Talk through the details for a more accurate quote.",
    icon: Camera,
  },
  {
    title: "Complete Our Short Form",
    text: "Fill in your name, contact info, upload your video, and add any extra details about the move.",
    icon: FileVideo,
  },
  {
    title: "Receive Your Quote",
    text: "Experts review your video and send back a personalized, accurate, fixed-price quote with no obligation.",
    icon: Send,
  },
];

const benefits = [
  "No in-person appointment needed",
  "Fixed-price, no-obligation quote",
  "Prompt expert review",
  "Video kept confidential and used only to prepare your quote",
];

export default function VideoQuotePage() {
  return (
    <main>
      <PageHero
        eyebrow="Video moving quote"
        title="Record. Submit. Move."
        subtitle="No time for an in-person appointment? Get a guaranteed fixed-price, no-obligation quote using a flexible video option."
        image="/brand-assets/lets-start-moving-06.jpg"
      />

      <section className="section split-feature">
        <div>
          <p className="eyebrow">Flexible video quote</p>
          <h2>Get a personalized estimate from the comfort of home.</h2>
          <p>
            Traditional moving quotes can be cumbersome and time-consuming, so
            the video option helps customers get a quick, accurate estimate from
            their phone.
          </p>
          <p>
            Use your smartphone to record the items you are moving and include a
            personal audio explanation. The team reviews the video and responds
            with a quote based on distance and volume.
          </p>
        </div>
        <div className="feature-stat-card">
          <strong>No visit. No hassle.</strong>
          <span>Just a quick video, a short form, and an accurate quote delivered straight to you.</span>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Three simple steps</p>
          <h2>Your video quote flow.</h2>
        </div>
        <div className="step-grid">
          {steps.map(({ title, text, icon: Icon }, index) => (
            <article className="step-card" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <Icon size={28} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="video-upload-panel">
        <div>
          <p className="eyebrow">Submit your video quote</p>
          <h2>Upload your video and tell us about your move.</h2>
          <p>Your information and video are kept strictly confidential and used only to prepare your quote.</p>
          <div className="check-list">
            {benefits.map((item) => (
              <span key={item}>
                <CheckCircle2 size={18} aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
        <form className="video-form">
          <label>
            Full name
            <input placeholder="Your full name" />
          </label>
          <label>
            Email address
            <input type="email" placeholder="you@email.com" />
          </label>
          <label>
            Phone number
            <input type="tel" placeholder="+1 (613) 000-0000" />
          </label>
          <label className="span-all">
            Upload your video
            <input type="file" accept="video/*" />
          </label>
          <label className="span-all">
            Message / move details
            <textarea rows={5} placeholder="Tell us about pickup, drop-off, timing, access, and special items." />
          </label>
          <Link className="btn btn-primary form-submit" href="/get-a-quote">
            Continue to quote request
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </form>
      </section>
    </main>
  );
}
