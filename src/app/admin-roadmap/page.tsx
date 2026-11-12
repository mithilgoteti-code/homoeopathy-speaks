import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Practice information", robots: { index: false, follow: false } };
export default function AdminRoadmapPage() {
  return <section className="container-pad py-16"><h1 className="text-3xl font-semibold">Practice information</h1><p className="mt-4">For consultation options, see the <Link href="/book-appointment" className="underline">appointments page</Link>.</p></section>;
}
