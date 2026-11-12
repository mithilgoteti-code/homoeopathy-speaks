# Homoeopathy Speaks website

Next.js static export served by the Cloudflare Worker configured in `wrangler.jsonc` (`./out`). This branch prepares changes for review only. Do not push or deploy without checking Cloudflare Git/build triggers and obtaining publication approval.

## Local review

```bash
npm ci --ignore-scripts
node --test tests/booking-safety.mjs
npm run build:holding
python3 -m http.server 3000 --directory out
```

Open `http://localhost:3000`. The holding release keeps booking links closed. The holding build includes TypeScript and export-safety checks. Production deployment is not part of these commands. Public information pages contain temporary notices; full policy drafts are preserved in `docs/policy-review/policyDrafts.json` and are not imported by public pages.

## Booking configuration

There are four existing fees, each with two existing appointment types. Edit display copy in `src/lib/services.ts`; never create matching duplicates in Halaxy. The homepage and booking page collect no patient data and make no local appointment confirmations.

The eight genuine practitioner-and-location appointment-type URLs from the 12 November booking-link addendum are preserved in `src/lib/halaxyBookingLinks.json`. Optional build-time variables can override each registered URL. Do not regenerate types, build URLs from IDs, use fee-only links for both modes, or substitute synthetic test URLs. See `docs/HOLDING_RELEASE.md` for this release and its approval requirements.

- Keep `HALAXY_BOOKINGS_APPROVED` unset or `false` until launch approval.
- `src/lib/siteRelease.json` is fixed to `holding`. A mistaken `HALAXY_BOOKINGS_APPROVED=true` cannot override it. Future activation requires a separately reviewed source change to the phase, the explicit approval flag, eight valid URLs, a rebuild and release approval. It does not enable Halaxy bookings.
- `src/lib/bookingLinks.ts` validates HTTPS and Halaxy hostnames and rejects root/profile/application/placeholder destinations. It cannot verify appointment selection. Staff must open each generated URL and test type, mode, length, total and no card/deposit request.
- The old `NEXT_PUBLIC_BOOKING_URL` embed variable is no longer used.
- Optional URL override names are defined in `src/lib/bookingLinks.ts`. Do not include patient names, emails or other patient information in URLs.
- Static exports freeze configuration at build time. Rebuild after changes; deployment still needs separate approval.
- External booking buttons are used instead of an iframe: Halaxy receives a visit when the patient follows the link, with clear destination and a fallback contact route. Do not embed a profile page.

## Contacts and policies

`src/lib/siteConfig.ts` centralises Mr Kumar Goteti, AROH-11-153, the address/phone verified in Halaxy and the practice-accessible Gmail address. It does not substitute the unverified domain mailbox. The holding notices explain that full policies are under review. Outstanding facts and publication controls are in `docs/HOLDING_RELEASE.md`; historical account-specific reports are kept separately from this release's public repository documentation.

Cloudflare Web Analytics was observed on the live site despite not being present in this source. It may be injected through the Cloudflare dashboard; inspect the account before finalising disclosures. Public DNS routes domain mail to Microsoft 365/Exchange Online and SPF also references secureserver.net; mailbox monitoring/forwarding/delivery remain untested. No mail handler, newsletter provider or Google Analytics/Tag Manager integration was found in the reviewed source. Template suggestions are not installed services.

The retired `scripts/generate-site.mjs` now stops immediately so it cannot overwrite these changes with prototype forms or outdated copy. Edit `src/` directly.
