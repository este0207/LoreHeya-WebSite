'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

type RecordItem = Record<string, string>;
type Content = Record<string, RecordItem[]>;
type ApiResult = { content?: Content; labels?: Record<string, string>; error?: string; savedAt?: string };

const templates: Content = {
  presentation: [{ heroEyebrow: '', heroTitle: '', heroSubtitle: '', heroPrimary: '', heroPrimaryLink: '', heroSecondary: '', heroSecondaryLink: '', storyEyebrow: '', storyTitle: '', story: '', offeringsEyebrow: '', offeringsTitle: '', offeringsText: '', bookImage: '', bookTitle: '', bookText: '', bookLinkText: '', bookLink: '', heroImage: '' }],
  accueil: [{ title: '', description: '', buttonText: '', buttonLink: '', image: '' }],
  voyages: [{ name: '', title: '', dates: '', duration: '', image: '', description: '', detailHref: '', highlights: '' }],
  centrale: [{ title: '', eyebrow: '', description: '', dates: '', duration: '', price: '', group: '', image: '', sectionTitle: '', sectionIntro: '', itinerary: '', highlights: '', practical: '' }],
  altai: [{ title: '', eyebrow: '', description: '', dates: '', duration: '', price: '', group: '', image: '', sectionTitle: '', sectionIntro: '', itinerary: '', highlights: '', practical: '' }],
  stages: [{ title: '', eyebrow: '', description: '', image: '', imageAlt: '', buttonText: '', buttonLink: '', contactTitle: '', contactText: '' }],
  retraites: [{ title: '', eyebrow: '', description: '', noticeTitle: '', noticeText: '' }],
  faq: [{ id: '', question: '', answer: '' }],
};

const fieldLabels: Record<string, string> = {
  title: 'Titre', name: 'Nom / destination', dates: 'Dates', duration: 'Durée', price: 'Tarif', group: 'Taille du groupe',
  image: 'Image', imageAlt: 'Texte alternatif de l’image', description: 'Description', highlights: 'Temps forts (une ligne par élément)',
  detailHref: 'Lien vers la page détaillée', buttonText: 'Texte du bouton', buttonLink: 'Lien du bouton', eyebrow: 'Petit titre',
  heroEyebrow: 'Petit titre du bandeau principal', heroTitle: 'Titre principal', heroSubtitle: 'Texte sous le titre',
  heroPrimary: 'Bouton principal', heroPrimaryLink: 'Lien du bouton principal', heroSecondary: 'Second bouton', heroSecondaryLink: 'Lien du second bouton',
  storyEyebrow: 'Petit titre de la présentation', storyTitle: 'Titre de la présentation', story: 'Texte de présentation (un paragraphe par ligne)',
  offeringsEyebrow: 'Petit titre des cartes', offeringsTitle: 'Titre des cartes', offeringsText: 'Texte des cartes',
  bookImage: 'Image du livre', bookTitle: 'Titre du livre', bookText: 'Texte du livre', bookLinkText: 'Texte du lien du livre', bookLink: 'Lien du livre',
  heroImage: 'Image du bandeau principal',
  sectionTitle: 'Titre du parcours', sectionIntro: 'Introduction du parcours',
  itinerary: 'Étapes (une ligne par étape : titre|description)', practical: 'Informations pratiques (séparez les paragraphes par une ligne vide)',
  contactTitle: 'Titre du bloc contact', contactText: 'Texte du bloc contact', noticeTitle: 'Titre de l’annonce', noticeText: 'Texte de l’annonce',
  slug: 'Adresse de la page',
  id: 'Identifiant interne', question: 'Question', answer: 'Réponse',
};

function newRecord(template: RecordItem) {
  return Object.fromEntries(Object.keys(template).map((key) => [key, '']));
}

