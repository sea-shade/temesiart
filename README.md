# Temesi Péter — Portfolio Site

A clean, free portfolio site for Péter Temesi, built with React and deployed via GitHub Pages.

---

## 🚀 Setup (one time)

### 1. Create a GitHub repo

Create a new public repo at github.com, e.g. `temesi-portfolio`.

### 2. Clone and install

```bash
git clone https://github.com/YOUR_USERNAME/temesi-portfolio.git
cd temesi-portfolio
npm install
```

### 3. Configure your repo name

In `package.json`, update the `homepage` field:
```json
"homepage": "https://YOUR_USERNAME.github.io/temesi-portfolio"
```

In `src/data/content.js`, update `BASE_PATH`:
```js
export const BASE_PATH = "/temesi-portfolio"; // must match repo name
```

### 4. Enable GitHub Pages

- Go to repo **Settings → Pages**
- Set source to **Deploy from a branch**
- Select branch: `gh-pages`, folder: `/ (root)`
- Save

### 5. Push — the GitHub Action does the rest

```bash
git add .
git commit -m "initial deploy"
git push origin main
```

The GitHub Action (`.github/workflows/deploy.yml`) will automatically build and deploy on every push to `main`. Your site will be live at:

```
https://YOUR_USERNAME.github.io/temesi-portfolio
```

---

## 🖼️ Adding new artwork (single commit)

All content lives in **`src/data/content.js`**.

### Add images to the repo

Place image files in:
```
public/images/portraits/
public/images/fine-art/
public/images/video-games/
public/images/book-covers/
```

### Reference them in content.js

```js
// Use BASE_PATH so paths work on GitHub Pages:
import { BASE_PATH } from './content';

// Example entry in gallery.portraits:
{
  src: `${BASE_PATH}/images/portraits/my-new-portrait.jpg`,
  alt: "Description of the work",
  title: "Display Title",
}
```

### Commit and push

```bash
git add public/images/portraits/my-new-portrait.jpg
git add src/data/content.js
git commit -m "add new portrait: My New Portrait"
git push
```

GitHub Actions builds and deploys automatically. Done. ✅

---

## 🎨 Restyling the site

All design tokens live in one file: **`src/styles/tokens.css`**

To change the entire look-and-feel, edit the CSS variables at the top:

```css
:root {
  --color-bg:      #f5f2ec;   /* page background */
  --color-ink:     #1c1a16;   /* text */
  --color-accent:  #8b3a2a;   /* highlight colour */
  --font-display:  'Cormorant Garamond', Georgia, serif;
  --font-mono:     'DM Mono', monospace;
  /* ... */
}
```

For a completely different look: change the Google Fonts import at the top of `tokens.css` and update `--font-display` and `--font-mono`.

---

## 🌍 Bilingual content (EN / HU)

All text lives in `src/data/content.js` under `export const i18n`.
Edit both `en` and `hu` objects to update copy in either language.

---

## 📁 Project structure

```
temesi-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        ← auto build + deploy on push to main
├── public/
│   ├── index.html
│   └── images/               ← put artwork here
│       ├── portraits/
│       ├── fine-art/
│       ├── video-games/
│       └── book-covers/
├── src/
│   ├── data/
│   │   └── content.js        ← ALL content: text, image paths, i18n
│   ├── styles/
│   │   └── tokens.css        ← ALL design tokens: colours, fonts, spacing
│   ├── components/
│   │   ├── Nav.js
│   │   ├── Hero.js
│   │   ├── Gallery.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   └── index.js
└── package.json
```

---

## 🛠️ Local development

```bash
npm start
```

Opens `http://localhost:3000` with hot reload.
