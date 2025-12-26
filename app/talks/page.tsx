import type { Metadata } from "next";
import Link from "next/link";
import { talks } from "../data/content";

export const metadata: Metadata = {
  title: "Talks & Interviews | Alex Casalboni",
  description:
    "Keynotes, conference talks, and podcast interviews by Alex Casalboni.",
};

export default function TalksPage() {
  return (
    <div className="grid" style={{ gap: "1.5rem" }}>
      <div className="section-heading">
        <div>
          <p className="pill">Talks & Interviews</p>
          <h1>Stories that move builders to take action</h1>
          <p className="muted" style={{ marginTop: "0.35rem" }}>
            Keynotes, technical deep dives, and interviews on cloud, serverless,
            and developer advocacy.
          </p>
        </div>
        <Link className="btn btn-secondary" href="/">
          Back home
        </Link>
      </div>
      <div className="grid embed">
        <iframe
          title="Talks playlist"
          width="100%"
          height="420"
          src="https://www.youtube.com/embed/videoseries?list=PLdIaDZ8H5yxV1PwtLDpf8Unxdp1oZGcJ-"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="resource-grid">
        {talks.map((talk) => (
          <article className="card" key={talk.title}>
            <div className="badge">Stage</div>
            <h3>{talk.title}</h3>
            <p className="muted">{talk.description}</p>
            <p className="list-label">{talk.event}</p>
            <a className="btn btn-primary" href={talk.link} target="_blank" rel="noreferrer">
              Watch recording
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
