import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { PageHero } from "@/components/PageParts";
import { contact } from "@/lib/site-data";

const contactCards = [
  { title: "Call Us", value: contact.phone, href: contact.phoneHref, helper: "Mon - Sun, 7am - 9pm", icon: Phone },
  { title: "WhatsApp Us", value: contact.whatsapp, href: contact.whatsappHref, helper: "Send photos, inventory, or quick questions", icon: MessageCircle },
  { title: "Email Us", value: contact.primaryEmail, href: contact.primaryEmailHref, helper: contact.secondaryEmail, icon: Mail },
  { title: "Our Address", value: "3 Banner Road, Nepean", helper: "K2H 8T3, Ottawa, Canada", icon: MapPin },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact us"
        title="We are here to help you move."
        subtitle="Have a question or ready to book your local, Canada-wide, or America-bound move? Reach out and get a prompt response from the Ottawa team."
        image="/brand-assets/lsm-ca-hero.jpg"
      />

      <section className="contact-cards">
        {contactCards.map(({ title, value, helper, href, icon: Icon }) => (
          <article className="contact-card" key={title}>
            <Icon size={24} aria-hidden="true" />
            <h2>{title}</h2>
            {href ? <a href={href}>{value}</a> : <span>{value}</span>}
            <p>{helper}</p>
          </article>
        ))}
      </section>

      <section className="contact-main-grid">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2>Choosing us means selecting a dedicated team.</h2>
          <p>
            The team is committed to customer success, satisfaction, and
            delivering the best moving transportation experience across Canada
            and America. Your move can begin with one call, one form, or one
            WhatsApp message.
          </p>
          <div className="check-list contact-detail-list">
            <span>
              <Phone size={18} aria-hidden="true" />
              {contact.phone}
            </span>
            <span>
              <MessageCircle size={18} aria-hidden="true" />
              <a href={contact.whatsappHref}>{contact.whatsapp}</a>
            </span>
            <span>
              <Mail size={18} aria-hidden="true" />
              {contact.secondaryEmail} | {contact.primaryEmail}
            </span>
            <span>
              <MapPin size={18} aria-hidden="true" />
              {contact.addressLong}
            </span>
            <span>{contact.hours}</span>
          </div>
        </div>
        <form className="contact-form">
          <h3>
            <Send size={20} aria-hidden="true" />
            Write us a message
          </h3>
          <label>
            Full name
            <input placeholder="Your full name" />
          </label>
          <label>
            Phone number
            <input type="tel" placeholder="+1 (613) 000-0000" />
          </label>
          <label className="span-all">
            Email address
            <input type="email" placeholder="you@email.com" />
          </label>
          <label className="span-all">
            Your message
            <textarea rows={5} placeholder="Tell us about your move - pickup location, destination, date, and special requirements." />
          </label>
          <button className="btn btn-primary form-submit" type="button">
            Send Message
          </button>
        </form>
      </section>

      <section className="map-panel">
        <p>{contact.addressLong}</p>
      </section>
    </main>
  );
}
