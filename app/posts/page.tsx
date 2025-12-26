import Link from "next/link";
import { blogPosts } from "../content/siteData";
import { ArrowIcon, ExternalIcon } from "../components/icons";

export default function PostsPage() {
  return (
    <div className="space-y-6">
      <div className="glass-panel p-8">
        <p className="badge">Blog</p>
        <h1 className="mt-4 text-4xl font-bold text-primary">Articles & publications</h1>
        <p className="mt-3 max-w-3xl text-lg text-slate-700">
          Deep dives, frameworks, and practical guides about developer advocacy, serverless
          architectures, and building products developers love.
        </p>
        <div className="section-cta">
          <Link href="/contact" className="button-primary">
            Pitch a topic
            <ArrowIcon />
          </Link>
          <Link href="/" className="button-secondary">
            Back to homepage
            <ArrowIcon />
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        {blogPosts.map((post) => (
          <article key={post.title} className="card">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-500">{post.date}</p>
                <h2 className="text-2xl font-semibold text-primary">{post.title}</h2>
                <p className="mt-2 text-slate-700">{post.summary}</p>
              </div>
              <Link
                href={post.link}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                Read post
                <ExternalIcon />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
