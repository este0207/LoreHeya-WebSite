#!/bin/sh

set -e

git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/este0207/LoreHeya-WebSite.git
git branch -M main
git push -u origin main

echo "✅ Dépôt initialisé et envoyé sur GitHub !"