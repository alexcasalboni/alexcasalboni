import Link from "next/link";
import { contactMethods } from "../content/siteData";
import { ArrowIcon } from "../components/icons";

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div className="glass-panel p-8">
        <p className="badge">Contact</p>
        <h1 className="mt-4 text-4xl font-bold text-primary">Let&apos;s build something impactful</h1>
        <p className="mt-3 max-w-3xl text-lg text-slate-700">
          Whether you&apos;re planning a conference, launching a developer product, or looking for
          content strategy guidance, I&apos;d love to hear more.
        </p>
        <div className="section-cta">
          <Link href="mailto:alex@alexcasalboni.com" className="button-primary">
            Email Alex
            <ArrowIcon />
          </Link>
          <Link href="/" className="button-secondary">
            Back home
            <ArrowIcon />
          </Link>
        </div>
      </div>

      <div className="card-grid">
        {contactMethods.map((method) => (
          <div key={method.label} className="card">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              {method.label}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-primary">{method.note}</h2>
            <Link
              href={method.href}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noreferrer" : undefined}
            >
              Continue
              <ArrowIcon />
            </Link>
          </div>
        ))}
      </div>

      <div className="glass-panel p-8">
        <h2 className="text-2xl font-semibold text-primary">What collaborations look like</h2>
        <p className="mt-2 text-slate-700">
          I tailor engagements to each team: from high-energy keynotes to in-depth advisory
          sprints. Let&apos;s align on goals, audience, and outcomes.
        </p>
        <ul className="mt-4 highlight-list">
          <li>
            <span className="tag">Talks</span>
            <span>Keynotes, conference talks, panels, and fireside chats.</span>
          </li>
          <li>
            <span className="tag">Advisory</span>
            <span>Product messaging, developer onboarding, and content playbooks.</span>
          </li>
          <li>
            <span className="tag">Workshops</span>
            <span>Hands-on technical sessions for teams and communities.</span>
          </li>
          <li>
            <span className="tag">Content</span>
            <span>Blog series, videos, and narrative storytelling around launches.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
