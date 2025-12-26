import Link from "next/link";
import { navigation } from "../content/siteData";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white font-black">AC</span>
          <span>Alex Casalboni</span>
        </Link>
        <nav className="flex items-center gap-6">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="button-primary hidden sm:inline-flex text-sm px-4 py-2"
          >
            Work together
          </Link>
        </nav>
      </div>
    </header>
  );
}
