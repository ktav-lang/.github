#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { configure, buildRootDocs } from '@ktav-lang/polydoc';

const LANGS = ['en', 'ru', 'zh'];
const SETS = [
  {
    root: '.',
    docs: {
      README: { en: 'README.md', ru: 'README.ru.md', zh: 'README.zh.md' },
      SECURITY: { en: 'SECURITY.md', ru: 'SECURITY.ru.md', zh: 'SECURITY.zh.md' },
    },
  },
  {
    root: 'profile',
    docs: {
      README: {
        en: 'profile/README.md',
        ru: 'profile/README.ru.md',
        zh: 'profile/README.zh.md',
      },
    },
  },
];

function headingLevels(markdown) {
  const levels = [];
  let fence = null;
  for (const line of markdown.split('\n')) {
    const marker = line.match(/^\s{0,3}(`{3,}|~{3,})/u)?.[1];
    if (marker) {
      if (fence === null) fence = marker;
      else if (marker[0] === fence[0] && marker.length >= fence.length) fence = null;
      continue;
    }
    if (fence !== null) continue;
    const heading = line.match(/^(#{1,6})\s+\S/u);
    if (heading) levels.push(heading[1].length);
  }
  return levels;
}

function main() {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const args = process.argv.slice(2);
  if (args.length > 1 || (args.length === 1 && args[0] !== '--check')) {
    process.stderr.write('usage: node scripts/build-docs.mjs [--check]\n');
    process.exit(1);
  }
  const check = args[0] === '--check';
  const built = [];
  try {
    for (const set of SETS) {
      configure({ langs: LANGS, rootDocuments: Object.keys(set.docs) });
      const docs = buildRootDocs(path.join(root, set.root));
      for (const [name, perLang] of docs) {
        const reference = headingLevels(perLang.get('en').toString('utf8'));
        for (const lang of LANGS.slice(1)) {
          const translated = headingLevels(perLang.get(lang).toString('utf8'));
          if (translated.length !== reference.length ||
              translated.some((level, index) => level !== reference[index])) {
            throw new Error(`${set.root}/${name}: ${lang} heading structure differs from en`);
          }
        }
      }
      built.push({ set, docs });
    }
  } catch (error) {
    process.stderr.write(`build-docs: ${error.message}\n`);
    process.exit(1);
  }

  const problems = [];
  for (const { set, docs } of built) {
    for (const [name, perLang] of docs) {
      for (const lang of LANGS) {
        const output = path.join(root, set.docs[name][lang]);
        const expected = perLang.get(lang);
        if (!check) {
          fs.writeFileSync(output, expected);
          continue;
        }
        let actual;
        try {
          actual = fs.readFileSync(output);
        } catch (error) {
          problems.push(`${path.relative(root, output)} is missing or unreadable: ${error.message}`);
          continue;
        }
        if (!actual.equals(expected)) {
          problems.push(`${path.relative(root, output)} differs from root-docs/${set.root === '.' ? '' : `${set.root}/`}${name}/`);
        }
      }
    }
  }
  if (problems.length) {
    for (const problem of problems) process.stderr.write(`build-docs --check: ${problem}\n`);
    process.exit(1);
  }
}

main();
