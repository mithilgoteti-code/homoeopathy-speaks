import { strict as assert } from 'node:assert';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';

const root = resolve('out');
function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? htmlFiles(join(dir, e.name)) : e.name.endsWith('.html') ? [join(dir, e.name)] : []);
}
const pages = htmlFiles(root);
assert(pages.length > 0, 'Build the holding export first.');
for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const visible = html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '');
  assert(!/<(?:form|input|textarea|select)\b/i.test(visible), `Unexpected data-collection control: ${file}`);
  assert(!/\[APPROVAL|Draft template:|insert the approved publication date|Dr Kumar|Cliniko|\$___/i.test(visible), `Unfinished or obsolete public copy: ${file}`);
  assert(!/https:\/\/(?:www\.)?halaxy\.com\/book\//i.test(html), `Holding export exposes a booking destination: ${file}`);
  assert(!/booking (?:was |is )?successful|appointment (?:was |is )?confirmed|request (?:has been |was )?submitted/i.test(visible), `Misleading completion message: ${file}`);
  for (const [, label] of visible.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/gi)) {
    assert(!/^Book (?:now|an appointment|appointment|with)/i.test(label.replace(/<[^>]+>/g, '').trim()), `Active-booking label in holding release: ${file}`);
  }
  for (const [, path] of visible.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
    if (path.startsWith('//')) continue;
    const target = resolve(root, '.' + decodeURIComponent(path));
    assert(target.startsWith(root + '/') || target === root);
    assert(existsSync(target) || existsSync(join(target, 'index.html')) || existsSync(target + '.html'), `Missing local link/asset ${path} in ${file}`);
  }
}
const booking = readFileSync(join(root, 'book-appointment/index.html'), 'utf8');
for (const value of ['45 minutes', '$100', '30 minutes', '$75', '60 minutes', '$150', '$120', 'Online bookings are not open yet']) assert(booking.includes(value), `Missing consultation detail: ${value}`);
const registry = JSON.parse(readFileSync('src/lib/halaxyBookingLinks.json', 'utf8'));
assert.equal(Object.keys(registry).length, 8);
assert.equal(new Set(Object.values(registry)).size, 8);
assert(existsSync('docs/policy-review/policyDrafts.json'), 'Preserve full policy drafts for later review.');
console.log(`Holding export passed: ${pages.length} HTML pages, no forms or booking destinations, no approval markers, local links/assets resolved, prices and eight-link register preserved.`);