export default function AdminDashboard() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [content, setContent] = useState<Content>({});
  const [labels, setLabels] = useState<Record<string, string>>({});
  const [active, setActive] = useState('accueil');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [message, setMessage] = useState('');

  async function loadContent() {
    setLoading(true);
    const response = await fetch('/api/admin/content', { cache: 'no-store' });
    const result = await response.json() as ApiResult;
    if (response.ok && result.content) {
      setContent(result.content);
      setLabels(result.labels || {});
      setLoggedIn(true);
    } else if (response.status === 401) {
      setLoggedIn(false);
      router.replace('/admin/login');
    }
    else setMessage(result.error || 'Impossible de charger les contenus.');
    setLoading(false);
  }

  useEffect(() => { void loadContent(); }, []);

  function updateRecord(index: number, key: string, value: string) {
    setContent((current) => ({
      ...current,
      [active]: (current[active] || []).map((record, recordIndex) => recordIndex === index ? { ...record, [key]: value } : record),
    }));
    setDirty(true);
  }

  async function uploadImage(index: number, file?: File, field = 'image') {
    if (!file) return;
    setMessage('Envoi de l’image…');
    const form = new FormData();
    form.set('file', file);
    const response = await fetch('/api/admin/upload', { method: 'POST', body: form });
    const result = await response.json() as ApiResult & { path?: string };
    if (!response.ok || !result.path) { setMessage(result.error || 'Envoi de l’image impossible.'); return; }
    updateRecord(index, field, result.path);
    setMessage('Image envoyée. Enregistrez les modifications pour publier le chemin.');
  }

  function addRecord() {
    const records = content[active] || [];
    const model = records[0] || templates[active]?.[0] || { title: '' };
    const record = newRecord(model);
    if (active === 'faq') record.id = `question-${Date.now()}`;
    setContent((current) => ({ ...current, [active]: [...(current[active] || []), record] }));
    setDirty(true);
  }

  function deleteRecord(index: number) {
    if (!window.confirm('Supprimer cet élément ? Cette action sera enregistrée quand vous cliquerez sur Enregistrer.')) return;
    setContent((current) => ({ ...current, [active]: (current[active] || []).filter((_, i) => i !== index) }));
    setDirty(true);
  }

  function moveRecord(index: number, direction: -1 | 1) {
    const records = [...(content[active] || [])];
    const target = index + direction;
    if (target < 0 || target >= records.length) return;
    [records[index], records[target]] = [records[target], records[index]];
    setContent((current) => ({ ...current, [active]: records }));
    setDirty(true);
  }

  async function save() {
    setSaving(true);
    setMessage('');
    const response = await fetch('/api/admin/content', {
      method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ content }),
    });
    const result = await response.json() as ApiResult;
    setSaving(false);
    if (!response.ok) { setMessage(result.error || 'Enregistrement impossible.'); return; }
    setDirty(false);
    setMessage('Modifications enregistrées.');
  }

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    setLoggedIn(false);
    setContent({});
    setMessage('');
  }

  const activeRecords = content[active] || [];
  const fields = useMemo(() => Object.keys(activeRecords[0] || templates[active]?.[0] || { title: '' }), [active, activeRecords]);

  if (!loggedIn) return <main className="admin-shell"><p>Vérification de la session…</p></main>;

  return (
    <main className="admin-shell">
      {/* <header className="admin-topbar"><div><span className="admin-kicker">Lore Heya</span><h1>Administration</h1></div><div className="admin-top-actions"><a href="/" target="_blank" rel="noreferrer">Voir le site ↗</a><button className="admin-quiet-button" onClick={logout}>Déconnexion</button></div></header> */}
      <div className="admin-layout">
        <aside className="admin-sidebar"><h2>Contenus</h2>{Object.entries(labels).map(([key, label]) => <button key={key} className={active === key ? 'active' : ''} onClick={() => setActive(key)}>{label}<span>{content[key]?.length ?? 0}</span></button>)}<p>Les modifications prennent effet sur le site après enregistrement.</p></aside>
        <section className="admin-editor">
          <div className="admin-editor-heading"><div><span className="admin-kicker">Gestion du contenu</span><h2>{labels[active] || active}</h2><p>Modifiez les champs, réordonnez les éléments, ou ajoutez-en et supprimez-en.</p></div><button className="admin-add-button" onClick={addRecord}>＋ Ajouter</button></div>
          {loading ? <p>Chargement des contenus…</p> : activeRecords.length === 0 ? <div className="admin-empty"><p>Aucun élément dans cette rubrique.</p><button className="admin-add-button" onClick={addRecord}>＋ Créer le premier élément</button></div> : (
            <div className="admin-record-list">{activeRecords.map((record, index) => <article className="admin-record" key={`${active}-${index}`}>
              <div className="admin-record-top"><strong>{record.title || record.name || `Élément ${index + 1}`}</strong><div className="admin-record-actions"><button aria-label="Monter" title="Monter" disabled={index === 0} onClick={() => moveRecord(index, -1)}>↑</button><button aria-label="Descendre" title="Descendre" disabled={index === activeRecords.length - 1} onClick={() => moveRecord(index, 1)}>↓</button><button className="admin-delete" onClick={() => deleteRecord(index)}>Supprimer</button></div></div>
              <div className="admin-fields">{fields.map((key) => {
                const value = record[key] || '';
                const multiline = value.includes('\n') || value.length > 110 || /description|text|answer|highlight|intro|body|story|practical|itinerary/i.test(key);
                const label = fieldLabels[key] || key.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ');
                if (/image/i.test(key)) return <div className="admin-field admin-field-wide" key={key}><label><span>{label} (chemin ou URL)</span><input value={value} onChange={(event) => updateRecord(index, key, event.target.value)} placeholder="/uploads/mon-image.jpg" /></label><label className="admin-upload-button">Importer une image<input type="file" accept="image/jpeg,image/png,image/webp,image/avif" onChange={(event) => void uploadImage(index, event.target.files?.[0], key)} /></label>{value.startsWith('/') && <img className="admin-image-preview" src={value} alt="Aperçu" />}</div>;
                return <label className={`admin-field ${multiline ? 'admin-field-wide' : ''}`} key={key}><span>{label}</span>{multiline ? <textarea rows={Math.max(3, Math.min(9, value.split('\n').length + 1))} value={value} onChange={(event) => updateRecord(index, key, event.target.value)} /> : <input value={value} onChange={(event) => updateRecord(index, key, event.target.value)} />}</label>;
              })}</div>
            </article>)}</div>
          )}
          <footer className="admin-savebar">{message && <span className={message.startsWith('Modifications') ? 'admin-message-ok' : 'admin-message-error'}>{message}</span>}<button className="btn btn-primary" onClick={save} disabled={saving || !dirty}>{saving ? 'Enregistrement…' : dirty ? 'Enregistrer les modifications' : 'Tout est enregistré'}</button></footer>
        </section>
      </div>
    </main>
  );
}
