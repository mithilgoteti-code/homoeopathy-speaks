import type { ReactNode } from "react";
import Link from "next/link";
import { SectionHeading } from "./SectionHeading";

export function HoldingInformation({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return <section className="bg-[#fbfaf6] px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
      <SectionHeading eyebrow="Practice information" title={title} text={intro} align="left" />
      <aside className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-5 leading-7 text-teal-950">
        Online booking is not yet available. This is temporary website information; full practice policies and online consultation consent arrangements are under review before online bookings open.
      </aside>
      <div className="prose-safe mt-8">{children}</div>
      <p className="mt-8 text-sm leading-7 text-slate-600"><Link href="/contact" className="underline">Contact the practice</Link> · <Link href="/book-appointment" className="underline">Consultations and fees</Link></p>
    </div>
  </section>;
}
