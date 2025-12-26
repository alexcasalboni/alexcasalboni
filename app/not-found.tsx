import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-primary">404</h1>
      <p className="mt-2 text-lg text-slate-700">Oops! The page you&apos;re looking for does not exist.</p>
      <Link href="/" className="mt-6 button-primary">
        Go home
      </Link>
    </div>
  );
}
