#!/bin/sh

set -e

echo "Entrez le message du commit :"
read COMMIT_MSG

git init
git add .
git commit -m "$COMMIT_MSG"
git remote add origin https://github.com/este0207/LoreHeya-WebSite.git
git branch -M main
git push -u origin main

echo "✅ Dépôt initialisé et envoyé sur GitHub !"