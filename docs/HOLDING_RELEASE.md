# Holding website release — review only

Prepared 12 November 2026. No push, preview publication or production deployment authorised.

## Release scope

Retain the existing teal/cream design, rounded cards, navigation, articles and responsive layout. Replace demonstration data-entry and booking interactions with consultation information, an explicit online-booking-unavailable notice and telephone/email enquiries. Remove fictional slots, local booking-success messages and nonfunctional contact/newsletter forms. Clear obsolete supplier suggestions and unsupported medical outcome claims from the existing pre-launch preparation are included in this release.

Show Mr Kumar Goteti, AROH-11-153; retain MD Homoeopathy and DHMS with the homoeopathy qualification explanation. Practice contact is 0413 259 078, homoeopathyspeaks@gmail.com, 2A Mapleton Street, Stirling WA 6021, Australia. These match earlier account verification and the owner's confirmed Gmail access; this does not claim live email forwarding or successful Halaxy email delivery.

| Consultation | Minutes | Final patient price |
|---|---:|---:|
| Initial General | 45 | $100 |
| General Follow-up | 30 | $75 |
| Initial Extended | 60 | $150 |
| Extended Follow-up | 45 | $120 |

The four choices describe the existing in-person and online appointment types; no extra services, fees, GST or payment changes are made. State payment after consultation, no deposit/card capture, intake after booking and paper alternatives.

Public privacy, online consultation, website and appointment-change pages are interim information rather than unfinished contracts or consent forms. Full Privacy Policy/Telehealth Consent drafts are preserved byte-for-byte in `docs/policy-review/policyDrafts.json`; they are not imported into the website build. No legal-finality or all-Australian-processing assurance is given. Full-practice retention, security, guardian and international arrangements remain separate decisions. The holding release does not authorise care in another jurisdiction.

## Booking safeguards

- Preserve the eight genuine URLs in `src/lib/halaxyBookingLinks.json`, in the original clinic/online mapping. No generated URL is opened or submitted by the build.
- `src/lib/siteRelease.json` contains `{"phase":"holding"}`. This blocks booking links even if `HALAXY_BOOKINGS_APPROVED=true` is mistakenly present at build time.
- `npm run build:holding` additionally forces the approval flag false and validates the exported pages. Keep Cloudflare build variables false/unset too; runtime bindings cannot change a static export.
- A future booking release needs a reviewed phase change, successful controlled Halaxy tests, the approval flag, the eight valid distinct links and a separately approved rebuilt deployment.
- The website cannot activate or change Halaxy. Do not enable Halaxy public bookings for this holding release.

## Verified source configuration

Repository: `https://github.com/mithilgoteti-code/homoeopathy-speaks.git`.
Original branch: `prelaunch/halaxy-privacy-2026-11-12`.
Base/main observed: `e7e711413d12a4a9f43283148aed30f39a8c42ab`.

Next.js 16.2.6 / React 19.2.4, npm lockfile, static export with trailing-slash directories and unoptimised static images. Local validation uses Node 24.22.1 / npm 11.9.0. No dependency upgrades are introduced. A Cloudflare build should use a compatible pinned Node version and `npm ci`.

`wrangler.jsonc` remains unchanged: Worker name `homoeopathy-speaks`, compatibility date `2026-10-22`, assets `./out`, not-found handling `404-page`. The build emits `out/404.html` and all static route assets. There are no Worker script, database, payment, secret or mail-handler additions. No `.openai` Site registration or new hosting project is part of this repository release.

Cloudflare's signed-out dashboard prevents account-specific verification of the production branch, preview settings, account ID, domains, current deployment ID and injected analytics. Do not infer those from the Wrangler file. Check them while signed in before the final release approval. A branch push can trigger a public preview or production build, so neither a push nor pull request is allowed yet.

## Validation and release procedure

Before release, run `node --test tests/booking-safety.mjs` and `npm run build:holding`. The build includes TypeScript and `scripts/check-holding-export.mjs`. Review the final exported pages on desktop and narrow viewports, navigation/keyboard behaviour, contact links, all prices and all exported internal links. The export checker rejects data-entry controls, exposed Halaxy booking URLs, active-booking labels, internal approval markers, obsolete titles/suppliers, misleading completion messages and missing local links/assets.

Step 4C validation passed: five safety tests; production/TypeScript build; export checks across 22 HTML files; 18 public content routes at desktop and 320/390/768-pixel iframe widths (72 route/viewport checks, no overflow, forms or booking links). Narrow iframe content widths are 305/375/753 pixels after scrollbars. Menu Enter/Escape and focus restoration, navigation-close behaviour, skip-link focus and telephone/email destinations were checked. Responsive browser checks are not a physical-device or comprehensive accessibility certification. Two narrow-screen overflow defects were corrected before this final pass.

Wrangler 4.160.1 was resolved from the npm registry and its local `deploy --dry-run` accepted the static assets/configuration without deployment. For a repeat dry-run use `WRANGLER_SEND_METRICS=false npx --yes wrangler@4.160.1 deploy --config wrangler.jsonc --dry-run --outdir <local-review-directory>`. A dry-run does not verify account ownership, routes or the actual Cloudflare production configuration.

The approval report records the final local commit, full change list, screenshots and exported-artifact checksum. Publish that exact reviewed commit/output only. Any source changes after approval need a renewed comparison and relevant checks.

After explicit final release approval and signed-in account checks, choose one deployment path:

1. Existing Git integration: confirm the connected repo and production branch first. Use the reviewed commit; build `npm run build:holding`, deploy using the existing Worker configuration, and keep preview/production triggers within the approved scope. Do not blindly push a branch or push it to `main` before this check.
2. Manual static Worker deployment: use the reviewed `out/` and unchanged `wrangler.jsonc` in the same directory. After approval and account verification, the command is `CLOUDFLARE_ACCOUNT_ID="${HS_APPROVED_CLOUDFLARE_ACCOUNT_ID:?Set the verified Cloudflare account ID}" WRANGLER_SEND_METRICS=false npx --yes wrangler@4.160.1 deploy --config wrangler.jsonc --name homoeopathy-speaks`. The account variable is deliberately unresolved until verified; do not guess it. Do not run both deployment paths, reconfigure DNS or create another Worker.

Before switching production, record the current deployment/version and custom domains. After release, smoke-test homepage, consultation, contact and interim information pages, mobile menu, deep links and a missing route. Confirm no forms, fake confirmation, active booking links, price changes or booking/card/payment prompts. Do not make a test appointment.

If release verification fails before deployment, do not publish. If a serious issue appears after release, use the recorded prior version only with awareness that the old demonstration forms may return; agree the recovery action rather than silently restoring misleading booking behaviour.

## Release decision

This is a holding-site decision, separate from approval to activate Halaxy bookings, use video credits, process payments or publish full legal policies. The account-specific deployment details and explicit approval must be settled before any push or publication.
