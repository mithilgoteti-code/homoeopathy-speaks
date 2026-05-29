"use client";

import { services } from "@/lib/services";
import { Calendar, ChevronRight } from "lucide-react";
import { useState } from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const times = ["9:00 AM", "10:30 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"];

export function BookingSelector() {
  const [selectedSlug, setSelectedSlug] = useState(services[0].slug);
  const selected = services.find((service) => service.slug === selectedSlug) || services[0];
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;

  return (
    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="space-y-4">
        {services.map((service) => (
          <button
            key={service.slug}
            onClick={() => setSelectedSlug(service.slug)}
            className={
              selectedSlug === service.slug
                ? "w-full rounded-3xl border border-teal-700 bg-white p-5 text-left shadow-md transition"
                : "w-full rounded-3xl border border-slate-200 bg-white/70 p-5 text-left transition hover:bg-white"
            }
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-slate-950">{service.name}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{service.description}</p>
              </div>
              <ChevronRight className="mt-1 h-5 w-5 text-teal-700" />
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="rounded-full bg-teal-50 px-3 py-1 text-teal-800">{service.duration}</span>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-800">{service.price}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold text-slate-950">Booking calendar</h3>
            <p className="mt-2 text-slate-600">Selected: {selected.name}</p>
          </div>
          <div className="rounded-2xl bg-teal-50 px-4 py-3 text-sm font-semibold text-teal-800">
            {bookingUrl ? "Live booking embed" : "Prototype calendar"}
          </div>
        </div>

        {bookingUrl ? (
          <div className="mt-6">
            <iframe
              src={bookingUrl}
              title="Booking calendar"
              className="h-[720px] w-full rounded-2xl border border-slate-200"
            />
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800"
            >
              Open Booking Calendar
            </a>
          </div>
        ) : (
          <>
            <div className="mt-6 grid grid-cols-3 gap-3 md:grid-cols-6">
              {days.map((day) => (
                <div key={day} className="rounded-2xl bg-slate-50 p-4 text-center">
                  <div className="text-sm font-semibold text-slate-950">{day}</div>
                  <div className="mt-1 text-xs text-slate-500">Available</div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
              {times.map((time) => (
                <button
                  key={time}
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:border-teal-700 hover:text-teal-800"
                >
                  {time}
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-teal-50 p-5 text-sm leading-7 text-teal-950">
              <div className="mb-2 flex items-center gap-2 font-semibold">
                <Calendar className="h-5 w-5" />
                Booking integration notice
              </div>
              This is a placeholder. The live website can embed Cliniko, Halaxy, Acuity, Calendly
              or Wix Bookings. Recommended options for a health practice are Cliniko or Halaxy.
            </div>
          </>
        )}

        <form className="mt-8 grid gap-4">
          <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600" placeholder="Full name" />
          <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600" placeholder="Email" />
          <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600" placeholder="Phone" />
          <select className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600">
            <option>Patient type</option>
            <option>Adult</option>
            <option>Child</option>
            <option>Parent booking for child</option>
          </select>
          <select className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600">
            <option>Preferred consultation mode</option>
            <option>In-person</option>
            <option>Telehealth</option>
            <option>Phone</option>
          </select>
          <textarea className="min-h-28 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600" placeholder="Brief appointment notes. Please do not include detailed medical history here." />
          <label className="flex gap-3 text-xs leading-5 text-slate-600">
            <input type="checkbox" className="mt-1" />
            I understand this is not emergency medical care.
          </label>
          <label className="flex gap-3 text-xs leading-5 text-slate-600">
            <input type="checkbox" className="mt-1" />
            I consent to Homoeopathy Speaks collecting my information to respond to this booking request.
          </label>
          <button className="rounded-full bg-teal-700 px-6 py-4 font-semibold text-white transition hover:bg-teal-800">
            Request Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
