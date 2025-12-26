import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Casalboni | Developer Advocate & Speaker",
  description:
    "Developer Advocate with a decade of experience in public speaking, community advocacy, product messaging, and developer content.",
  openGraph: {
    title: "Alex Casalboni | Developer Advocate",
    description:
      "Talks, blog posts, and content strategy from a decade of developer advocacy and technical storytelling.",
    url: "https://alexcasalboni.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        <main className="container py-10 md:py-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
