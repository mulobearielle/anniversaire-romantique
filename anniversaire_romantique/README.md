# Anniversaire romantique ❤️

Mini site HTML / CSS / JavaScript prêt pour GitHub Pages.

## 1. Personnaliser les prénoms et textes

Ouvre `script.js` et modifie le bloc `CONFIG` tout en haut :

```js
const CONFIG = {
  hisName: "Son prénom",
  herName: "Ton prénom",
  galleryUrl: "LIEN_DE_VOTRE_GALERIE",
  ...
};
```

## 2. Ajouter les photos

Copie vos photos dans :

```text
assets/images/
```

Par défaut, le site cherche :

```text
assets/images/photo1.jpg
assets/images/photo2.jpg
assets/images/photo3.jpg
assets/images/photo4.jpg
```

Tu peux modifier les noms dans `script.js` :

```js
images: [
  { src: "assets/images/photo1.jpg", caption: "Notre premier souvenir" },
  { src: "assets/images/photo2.jpg", caption: "Une journée inoubliable" }
]
```

## 3. Ajouter la musique

Place ton fichier MP3 ici :

```text
assets/music/music.mp3
```

Ou change `musicUrl` dans `script.js`.

## 4. Ajouter le lien de la galerie

Dans `script.js` :

```js
galleryUrl: "https://photos.app.goo.gl/TON-LIEN"
```

Le bouton « Voir toute notre galerie » ouvrira ce lien.

## 5. Tester en local

Tu peux ouvrir directement `index.html`, ou mieux utiliser VS Code + Live Server.

## 6. Publier sur GitHub Pages

Exemple :

```bash
git init
git add .
git commit -m "Site anniversaire romantique"
git branch -M main
git remote add origin https://github.com/TON-COMPTE/anniversaire-romantique.git
git push -u origin main
```

Puis sur GitHub :

`Settings` → `Pages` → `Deploy from a branch` → `main` → `/ (root)`.

Le site sera ensuite disponible à une adresse du type :

```text
https://TON-COMPTE.github.io/anniversaire-romantique/
```
