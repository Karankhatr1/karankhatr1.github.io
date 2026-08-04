# 🍱 Your Material bento portfolio

A fast, free portfolio website. No coding tools needed — you only ever edit **one file** (`data.js`) and drop pictures into the **images** folder.

---

## What's in this folder

| File / folder | What it is | Do you edit it? |
|---|---|---|
| **`data.js`** | ✏️ **All your content** — name, bio, links, case studies | **YES — this is the only file you edit** |
| **`images/`** | 🖼️ Your pictures | Yes — add/replace pictures here |
| `index.html`, `case-study.html` | The pages | No |
| `style.css`, `script.js` | Design + animations | No |

Open `index.html` in your browser any time to see the site on your computer.

---

## 1. Make it yours (5 minutes)

Open **`data.js`** in any text editor (Notepad, TextEdit) — or later, directly on GitHub.

1. At the top, change the name, role, tagline, email, location and timezone.
2. Change `avatar: "images/avatar.svg"` → put your photo in `images/` and write its name, e.g. `"images/me.jpg"`.
3. Update the `stats`, `skills` and `socials` lists.

**Golden rule:** only change the text between the `"quotes"`. Keep every comma, bracket and quote mark. If the page ever goes blank, you deleted one — undo (Ctrl/Cmd+Z) and save again.

---

## 2. Add or edit a case study

Case studies live at the bottom of `data.js`, in the `CASE_STUDIES` list.

**To edit one:** just change its text.

**To add a new one:**
1. Copy an existing project — everything from its opening `{` down to its closing `},`
2. Paste it just above the final `];`
3. Give it a new `id` (short, lowercase, dashes — e.g. `"coffee-app"`), new title, text, etc.

**To add pictures to a project:**
1. Make a folder inside `images/` (e.g. `images/coffee-app/`) and drop your pictures in.
2. In that project's `sections`, add a line wherever you want the picture to appear:

```js
{ type: "image", src: "images/coffee-app/screen-1.jpg", caption: "The home screen." },
```

Mix and match the four section types in any order:

```js
{ type: "text",  heading: "The problem", body: "First paragraph.\n\nSecond paragraph." },
{ type: "image", src: "images/coffee-app/photo.jpg", caption: "Optional caption" },
{ type: "stats", items: [ { number: "+38%", label: "More sign-ups" } ] },
{ type: "quote", body: "Loved working with them!", by: "Happy client" },
```

**Card options:** `color` can be `"blue"`, `"green"`, `"yellow"` or `"red"`; `size` can be `"large"` (full-width) or `"normal"` (half-width).

**Image tips:** landscape pictures around **1600 × 1000 px** look best. JPG or PNG is fine. If a photo is huge (over ~1 MB), shrink it for free at [squoosh.app](https://squoosh.app) so the site loads fast.

---

## 3. Put it online, free (GitHub Pages)

You only need a web browser.

1. Create a free account at [github.com](https://github.com).
2. Click **＋** (top-right) → **New repository**.
   - Name it exactly: `yourusername.github.io` (use *your* username).
   - Keep it **Public** → **Create repository**.
3. Click **"uploading an existing file"**, then drag **everything inside this folder** (all files **and** the `images` folder) into the page. Press **Commit changes**.
4. Wait ~1 minute, then visit **`https://yourusername.github.io`** 🎉

*(Named it something else? Go to the repo's **Settings → Pages**, under "Branch" choose **main** and **Save**. Your site will be at `yourusername.github.io/repo-name`.)*

### Updating the site later — no downloads needed
- **Change text:** on GitHub, open `data.js` → click the **✏️ pencil** → edit → **Commit changes**. Live in ~1 minute.
- **Add pictures:** open the `images` folder on GitHub → **Add file → Upload files**.

### Even easier alternative
Prefer drag-and-drop? Create a free account at [netlify.com](https://netlify.com), then drag this whole folder onto the dashboard. Done.

---

## Troubleshooting

- **A picture doesn't show** → the path in `data.js` must match the file name *exactly*, including capital letters and the ending (`.jpg` vs `.JPG` are different!).
- **The page is blank after an edit** → a comma or quote went missing in `data.js`. Undo your last change.
- **Site not appearing on GitHub** → check Settings → Pages shows a green "Your site is live" message; first publish can take a couple of minutes.

Enjoy! ✦
