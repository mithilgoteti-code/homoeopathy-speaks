import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const release = JSON.parse(readFileSync(new URL('../src/lib/siteRelease.json', import.meta.url), 'utf8'));
if (release.phase !== 'holding') throw new Error('This command only builds the reviewed holding release.');
for (const args of [['node_modules/next/dist/bin/next', 'build'], ['scripts/check-holding-export.mjs']]) {
  const result = spawnSync(process.execPath, args, {
    stdio: 'inherit', env: { ...process.env, HALAXY_BOOKINGS_APPROVED: 'false' },
  });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
