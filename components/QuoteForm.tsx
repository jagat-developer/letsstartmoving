"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, LockKeyhole } from "lucide-react";

export function QuoteForm({ detailed = false }: { detailed?: boolean }) {
  const [formSent, setFormSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormSent(true);
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <label>
        Full name
        <input name="name" placeholder="Your full name" required />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" placeholder="+1 (613) 000-0000" required />
      </label>
      <label>
        Pickup location
        <input name="pickup" placeholder="Ottawa, Nepean, Kanata..." required />
      </label>
      <label>
        Drop-off location
        <input name="dropoff" placeholder="City or address" required />
      </label>
      {detailed ? (
        <>
          <label>
            Total distance (km)
            <input name="distance" type="number" placeholder="Approx. distance" min="0" />
          </label>
          <label>
            Email address
            <input name="email" type="email" placeholder="you@email.com" required />
          </label>
          <label>
            Pickup property type
            <select name="pickupType" defaultValue="">
              <option value="" disabled>
                Select pickup type
              </option>
              <option>Single Home</option>
              <option>Townhome</option>
              <option>Apartment</option>
              <option>Condo / Mini House</option>
            </select>
          </label>
          <label>
            Drop-off property type
            <select name="dropoffType" defaultValue="">
              <option value="" disabled>
                Select drop-off type
              </option>
              <option>Single Home</option>
              <option>Townhome</option>
              <option>Apartment</option>
              <option>Condo / Mini House</option>
            </select>
          </label>
          <label>
            Freight / access type
            <select name="accessType" defaultValue="">
              <option value="" disabled>
                Select access type
              </option>
              <option>Elevator access</option>
              <option>Stairs</option>
              <option>Ground floor</option>
              <option>Storage unit</option>
              <option>Commercial loading dock</option>
            </select>
          </label>
        </>
      ) : null}
      <label>
        Move type
        <select name="moveType" defaultValue="" required>
          <option value="" disabled>
            Select move type
          </option>
          <option>Local Move</option>
          <option>Long Distance Move</option>
          <option>Packing & Moving</option>
          <option>Office Moving</option>
          <option>Moving and Storage</option>
          <option>Specialty Item</option>
          <option>Other</option>
        </select>
      </label>
      <label>
        Moving date
        <input name="date" type="date" required />
      </label>
      {detailed ? (
        <label className="span-all">
          Message / move details
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your move, access, heavy items, packing needs, and timing."
          />
        </label>
      ) : null}
      <button className="btn btn-primary form-submit" type="submit">
        Submit My Request
        <ArrowRight size={18} aria-hidden="true" />
      </button>
      {formSent ? (
        <p className="form-note success" role="status">
          Request captured for this prototype. Connect this form to the client's
          email or CRM before launch.
        </p>
      ) : (
        <p className="form-note">
          <LockKeyhole size={14} aria-hidden="true" />
          Your information is safe with us. We never share your data.
        </p>
      )}
    </form>
  );
}
