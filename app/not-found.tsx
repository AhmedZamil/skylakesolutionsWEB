import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-6 py-28 sm:px-8">
      <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
        That page is not here.
        <span className="mt-2 block font-display font-normal text-cyan italic">The rest of the studio is.</span>
      </h1>
      <Link href="/" className="mt-8 inline-flex h-12 items-center bg-blue px-6 text-sm font-semibold text-white">
        Back home
      </Link>
    </main>
  );
}
