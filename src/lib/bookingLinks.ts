import registeredBookingLinks from "./halaxyBookingLinks.json";
import siteRelease from "./siteRelease.json";

export const appointmentKeys = [
  "initialGeneralClinic", "initialGeneralOnline",
  "followUpGeneralClinic", "followUpGeneralOnline",
  "initialExtendedClinic", "initialExtendedOnline",
  "followUpExtendedClinic", "followUpExtendedOnline",
] as const;
export type AppointmentKey = typeof appointmentKeys[number];
export type BookingLinks = Record<AppointmentKey, string | undefined>;

// This checks destination safety only. Staff must verify each generated URL selects
// the correct practitioner, location, appointment type, mode, duration and price.
// No booking URL or route is constructed from account IDs.
export function validatedHalaxyUrl(value: string | undefined): string | null {
  if (!value || /\s|PASTE|PLACEHOLDER|EXAMPLE/i.test(value)) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || !["www.halaxy.com", "halaxy.com"].includes(url.hostname)) return null;
    if (url.username || url.password || url.port || url.hash) return null;
    if (url.pathname === "/" || /^\/(profile|a|patient|privacy|terms)(\/|$)/i.test(url.pathname)) return null;
    return value;
  } catch { return null; }
}

export function bookingLinksReady(approved: boolean, links: BookingLinks): boolean {
  const urls = appointmentKeys.map((key) => validatedHalaxyUrl(links[key]));
  return approved && urls.every(Boolean) && new Set(urls).size === appointmentKeys.length;
}

export const bookingLinks: BookingLinks = {
  initialGeneralClinic: process.env.HALAXY_INITIAL_GENERAL_CLINIC_URL ?? registeredBookingLinks.initialGeneralClinic,
  initialGeneralOnline: process.env.HALAXY_INITIAL_GENERAL_ONLINE_URL ?? registeredBookingLinks.initialGeneralOnline,
  followUpGeneralClinic: process.env.HALAXY_FOLLOW_UP_GENERAL_CLINIC_URL ?? registeredBookingLinks.followUpGeneralClinic,
  followUpGeneralOnline: process.env.HALAXY_FOLLOW_UP_GENERAL_ONLINE_URL ?? registeredBookingLinks.followUpGeneralOnline,
  initialExtendedClinic: process.env.HALAXY_INITIAL_EXTENDED_CLINIC_URL ?? registeredBookingLinks.initialExtendedClinic,
  initialExtendedOnline: process.env.HALAXY_INITIAL_EXTENDED_ONLINE_URL ?? registeredBookingLinks.initialExtendedOnline,
  followUpExtendedClinic: process.env.HALAXY_FOLLOW_UP_EXTENDED_CLINIC_URL ?? registeredBookingLinks.followUpExtendedClinic,
  followUpExtendedOnline: process.env.HALAXY_FOLLOW_UP_EXTENDED_ONLINE_URL ?? registeredBookingLinks.followUpExtendedOnline,
};
// Holding releases cannot expose booking links, even if a host build variable is wrong.
// Future activation needs a reviewed source change, approval flag and approved rebuild.
export const bookingsReady = siteRelease.phase === "bookings" && bookingLinksReady(process.env.HALAXY_BOOKINGS_APPROVED === "true", bookingLinks);
