"use client";

import { useState } from "react";
import { site, services } from "@/lib/site";
import { Arrow, Phone } from "./Icons";

const budgets = [
  "Under $25,000",
  "$25,000 – $75,000",
  "$75,000 – $200,000",
  "$200,000 – $500,000",
  "$500,000+",
  "Not sure yet",
];

const timelines = [
  "As soon as possible",
  "Within 1–3 months",
  "3–6 months",
  "6–12 months",
  "Just planning",
];

export default function ContactForm({ preset = "" }) {
  const [sent, setSent] = useState(false);

  /**
   * No mail backend is wired up on this preview deployment, so the form hands
   * the enquiry to the visitor's mail client with everything pre-filled.
   * Swap this handler for a POST to a form endpoint when you go live.
   */
  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k) => (f.get(k) || "").toString().trim();

    const body = [
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      `Location: ${get("location")}`,
      `Service: ${get("service")}`,
      `Budget: ${get("budget")}`,
      `Timeline: ${get("timeline")}`,
      "",
      "Project details:",
      get("message"),
    ].join("\n");

    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Quote request — ${get("service") || "General enquiry"}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form__ok">
        <h3 className="h3">Thanks — your enquiry is on its way.</h3>
        <p>
          Your email app should have opened with everything filled in. If it
          didn&apos;t, email us directly at{" "}
          <a href={`mailto:${site.email}`} className="tlink">
            {site.email}
          </a>{" "}
          — or call {site.phone}, which is always the fastest route.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 22, flexWrap: "wrap" }}>
          <a className="btn" href={site.phoneHref}>
            <Phone /> Call {site.phone}
          </a>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => setSent(false)}
          >
            Send another <Arrow />
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" required placeholder="Jordan Fraser" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="604 555 0134"
          />
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </div>
        <div className="field">
          <label htmlFor="location">Project location</label>
          <input id="location" name="location" placeholder="Surrey, BC" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="service">What do you need?</label>
        <select id="service" name="service" defaultValue={preset}>
          <option value="">Select a service…</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Something else">Something else</option>
        </select>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="budget">Budget range</label>
          <select id="budget" name="budget" defaultValue="">
            <option value="">Select…</option>
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="timeline">Timeline</label>
          <select id="timeline" name="timeline" defaultValue="">
            <option value="">Select…</option>
            {timelines.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Tell us about the project</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Rooms involved, square footage, materials you have in mind, whether drawings exist, and anything we should know about access or occupancy."
        />
      </div>

      <button type="submit" className="btn btn--lg">
        Send my enquiry <Arrow />
      </button>

      <p className="form__note">
        We reply to every enquiry within one business day. For WorkSafeBC
        modifications, include your claim number and your case manager&apos;s
        name and we&apos;ll take it from there.
      </p>
    </form>
  );
}
