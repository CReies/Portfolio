import { readFile, access } from 'node:fs/promises';
import assert from 'node:assert/strict';

const output = new URL('../dist/portfolio/browser/', import.meta.url);
const baseHref = process.argv[2] ?? '/';
const domain = 'cristian-reyes.dev';
const html = await readFile(new URL('index.html', output), 'utf8');
assert.ok(html.includes(`<base href="${baseHref}">`), `Expected base href ${baseHref}`);
assert.equal((await readFile(new URL('CNAME', output), 'utf8')).trim(), domain);
assert.ok(
  html.includes(`rel="canonical" href="https://${domain}/"`),
  'Canonical URL must use the custom domain',
);
assert.ok(!html.includes('creies.github.io'), 'Stale GitHub Pages URL in metadata');
assert.ok(
  html.includes(`https://${domain}/assets/images/social-preview.png`),
  'Social image URL must use the custom domain',
);
const image = await readFile(new URL('assets/images/social-preview.png', output));
assert.equal(
  (await readFile(new URL('googlee1069f5a46646f8d.html', output), 'utf8')).trim(),
  'google-site-verification: googlee1069f5a46646f8d.html',
);
const robots = await readFile(new URL('robots.txt', output), 'utf8');
assert.ok(robots.includes(`Sitemap: https://${domain}/sitemap.xml`));
const sitemap = await readFile(new URL('sitemap.xml', output), 'utf8');
assert.ok(sitemap.includes(`<loc>https://${domain}/</loc>`));
const favicon = await readFile(new URL('assets/favicon.png', output));
assert.equal(favicon.toString('hex', 0, 8), '89504e470d0a1a0a');
assert.equal(favicon.readUInt32BE(16), 96);
assert.equal(favicon.readUInt32BE(20), 96);
assert.ok(html.includes('href="assets/favicon.png"'));
const structuredData = JSON.parse(
  html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1],
);
assert.equal(structuredData['@graph'][0]['@type'], 'WebSite');
assert.equal(structuredData['@graph'][0].url, `https://${domain}/`);
assert.equal(structuredData['@graph'][1].name, 'Cristian Reyes');
assert.equal([...html.matchAll(/name="description"/g)].length, 1);
assert.equal(image.toString('hex', 0, 8), '89504e470d0a1a0a', 'Social image must be PNG');
assert.equal(image.readUInt32BE(16), 1200);
assert.equal(image.readUInt32BE(20), 630);
for (const language of ['EN', 'ES']) {
  const pdf = await readFile(new URL(`assets/documents/Cristian_Reyes_CV_${language}.pdf`, output));
  assert.equal(pdf.toString('ascii', 0, 5), '%PDF-', `Missing or invalid ${language} CV`);
}
for (const match of html.matchAll(/(?:src|href)="([^"#]+\.(?:js|css))"/g)) {
  assert.ok(!match[1].startsWith('/'), `Bundle path must remain relative: ${match[1]}`);
  await access(new URL(match[1], output));
}
console.log(
  `Deployment assets passed: https://${domain}, base ${baseHref}, browser output, CNAME, social PNG and both CVs.`,
);
