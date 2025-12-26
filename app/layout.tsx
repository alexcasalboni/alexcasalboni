import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Casalboni | Developer Advocate, Speaker, Creator",
  description:
    "Official site for Alex Casalboni—Developer Advocate, keynote speaker, content creator, and community builder.",
  openGraph: {
    title: "Alex Casalboni | Developer Advocate",
    description:
      "Explore talks, blog posts, and ways to collaborate with Alex Casalboni.",
    url: "https://alexcasalboni.com",
    siteName: "Alex Casalboni",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Casalboni | Developer Advocate",
    description:
      "Talks, writing, and community advocacy from Alex Casalboni.",
  },
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog Posts" },
  { href: "/talks", label: "Talks" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <header>
          <div className="wrapper nav">
            <Link href="/" className="logo" aria-label="Alex Casalboni home">
              <svg
                viewBox="0 0 64 64"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <rect
                  x="8"
                  y="8"
                  width="48"
                  height="48"
                  rx="14"
                  fill="url(#grad)"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="2"
                />
                <path
                  d="M21 42 32 18l11 24m-17-8h12"
                  stroke="#fdfaff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="grad"
                    x1="12"
                    y1="12"
                    x2="52"
                    y2="52"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7c3aed" />
                    <stop offset="1" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </svg>
              <span>Alex Casalboni</span>
            </Link>
            <nav className="nav-links" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main>
          <div className="wrapper">{children}</div>
        </main>
        <footer className="footer">
          <div className="wrapper">
            <div className="section-heading">
              <p>Built for the modern web.</p>
              <span className="pill">
                <strong>Let&apos;s collaborate</strong> — speaking, strategy,
                content
              </span>
            </div>
            <div className="hero-actions">
              <a
                className="btn btn-secondary"
                href="https://www.linkedin.com/in/alex-casalboni/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="btn btn-secondary"
                href="https://twitter.com/alex_casalboni"
                target="_blank"
                rel="noreferrer"
              >
                Twitter / X
              </a>
              <a className="btn btn-secondary" href="mailto:hi@alexcasalboni.com">
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
