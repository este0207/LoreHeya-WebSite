import { readFile, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { randomUUID } from 'node:crypto';

export type ContentRecord = Record<string, string>;
export type ContentStore = Record<string, ContentRecord[]>;
export const contentPath = path.join(process.cwd(), 'src/data/site-content.json');

export async function readContent(): Promise<ContentStore> {
  const raw = await readFile(contentPath, 'utf8');
  return JSON.parse(raw) as ContentStore;
}

export async function writeContent(content: ContentStore) {
  const temporaryPath = `${contentPath}.${randomUUID()}.tmp`;
  await writeFile(temporaryPath, `${JSON.stringify(content, null, 2)}\n`, 'utf8');
  await rename(temporaryPath, contentPath);
}

export const contentLabels: Record<string, string> = {
  presentation: 'Accueil — présentation',
  accueil: 'Accueil — cartes',
  voyages: 'Voyages',
  centrale: 'Détail — Mongolie centrale',
  altai: 'Détail — Altaï',
  stages: 'Stages',
  retraites: 'Retraites',
  faq: 'Questions fréquentes',
};
