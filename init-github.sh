#!/bin/sh

set -e

echo "Entrez le message du commit :"
read COMMIT_MSG

git init
git add .
git commit -m "$COMMIT_MSG"

# Ajoute le remote seulement s'il n'existe pas déjà
if ! git remote | grep -q origin; then
  git remote add origin https://github.com/este0207/LoreHeya-WebSite.git
fi

git branch -M main
git push -u origin main

echo "✅ Dépôt initialisé et envoyé sur GitHub !"