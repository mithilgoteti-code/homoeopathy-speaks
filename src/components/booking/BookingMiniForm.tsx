"use client";

import Link from "next/link";
import { Calendar, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function BookingMiniForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-3xl border border-teal-100 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3 text-teal-800">
          <CheckCircle2 className="h-7 w-7" />
          <h3 className="text-xl font-semibold">Booking request received</h3>
        </div>
        <p className="mt-3 text-slate-600">
          In the live site, this form will connect to a secure booking system such as Cliniko,
          Halaxy, Acuity or Wix Bookings.
        </p>
        <Link
          href="/book-appointment"
          className="mt-5 inline-flex rounded-full bg-teal-700 px-6 py-3 font-semibold text-white transition hover:bg-teal-800"
        >
          Continue to Booking Calendar
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-3xl border border-teal-100 bg-white p-6 shadow-sm"
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-2xl bg-teal-50 p-3 text-teal-800">
          <Calendar className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-950">Request an appointment</h3>
          <p className="text-sm text-slate-500">Short form linked to the full booking calendar.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600" placeholder="Full name" required />
        <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600" placeholder="Phone" required />
        <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600 md:col-span-2" placeholder="Email" type="email" required />
        <select className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600">
          <option>Main concern</option>
          <option>Autism</option>
          <option>ADHD</option>
          <option>Global Developmental Delay</option>
          <option>General consultation</option>
          <option>Women’s health / fertility</option>
          <option>Pain / arthritis</option>
          <option>Other</option>
        </select>
        <select className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600">
          <option>Preferred consultation</option>
          <option>In-person</option>
          <option>Telehealth</option>
          <option>Phone</option>
        </select>
        <textarea className="min-h-28 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600 md:col-span-2" placeholder="Brief message. Please do not include detailed medical history here." />
      </div>

      <label className="mt-4 flex gap-3 text-xs leading-5 text-slate-600">
        <input type="checkbox" required className="mt-1" />
        I understand this form is for appointment enquiries only and is not for emergency medical care.
      </label>

      <button
        type="submit"
        className="mt-5 w-full rounded-full bg-teal-700 px-6 py-4 font-semibold text-white transition hover:bg-teal-800"
      >
        Submit Booking Request
      </button>
    </form>
  );
}
