import Link from "next/link";
import NavBar from "../components/NavBar";

export default function MentionsLegalesPage() {
  const updated = new Date("2025-08-01");
  const updatedStr = updated.toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" });

  return (
    <main>
      {/* <NavBar></NavBar> */}
      {/* Hero visuel */}
      <section className="section">
        <div className="container legal-hero">
          <h1>Mentions légales</h1>
          <p className="subtitle">Transparence et cadre légal de nos services</p>
        </div>
      </section>

      {/* Cartes de contenus */}
      <section className="section">
        <div className="container legal-page">
          <div className="legal-grid">
            <article className="legal-card">
              <h2>Éditeur du site</h2>
              <p>
                <strong>Nom / Enseigne</strong> : Lore Heya Chamane<br />
                <strong>Statut</strong> : Entrepreneur individuel<br />
                <strong>Siège</strong> : Adresse à compléter – Rhône-Alpes, France<br />
                <strong>Contact</strong> : via la page <Link href="/contact">Contact</Link>
              </p>
              <p><strong>Responsable de publication</strong> : Lore Heya</p>
            </article>

            <article className="legal-card">
              <h2>Hébergeur</h2>
              <p>
                Nom de l’hébergeur – Adresse – Téléphone<br />
                (À compléter selon votre prestataire d’hébergement)
              </p>
            </article>

            <article className="legal-card">
              <h2>Propriété intellectuelle</h2>
              <p>
                L’ensemble des contenus de ce site (textes, images, visuels, logos, éléments graphiques et multimédias)
                est protégé par le droit de la propriété intellectuelle. Toute reproduction, représentation, modification
                ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite.
              </p>
            </article>

            <article className="legal-card">
              <h2>Données personnelles</h2>
              <p>
                Les données transmises via les formulaires (ex. prise de contact) servent uniquement à traiter vos
                demandes et assurer le suivi. Elles ne sont pas cédées à des tiers non autorisés.
              </p>
              <ul>
                <li><strong>Base légale</strong> : consentement et/ou intérêt légitime</li>
                <li><strong>Durée de conservation</strong> : jusqu’à 3 ans après le dernier contact</li>
                <li><strong>Destinataires</strong> : éditeur et prestataires strictement nécessaires</li>
              </ul>
              <p>
                Conformément au RGPD, vous disposez d’un droit d’accès, rectification, opposition, effacement,
                limitation et portabilité. Pour exercer vos droits, rendez-vous sur <Link href="/contact">Contact</Link>.
              </p>
            </article>

            <article className="legal-card">
              <h2>Cookies</h2>
              <p>
                Cookies strictement nécessaires au fonctionnement (sécurité, accessibilité). Si des cookies de mesure
                d’audience/tiers sont utilisés, votre consentement est recueilli via un bandeau dédié. Vous pouvez
                paramétrer votre navigateur pour les refuser.
              </p>
            </article>

            <article className="legal-card">
              <h2>Limitation de responsabilité</h2>
              <p>
                Malgré le soin apporté au contenu, l’éditeur ne garantit pas l’exactitude et l’exhaustivité des
                informations. Les soins proposés ne remplacent pas un suivi médical. En cas d’urgence, appelez le 15 ou le 112.
              </p>
            </article>

            <article className="legal-card">
              <h2>Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. À défaut de résolution amiable,
                les tribunaux compétents seront saisis conformément aux règles en vigueur.
              </p>
            </article>
          </div>

          <p className="legal-updated">Dernière mise à jour : {updatedStr}</p>
        </div>
      </section>
    </main>
  );
}
