# Audit du projet Lore Heya

**Date de lecture : 2 octobre 2026**  
**Périmètre :** lecture statique du dépôt (structure, pages, composants, styles, API et configuration). Aucun test, build ni audit de dépendances n’a été lancé ; les constats ci-dessous décrivent le code visible et ne remplacent pas une vérification en production.

## Vue d’ensemble

Le dépôt contient un site vitrine construit avec Next.js App Router et React. Il présente des activités (guidances, formations, stages, retraites et voyages), ainsi qu’un formulaire de contact et un système d’avis/commentaires qui s’appuie sur Supabase. L’ensemble a déjà une identité visuelle, des pages spécialisées et plusieurs contenus photographiques.

## Ce qui est bien

- **Organisation par routes lisible :** les pages sont rangées sous `src/app` et les composants partagés sous `src/app/components`.
- **Composants réutilisés :** navigation, pied de page, cartes, en-tête et écran de chargement sont isolés plutôt que copiés dans chaque page.
- **Socle TypeScript strict :** `strict: true` et les alias `@/*` facilitent le repérage des erreurs et les imports.
- **Interactions mobiles prévues :** la navigation dispose d’un menu repliable, de libellés accessibles, de la fermeture avec Échap et du blocage du scroll derrière le menu.
- **Formulaire de contact séparé côté serveur :** l’envoi SMTP est dans une route API, les secrets SMTP sont lus depuis l’environnement, et l’adresse de réponse est renseignée avec l’email du visiteur.
- **Commentaires limités en taille :** le nom et le message sont tronqués côté serveur, et les notes sont bornées entre 1 et 5.
- **Quelques attentions d’accessibilité et de chargement :** plusieurs icônes sont masquées aux lecteurs d’écran, les champs du formulaire ont des labels, et la carte Google Maps est chargée avec `loading="lazy"`.
- **Contenus visuels déjà présents :** photos, PDF et images de présentation sont classés sous `public` par thème.

## Ce qui est fragile ou incomplet

### Priorité haute — à corriger avant de considérer le site finalisé

1. **Mentions légales avec champs de remplacement.** La page affiche « Adresse à compléter », un hébergeur non renseigné et une région qui ne correspond pas à l’adresse annoncée dans la page Contact (Roquebrune-sur-Argens, Var). Les informations affichées doivent être exactes et complètes avant publication. Voir `src/app/mentions-legales/page.tsx`.
2. **Contenu HTML du mail construit avec des données non échappées.** Dans `src/app/api/contact/route.ts`, `fullName`, `email` et `message` sont interpolés directement dans le HTML envoyé. Un contenu contenant du balisage peut être interprété par le client de messagerie. Échapper le HTML ou envoyer une version texte seulement.
3. **Validation serveur du formulaire trop légère.** La route vérifie seulement la présence du nom, de l’email et du message. Elle ne valide pas le format d’email, ne borne pas les longueurs et ne valide pas le type/format du JSON. Ajouter une validation structurée et des limites explicites.
4. **Commentaires publics sans garde-fous anti-abus visibles.** `POST /api/comments` accepte des soumissions anonymes sans limite de fréquence, et `page` n’est pas contraint à une liste de valeurs connues. Cela peut faciliter le spam ou créer des catégories arbitraires. Ajouter une liste autorisée, une protection anti-spam/rate limit et vérifier les règles RLS Supabase.
5. **Réponses API trop détaillées.** Les routes renvoient au client des messages d’erreur SMTP/Supabase et divers détails de transport. En production, renvoyer un message générique et conserver les détails dans les journaux serveur.
6. **Liens sociaux inactifs.** Les boutons Facebook et Instagram du pied de page pointent vers `#`. Les remplacer par les profils réels ou les retirer tant que les URL ne sont pas disponibles. Voir `src/app/components/Footer.tsx`.

### Priorité moyenne — qualité, référencement et maintenance

