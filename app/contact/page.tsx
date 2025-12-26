import type { Metadata } from "next";
import Link from "next/link";
import { spotlightLinks } from "../data/content";

export const metadata: Metadata = {
  title: "Contact | Alex Casalboni",
  description:
    "Book Alex for a talk, workshop, or collaboration. Let’s build resonant experiences for developers.",
};

export default function ContactPage() {
  const primaryContacts = spotlightLinks.filter((link) =>
    ["LinkedIn", "Twitter / X", "Email"].includes(link.label),
  );

  return (
    <div className="grid" style={{ gap: "1.5rem" }}>
      <div className="section-heading">
        <div>
          <p className="pill">Let&apos;s collaborate</p>
          <h1>Keynotes, workshops, advisory, and content partnerships</h1>
          <p className="muted" style={{ marginTop: "0.35rem" }}>
            Tell me about your audience, your timeline, and what success looks
            like. I’ll follow up with formats, availability, and next steps.
          </p>
        </div>
        <Link className="btn btn-secondary" href="/">
          Back home
        </Link>
      </div>

      <div className="resource-grid">
        <article className="card">
          <div className="badge">Most direct</div>
          <h3>Email</h3>
          <p className="muted">
            Share the event, audience size, and desired outcomes. I respond
            quickly to time-sensitive requests.
          </p>
          <a className="btn btn-primary" href="mailto:hi@alexcasalboni.com">
            hi@alexcasalboni.com
          </a>
        </article>
        <article className="card">
          <div className="badge">Signal boosts</div>
          <h3>Social</h3>
          <p className="muted">
            For quick intros, news, or community spotlights, reach me on the
            platforms I use daily.
          </p>
          <div className="hero-actions">
            {primaryContacts
              .filter((link) => link.label !== "Email")
              .map((link) => (
                <a
                  className="btn btn-secondary"
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
          </div>
        </article>
        <article className="card">
          <div className="badge">Preferred formats</div>
          <h3>Ways to work together</h3>
          <ul className="list">
            <li className="list-item">
              <span className="list-label">On-stage</span>
              <p>Keynotes, fireside chats, and technical breakouts.</p>
            </li>
            <li className="list-item">
              <span className="list-label">Content</span>
              <p>Blog series, product launch storytelling, podcast episodes.</p>
            </li>
            <li className="list-item">
              <span className="list-label">Advisory</span>
              <p>Developer experience audits and advocacy strategy.</p>
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
}
