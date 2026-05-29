# Homoeopathy Speaks Website

A professional Next.js website for Homoeopathy Speaks.

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- lucide-react icons
- Static article system
- Booking placeholder ready for Cliniko, Halaxy, Acuity, Calendly or Wix Bookings

## Run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Edit main website content

- Site config: `src/lib/siteConfig.ts`
- Services/prices: `src/lib/services.ts`
- Articles: `src/lib/articles.ts`

## Important pages

- Home: `src/app/page.tsx`
- Autism/ADHD/GDD: `src/app/autism-adhd-gdd/page.tsx`
- Medicines & Conditions: `src/app/medicines-conditions/page.tsx`
- Booking: `src/app/book-appointment/page.tsx`
- Patient Guide: `src/app/patient-guide/page.tsx`
- Articles: `src/app/articles/page.tsx`
- Contact: `src/app/contact/page.tsx`

## Booking integration

Add a live booking URL in `.env.local`:

```bash
NEXT_PUBLIC_BOOKING_URL=https://your-booking-url-here
```

Recommended booking systems:

- Cliniko
- Halaxy
- Acuity
- Calendly
- Wix Bookings

## Before launch

Confirm:

- Domain: homoeopathyspeaks.com.au
- Phone number
- Clinic address
- Consultation prices
- Dr Kumar’s qualification wording
- ARoH registration wording
- Privacy policy
- Health disclaimer
- Booking/cancellation terms
- Telehealth consent
- Booking system
- Newsletter system
- Google Analytics
- Google Search Console
- Google Business Profile

## Deployment

Recommended deployment for this custom Next.js version:

- Vercel
- Domain purchased via VentraIP
- Professional email through Google Workspace
