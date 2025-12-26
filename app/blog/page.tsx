import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "../data/content";

export const metadata: Metadata = {
  title: "Blog Posts | Alex Casalboni",
  description:
    "Selected writing on developer advocacy, product messaging, and community building.",
};

export default function BlogPage() {
  return (
    <div className="grid" style={{ gap: "1.5rem" }}>
      <div className="section-heading">
        <div>
          <p className="pill">Blog</p>
          <h1>Writing that meets builders where they are</h1>
          <p className="muted" style={{ marginTop: "0.35rem" }}>
            Essays and playbooks on developer experience, storytelling, and
            strategic communication.
          </p>
        </div>
        <Link className="btn btn-secondary" href="/">
          Back home
        </Link>
      </div>
      <div className="resource-grid">
        {blogPosts.map((post) => (
          <article className="card" key={post.title}>
            <div className="badge">Article</div>
            <h3>{post.title}</h3>
            <p className="muted">{post.description}</p>
            <div className="hero-actions">
              {post.tags.map((tag) => (
                <span className="pill" key={tag}>
                  {tag}
                </span>
              ))}
              <a className="btn btn-primary" href={post.href} target="_blank" rel="noreferrer">
                Read the post
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
