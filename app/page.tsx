import Link from "next/link";
import {
  quickHighlights,
  featuredProjects,
  playlist,
  blogPosts,
  talks,
} from "./content/siteData";
import { ArrowIcon, ExternalIcon, PlayIcon, SparkleIcon } from "./components/icons";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="glass-panel overflow-hidden p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="space-y-6">
            <div className="badge">Developer Advocate • Speaker • Content Strategist</div>
            <h1 className="text-4xl font-bold text-primary sm:text-5xl">
              Building communities, telling product stories, and empowering developers.
            </h1>
            <p className="text-lg text-slate-700">
              I spend my time connecting technology with people: crafting developer
              experiences, scaling community-led growth, and delivering talks that inspire
              teams to ship faster with confidence.
            </p>
            <div className="section-cta">
              <Link href="/contact" className="button-primary">
                Let&apos;s collaborate
                <ArrowIcon />
              </Link>
              <Link href="/talks" className="button-secondary">
                Watch my talks
                <PlayIcon />
              </Link>
            </div>
            <ul className="highlight-list">
              {quickHighlights.map((item) => (
                <li key={item}>
                  <SparkleIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-panel relative h-full overflow-hidden rounded-2xl bg-slate-900 text-white">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-sky-300/10" />
            <div className="relative flex h-full flex-col justify-between p-8">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-300">
                  Latest talk
                </p>
                <h2 className="mt-3 text-2xl font-bold">The Future of Serverless Observability</h2>
                <p className="mt-3 text-slate-200">
                  How teams can design resilient, cost-aware architectures without slowing
                  down developer velocity.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href={playlist.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary bg-white text-slate-900"
                >
                  Open playlist
                  <ExternalIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">What I help with</h2>
        <p className="section-subtitle">
          From strategic messaging to hands-on workshops, I partner with teams to deliver
          high-impact experiences for developers and customers.
        </p>
        <div className="card-grid">
          {featuredProjects.map((project) => (
            <article key={project.title} className="card">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                <span className="tag">Featured</span>
              </div>
              <p className="mt-3 text-slate-700">{project.description}</p>
              <Link
                href={project.link}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
                target={project.link.startsWith("http") ? "_blank" : undefined}
                rel={project.link.startsWith("http") ? "noreferrer" : undefined}
              >
                Learn more
                {project.link.startsWith("http") ? <ExternalIcon /> : <ArrowIcon />}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <h2 className="section-title">Selected blog posts</h2>
          <p className="section-subtitle">
            Articles, frameworks, and mental models about serverless architectures, developer
            experience, and community strategy.
          </p>
          <div className="space-y-4">
            {blogPosts.map((post) => (
              <article key={post.title} className="card">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">{post.date}</p>
                    <h3 className="mt-1 text-xl font-semibold text-primary">{post.title}</h3>
                    <p className="mt-2 text-slate-700">{post.summary}</p>
                  </div>
                </div>
                <Link
                  href={post.link}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read article
                  <ExternalIcon />
                </Link>
              </article>
            ))}
          </div>
          <div className="section-cta">
            <Link href="/posts" className="button-secondary">
              Browse all posts
              <ArrowIcon />
            </Link>
          </div>
        </div>
        <div className="glass-panel overflow-hidden rounded-2xl">
          <div className="aspect-video">
            <iframe
              title={playlist.title}
              src={playlist.embedUrl}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Watch
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-primary">{playlist.title}</h3>
            <p className="mt-2 text-slate-700">{playlist.description}</p>
            <Link
              href={playlist.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
            >
              Open on YouTube
              <ExternalIcon />
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">Recent talks</h2>
        <p className="section-subtitle">
          Conferences, keynotes, and workshops where I share stories about developer
          experience, cloud, and community.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {talks.slice(0, 3).map((talk) => (
            <article key={talk.title} className="card">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-500">{talk.event}</p>
                  <h3 className="mt-1 text-lg font-semibold text-primary">{talk.title}</h3>
                  <p className="mt-2 text-slate-700">
                    {talk.location} • {talk.date}
                  </p>
                </div>
              </div>
              <Link
                href={talk.link}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
                target="_blank"
                rel="noreferrer"
              >
                Watch
                <ExternalIcon />
              </Link>
            </article>
          ))}
        </div>
        <div className="section-cta">
          <Link href="/talks" className="button-primary">
            See all talks
            <ArrowIcon />
          </Link>
          <Link href="/contact" className="button-secondary">
            Book a session
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </div>
  );
}
