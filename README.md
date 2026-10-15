This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Administration du contenu

La page de connexion est disponible sur `/admin/login` et le panneau sur `/admin`. Pour l’activer, définissez `ADMIN_USERNAME`, `ADMIN_PASSWORD` et `ADMIN_SESSION_SECRET` dans l’environnement du serveur (voir `admin.env.example` pour les noms). Le panneau reste fermé tant que ces valeurs ne sont pas définies. Utilisez un mot de passe unique et une clé aléatoire d’au moins 32 caractères. Ne stockez pas ces secrets dans Git.

L’administration permet de modifier les contenus d’accueil, les cartes, les voyages et leurs pages détaillées, les stages et les retraites. Chaque rubrique permet d’ajouter, réordonner et supprimer des entrées. Les images peuvent être importées depuis le panneau (JPG, PNG, WebP ou AVIF, 5 Mo maximum). Les contenus éditables sont stockés dans `src/data/site-content.json` et les imports dans `public/uploads`.

Le stockage actuel utilise le disque du serveur. Le déploiement doit donc conserver ces deux emplacements entre les redémarrages et autoriser l’écriture au processus Next.js. Un déploiement serverless ou un conteneur éphémère nécessite un stockage persistant partagé avant d’utiliser l’administration en production.
