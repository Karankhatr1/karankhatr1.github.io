# 🍱 Your Material bento portfolio — now with two front doors

One site, two tailored versions. You share **different links** depending on who's looking:

| Audience | Link you share |
|---|---|
| Product **Manager** roles | `https://yourusername.github.io/pm/` |
| Product **Design Lead** roles | `https://yourusername.github.io/design/` |

Each version has its own intro, stats, skills and case studies. Someone browsing one version can never click their way into the other — every link, back-button, and "next project" arrow stays inside the version they were sent.

Visiting the bare domain (no `/pm/` or `/design/`) shows a neutral "this portfolio is shared by direct link" page that mentions neither version.

---

## What's in this folder

| File / folder | What it is | Do you edit it? |
|---|---|---|
| **`shared/profile.js`** | ✏️ **Who you are** — name, email, location, social links (used by both versions) | **YES — edit once** |
| **`pm/data.js`** | ✏️ Everything **PM audiences** see — role, tagline, stats, case studies | **YES** |
| **`design/data.js`** | ✏️ Everything **Design Lead audiences** see | **YES** |
| `pm/images/`, `design/images/` | 🖼️ Pictures for each version | Yes — add/replace pictures |
| `index.html`, `404.html` | Neutral landing + not-found pages | No |
| `pm/*.html`, `design/*.html` | The pages of each version | No |
| `shared/style.css`, `shared/script.js` | Design + animations (shared) | No |

To preview on your computer, open `pm/index.html` or `design/index.html` in your browser.

**Golden rule, unchanged:** only edit text between the `"quotes"`. Keep every comma, bracket and quote mark. Blank page after an edit = a missing comma — undo (Ctrl/Cmd+Z) and save again.

---

## 1. Make it yours

1. **`shared/profile.js`** — your name, email, location, timezone and social links. Edit once; both versions and the landing page pick it up.
2. **`pm/data.js`** — how you introduce yourself to PM audiences (role, tagline, about, stats, skills) and your PM case studies.
3. **`design/data.js`** — the same, told for design-leadership audiences.
4. **Photos** — each version has its **own** `images/` folder. Replace `pm/images/avatar.svg` and `design/images/avatar.svg` with your photo (e.g. `"images/me.jpg"` — the path in each `data.js` is relative to that version's folder). The grey-ish project pictures currently in there are placeholders — swap them for your real work.

💡 **Per-version overrides:** anything you set in a version's `data.js` beats `shared/profile.js` for that version only. Want to hide Dribbble from PM recruiters? Add a `socials: [ ... ]` list inside `pm/data.js`. Same trick works for a per-version resume — each `data.js` already has its own `resume:` line.

**It's fine to reuse the same picture in both versions** — just put a copy in each folder. Keeping the folders separate is exactly what keeps the versions separate.

---

## 2. Add or edit a case study

Works exactly like before, just per version — case studies live at the bottom of `pm/data.js` and `design/data.js`.

**To add a new one:** copy an existing project — everything from its opening `{` down to its closing `},` — paste it just above the final `];`, and change the details (`id` must be short, lowercase, dashes, unique *within that file*).

Mix and match the four section types in any order:

```js
{ type: "text",  heading: "The problem", body: "First paragraph.\n\nSecond paragraph." },
{ type: "image", src: "images/coffee-app/photo.jpg", caption: "Optional caption" },
{ type: "stats", items: [ { number: "+38%", label: "More sign-ups" } ] },
{ type: "quote", body: "Loved working with them!", by: "Happy client" },
```

**Card options:** `color` can be `"blue"`, `"green"`, `"yellow"` or `"red"`; `size` can be `"large"` (full-width) or `"normal"` (half-width).

**Image tips:** landscape pictures around **1600 × 1000 px** look best; put them in *that version's* `images/` folder (e.g. `pm/images/coffee-app/`). If a photo is over ~1 MB, shrink it free at [squoosh.app](https://squoosh.app).

**The same project can appear in both versions** — told differently. Payflow is already in this starter twice: as a design story in `design/data.js` and as a PM story in `pm/data.js`. That's the whole idea.

---

## 3. How the two versions stay separate

- **Separate content files.** Each version only loads its own `data.js`. A case study that isn't in that file simply doesn't exist for that visitor — even typing its address shows "that project isn't here."
- **No cross-links anywhere.** Nav, footer, back-links and previous/next arrows are all relative links inside the version's own folder.
- **Search engines are told to skip both versions** (a `noindex` tag on every page), so neither shows up when someone googles you.
- **No `robots.txt` — on purpose.** A robots file that says "don't look in /pm/" would broadcast the folder names to anyone who checks it. The noindex tags do the job without the signpost.
- **Neutral dead-ends.** The bare domain and any wrong URL land on pages that mention neither version.

### 🔒 Optional: make the links unguessable

Someone who receives `…github.io/design/` *could* try typing `…github.io/pm/`. If that bothers you, just **rename the folders** — e.g. `pm` → `pm-k3x9d` and `design` → `dl-w7q2m`. Nothing else needs changing (all links inside are relative), you just share the new addresses.

### Honest fine print

This is a public, static site — there are no passwords. A determined, technical person could still find both versions by browsing your **public GitHub repository** itself. Recruiters don't do this, but if you want the source hidden too, host on [netlify.com](https://netlify.com) instead (free, drag-and-drop the folder, source stays private) — or use true password protection (Netlify/Vercel paid plans). For the normal "two audiences, two links" use case, this setup is plenty.

---

## 4. Put it online, free (GitHub Pages)

1. Create a free account at [github.com](https://github.com) → **＋** → **New repository** → name it exactly `yourusername.github.io` → keep **Public** → **Create repository**.
2. Click **"uploading an existing file"**, drag **everything inside this folder** in, press **Commit changes**.
3. Wait ~1 minute → your links are live at `https://yourusername.github.io/pm/` and `https://yourusername.github.io/design/` 🎉

*(Named the repo something else? Settings → Pages → Branch: **main** → Save. Your links become `yourusername.github.io/repo-name/pm/` etc.)*

### ⚠️ Upgrading from the old one-version site?

Uploading new files does **not** remove old ones — and your old `case-study.html`, `data.js`, `script.js` and `style.css` at the repo root would keep the old *everything-in-one* site alive at its old address, undoing the separation. On GitHub, open each of those four old root files → click the **🗑 trash icon** → **Commit changes**. (Your old `images/` folder can stay or go — nothing links to it anymore.)

### Updating the site later — no downloads needed

- **Change text:** on GitHub, open `pm/data.js`, `design/data.js` or `shared/profile.js` → **✏️ pencil** → edit → **Commit changes**. Live in ~1 minute.
- **Add pictures:** open `pm/images/` or `design/images/` on GitHub → **Add file → Upload files**.

### Even easier alternative

Drag this whole folder onto a free [netlify.com](https://netlify.com) account. Bonus: your source files aren't public there.

---

## Troubleshooting

- **A picture doesn't show** → the path in that version's `data.js` must match a file inside *that version's* `images/` folder exactly, including capitals (`.jpg` vs `.JPG` differ!).
- **The page is blank after an edit** → a comma or quote went missing in the file you just edited. Undo.
- **Both versions changed when I edited one** → you edited `shared/profile.js` (shared on purpose: name, email, socials). Version-specific text lives in `pm/data.js` / `design/data.js`.
- **The old combined site still shows up** → delete the four old root files (see "Upgrading" above).
- **Want a third audience someday?** Duplicate a version folder, rename it, edit its `data.js`. Done.

Enjoy! ✦
