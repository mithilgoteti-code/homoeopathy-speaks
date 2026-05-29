"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/siteConfig";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-pad flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-700 text-white shadow-sm">
            <Leaf className="h-6 w-6" />
          </div>
          <div>
            <div className="text-lg font-bold tracking-tight text-slate-950">
              Homoeopathy Speaks
            </div>
            <div className="text-xs font-medium text-slate-500">
              Individualised homoeopathic care
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "rounded-full bg-teal-700 px-4 py-2 text-sm font-medium text-white shadow-sm"
                    : "rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-teal-50 hover:text-teal-800"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/book-appointment"
          className="hidden rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 lg:inline-flex"
        >
          Book Now
        </Link>

        <button
          className="rounded-xl p-2 text-slate-700 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 lg:hidden">
          <div className="grid gap-2 pt-3">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={
                    active
                      ? "rounded-xl bg-teal-700 px-4 py-3 text-sm font-medium text-white"
                      : "rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
