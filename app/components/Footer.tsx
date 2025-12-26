import Link from "next/link";
import { socials } from "../content/siteData";
import { ExternalIcon } from "./icons";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-slate-800">Alex Casalboni</p>
          <p>Developer Advocate • Speaker • Content Strategist</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target={social.external ? "_blank" : undefined}
              rel={social.external ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-800 hover:border-slate-300 hover:shadow-soft"
            >
              <span>{social.label}</span>
              {social.external && <ExternalIcon />}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
