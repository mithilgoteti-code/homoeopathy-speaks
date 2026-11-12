import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
const registry = JSON.parse(readFileSync(new URL('../src/lib/halaxyBookingLinks.json', import.meta.url), 'utf8'));
const siteRelease = JSON.parse(readFileSync(new URL('../src/lib/siteRelease.json', import.meta.url), 'utf8'));
const source = readFileSync(new URL('../src/lib/bookingLinks.ts', import.meta.url), 'utf8')
  .replace('import registeredBookingLinks from "./halaxyBookingLinks.json";', `const registeredBookingLinks = ${JSON.stringify(registry)};`)
  .replace('import siteRelease from "./siteRelease.json";', `const siteRelease = ${JSON.stringify(siteRelease)};`);
// Simulate a mistakenly enabled host variable; the tracked holding phase must win.
const priorApproval = process.env.HALAXY_BOOKINGS_APPROVED;
process.env.HALAXY_BOOKINGS_APPROVED = 'true';
const code = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022 } }).outputText;
const { validatedHalaxyUrl, bookingLinksReady, appointmentKeys, bookingsReady } = await import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`);
if (priorApproval === undefined) delete process.env.HALAXY_BOOKINGS_APPROVED;
else process.env.HALAXY_BOOKINGS_APPROVED = priorApproval;
// Synthetic unit-test URLs only: never used in site configuration or opened.
const urls = Object.fromEntries(appointmentKeys.map((key, index) => [key, `https://www.halaxy.com/unit-test-only?type=${index}`]));
test('closed unless launch approval and all eight distinct safe destinations exist', () => {
  assert.equal(bookingLinksReady(false, urls), false);
  assert.equal(bookingLinksReady(true, { ...urls, initialGeneralClinic: undefined }), false);
  assert.equal(bookingLinksReady(true, { ...urls, initialGeneralOnline: urls.initialGeneralClinic }), false);
  assert.equal(bookingLinksReady(true, urls), true);
});
test('rejects profile, application, placeholder, insecure and deceptive links', () => {
  for (const value of [undefined, '', 'PASTE_HALAXY_URL', 'javascript:alert(1)', 'http://www.halaxy.com/unit-test-only', 'https://www.halaxy.com.evil.test/unit-test-only', 'https://evil.test@www.halaxy.com/unit-test-only', 'https://www.halaxy.com/profile/mr-kumar-goteti/homeopath/1816729', 'https://www.halaxy.com/a/pr/test', 'https://www.halaxy.com/', 'https://www.halaxy.com/unit-test-only#token']) assert.equal(validatedHalaxyUrl(value), null, String(value));
});
test('unsafe destination in any mode keeps the whole booking catalogue closed', () => {
  for (const key of appointmentKeys) assert.equal(bookingLinksReady(true, { ...urls, [key]: 'https://outside.test/book' }), false);
});
test('saved genuine links remain closed without launch approval', () => {
  assert.equal(Object.keys(registry).length, 8);
  assert.equal(bookingLinksReady(false, registry), false);
  assert.equal(bookingLinksReady(true, registry), true);
});
test('holding release stays closed even if the host approval variable is true', () => {
  assert.equal(bookingsReady, false);
});