- **Écran de chargement global qui retarde toutes les pages.** Le layout masque le contenu pendant 3 secondes puis retire l’écran à 3,5 secondes, indépendamment du chargement réel. Il peut donner une impression de lenteur et pénaliser l’accès au contenu. L’écran de la page d’accueil ajoute aussi un chargement distinct. Voir `src/app/layout.tsx` et `src/app/page.tsx`.
- **Layout racine converti en composant client.** `src/app/layout.tsx` porte l’état React du loader ; cela oblige le layout racine à être client et empêche la déclaration habituelle des métadonnées via l’export `metadata`. Déplacer l’interaction dans un petit composant dédié et garder le layout serveur permettrait d’ajouter facilement titres, description, icône et partage social.
- **Peu de métadonnées SEO visibles.** Aucune exportation `metadata` n’a été repérée dans les pages/layout lus. Ajouter un titre et une description adaptés à chaque page, ainsi que les métadonnées de partage et une URL canonique si le domaine est connu.
- **Trop de composants/pages en mode client.** Plusieurs pages sont marquées `'use client'` sans besoin évident d’état interactif dans leur rendu visible. Les composants serveur par défaut réduiraient le JavaScript envoyé au navigateur. À vérifier page par page avant refactorisation.
- **Navigation dupliquée.** `NavBar.tsx` et `NavBar2.tsx` reprennent presque la même structure ; seule la première gère le défilement et la seconde force la classe `scrolled`. Une prop ou un composant partagé éviterait les divergences.
- **Sémantique HTML à améliorer dans les cartes.** `Card.tsx` place un `<button>` à l’intérieur d’un `<Link>`, alors qu’un lien stylé comme un bouton suffit. Le texte alternatif de l’image de fond est toujours « Card Background », peu informatif ; comme il s’agit d’un décor, une image de fond CSS ou un alt vide est plus approprié.
- **Images non optimisées partout.** La page d’accueil utilise un `<img>` natif pour la couverture, certaines pages aussi ; `Card` donne `priority` à chaque image de carte, y compris celles sous la ligne de flottaison. Réserver le chargement prioritaire aux images réellement visibles au départ et utiliser l’optimisation Next Image lorsque cela convient.
- **CSS global difficile à maintenir.** `globals.css` mélange règles globales, styles de composants et responsive ; il contient des règles redondantes (deux déclarations `font-family` sur `body`) et des imports de polices Google à la fois dans le CSS et le layout. Centraliser les polices et retirer les doublons réduirait les requêtes et les incohérences.
- **Lisibilité du contenu et cohérence éditoriale.** Des formulations et accents sont incohérents dans la page d’accueil (« Accéder a », apostrophes/accents manquants). Une passe de relecture et une vérification des libellés des boutons amélioreraient la finition.
- **Dépendances et scripts à clarifier.** `sib-api-v3-sdk` apparaît dans les dépendances mais aucune utilisation n’a été repérée dans les fichiers applicatifs examinés. Le script `lint` appelle `next lint`, commande à vérifier avec la version Next déclarée ; un script ESLint explicite serait plus pérenne.
- **README encore celui du modèle de démarrage.** Il ne décrit ni les pages, ni les variables d’environnement, ni la configuration Supabase/SMTP, ni le déploiement spécifique du projet.

## Pistes d’amélioration, dans l’ordre

1. Renseigner et valider les mentions légales, les URL sociales et les coordonnées réellement publiées.
2. Sécuriser les formulaires : validation de schéma côté serveur, limites de taille, échappement du HTML email, messages d’erreur publics sobres, protection anti-spam et vérification des politiques Supabase.
3. Rendre le layout racine serveur et retirer le délai artificiel du chargement global ; conserver un indicateur uniquement pour les opérations qui chargent réellement.
4. Ajouter les métadonnées SEO et vérifier les titres H1/H2, textes alternatifs et liens de chaque page.
5. Unifier les deux navigations, corriger la structure lien/bouton et réduire l’usage de `'use client'` aux composants interactifs.
6. Optimiser les images et les polices, puis revoir le CSS global et les styles en ligne.
7. Remplacer le README de démarrage par une documentation projet (installation, variables, Supabase, SMTP, scripts et déploiement).

## Points qui restent à vérifier

- Les règles RLS et le schéma réel de la table `comments` dans Supabase ne sont pas présents dans le dépôt consulté.
- Aucun fichier d’exemple d’environnement n’a été repéré ; les noms de variables attendus sont visibles dans le code (`SMTP_*`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`).
- Le comportement responsive et l’accessibilité visuelle doivent être vérifiés dans un navigateur, avec clavier et lecteur d’écran.
- Il reste à exécuter les contrôles de compilation, lint et dépendances pour établir l’état réel du build.

