import Link from "next/link";
import { blogPosts, partners, spotlightLinks, talks } from "./data/content";

export default function HomePage() {
  return (
    <div className="grid" style={{ gap: "2rem" }}>
      <section className="hero">
        <div className="hero-copy">
          <p className="pill">
            Developer Advocate • Speaker • Community Builder
          </p>
          <h1>
            I help developers and products meet in the middle — with meaningful
            stories, high-trust communities, and content that ships.
          </h1>
          <p>
            I’ve spent the last decade speaking on global stages, creating
            hands-on resources, and shaping product narratives that resonate
            with technical audiences. Let&apos;s build something your community
            can feel.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/contact">
              Book a collaboration
            </Link>
            <Link className="btn btn-secondary" href="/talks">
              Watch my talks
            </Link>
          </div>
        </div>
        <div className="grid" style={{ gap: "1rem" }}>
          <div className="card">
            <div className="section-heading">
              <h3>Quick links</h3>
              <span className="pill">
                <strong>Stay connected</strong>
              </span>
            </div>
            <div className="list">
              {spotlightLinks.map((link) => (
                <div key={link.href} className="list-item">
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label} ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <div className="stats">
              <div className="stat-card">
                <p className="stat-title">Public speaking</p>
                <p className="stat-value">10+ years</p>
                <p className="muted">Keynotes, workshops, and panels</p>
              </div>
              <div className="stat-card">
                <p className="stat-title">Content shipped</p>
                <p className="stat-value">200+ pieces</p>
                <p className="muted">Blogs, podcasts, videos, and courses</p>
              </div>
              <div className="stat-card">
                <p className="stat-title">Communities</p>
                <p className="stat-value">Global</p>
                <p className="muted">Hands-on labs, meetups, remote series</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid">
        <div className="section-heading">
          <h2>Recent writing</h2>
          <Link className="pill" href="/blog">
            View all posts
          </Link>
        </div>
        <div className="resource-grid">
          {blogPosts.slice(0, 2).map((post) => (
            <article className="card" key={post.title}>
              <div className="badge">Blog</div>
              <h3>{post.title}</h3>
              <p className="muted">{post.description}</p>
              <div className="hero-actions">
                {post.tags.map((tag) => (
                  <span className="pill" key={tag}>
                    {tag}
                  </span>
                ))}
                <a
                  href={post.href}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read post
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid">
        <div className="section-heading">
          <h2>Talks & interviews</h2>
          <Link className="pill" href="/talks">
            Watch playlist
          </Link>
        </div>
        <div className="resource-grid">
          {talks.slice(0, 2).map((talk) => (
            <article className="card" key={talk.title}>
              <div className="badge">Featured talk</div>
              <h3>{talk.title}</h3>
              <p className="muted">{talk.description}</p>
              <p className="list-label">{talk.event}</p>
              <a
                className="btn btn-secondary"
                href={talk.link}
                target="_blank"
                rel="noreferrer"
              >
                Play video
              </a>
            </article>
          ))}
          <div className="card embed">
            <iframe
              title="YouTube playlist"
              width="100%"
              height="260"
              src="https://www.youtube.com/embed/videoseries?list=PLdIaDZ8H5yxV1PwtLDpf8Unxdp1oZGcJ-"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="grid">
        <div className="section-heading">
          <h2>Partners & stages</h2>
          <span className="pill">Trusted collaborator</span>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
          {partners.map((name) => (
            <div key={name} className="card">
              <p>{name}</p>
              <p className="muted">Workshops, keynotes, content, strategy</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
