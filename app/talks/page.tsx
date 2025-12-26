import Link from "next/link";
import { talks, playlist } from "../content/siteData";
import { ArrowIcon, CalendarIcon, ExternalIcon, LocationIcon, PlayIcon } from "../components/icons";

export default function TalksPage() {
  return (
    <div className="space-y-8">
      <div className="glass-panel p-8">
        <p className="badge">Talks</p>
        <h1 className="mt-4 text-4xl font-bold text-primary">Talks & workshops</h1>
        <p className="mt-3 max-w-3xl text-lg text-slate-700">
          Keynotes, conference talks, and hands-on sessions about serverless architectures,
          developer experience, and the intersection of product and community.
        </p>
        <div className="section-cta">
          <Link href="/contact" className="button-primary">
            Book a talk
            <ArrowIcon />
          </Link>
          <Link href={playlist.youtubeUrl} target="_blank" rel="noreferrer" className="button-secondary">
            Watch playlist
            <PlayIcon />
          </Link>
        </div>
      </div>

      <div className="glass-panel overflow-hidden">
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
          <h2 className="text-2xl font-semibold text-primary">{playlist.title}</h2>
          <p className="mt-2 text-slate-700">{playlist.description}</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {talks.map((talk) => (
          <article key={talk.title} className="card">
            <div className="space-y-2">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500">
                <CalendarIcon /> {talk.date}
              </p>
              <h2 className="text-xl font-semibold text-primary">{talk.title}</h2>
              <p className="text-slate-700">{talk.event}</p>
              <p className="inline-flex items-center gap-2 text-sm text-slate-600">
                <LocationIcon /> {talk.location}
              </p>
            </div>
            <Link
              href={talk.link}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
              target="_blank"
              rel="noreferrer"
            >
              Watch recording
              <ExternalIcon />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
