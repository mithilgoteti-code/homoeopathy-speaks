"use client";

import Link from "next/link";
import { Calendar, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function BookingMiniForm() {
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    "mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10";

  const labelClass = "text-xs font-semibold uppercase tracking-wide text-slate-600";

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-teal-100 bg-white p-7 shadow-2xl shadow-slate-950/20">
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
      className="rounded-[2rem] border border-teal-100 bg-white p-7 shadow-2xl shadow-slate-950/20"
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-2xl bg-teal-50 p-3 text-teal-800">
          <Calendar className="h-6 w-6" />
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-slate-950">Request an appointment</h3>
          <p className="text-sm text-slate-500">
            A short enquiry form linked to the full booking calendar.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label>
          <span className={labelClass}>Full name</span>
          <input className={inputClass} placeholder="Your full name" required />
        </label>

        <label>
          <span className={labelClass}>Phone</span>
          <input className={inputClass} placeholder="Your phone number" required />
        </label>

        <label className="md:col-span-2">
          <span className={labelClass}>Email</span>
          <input className={inputClass} placeholder="you@example.com" type="email" required />
        </label>

        <label>
          <span className={labelClass}>Main concern</span>
          <select className={inputClass} defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>Autism</option>
            <option>ADHD</option>
            <option>Global Developmental Delay</option>
            <option>General consultation</option>
            <option>Women&apos;s health / fertility</option>
            <option>Pain / arthritis</option>
            <option>Other</option>
          </select>
        </label>

        <label>
          <span className={labelClass}>Consultation type</span>
          <select className={inputClass} defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>In-person</option>
            <option>Telehealth</option>
            <option>Phone</option>
          </select>
        </label>

        <label className="md:col-span-2">
          <span className={labelClass}>Message</span>
          <textarea
            className={inputClass + " min-h-28"}
            placeholder="Brief message. Please do not include detailed medical history here."
          ></textarea>
        </label>
      </div>

      <label className="mt-4 flex gap-3 text-xs leading-5 text-slate-600">
        <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-slate-300" />
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
