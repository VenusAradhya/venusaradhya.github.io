# venusaradhya.github.io

Personal portfolio site — **https://venusaradhya.github.io**

## Structure

- **index.html** — Homepage with large typographic hero, inline pill buttons for Research/Advocacy/About, Photography and Writing cards, and a contact section.
- **about.html** — Bio, photo placeholder, education, current role.
- **research.html** — Research projects in a bento grid with Current / Archive tabs.
- **advocacy.html** — Advocacy initiatives and how to get involved.
- **photography.html** — Photo grid (replace placeholders with your images).
- **writing.html** — Essays, op-eds, and long-form writing.
- **styles.css** — All styles: cream header, Poppins semi-bold, dark starfield background, pill buttons, cards.
- **script.js** — Footer year, mobile nav toggle.
- **_config.yml** — Minimal GitHub Pages config.
- **.nojekyll** — Tells GitHub Pages to serve static files directly (no Jekyll build).

## Getting it online

1. Push all files to the `main` branch of your `venusaradhya.github.io` repo.
2. Go to **Settings → Pages** → Source: **Deploy from a branch** → Branch: **main**, folder: **/ (root)**.
3. Make sure **.nojekyll** exists in the root (empty file, no extension).
4. Site will be live at **https://venusaradhya.github.io** within a few minutes.

## Customize

- **Contact button image**: Create an `images/` folder, add a photo named `contact-hover.jpg` — this appears when hovering the Contact button in the header.
- **About photo**: Replace the "Your photo" placeholder in `about.html` with `<img src="images/you.jpg" alt="Venus Aradhya" />`.
- **Photography**: Put `<img src="photos/name.jpg" alt="...">` inside each `.photo-cell` in `photography.html`.
- **Research/Advocacy/Writing**: Edit the card content and links directly in each HTML file.
- **Contact links**: Update email, LinkedIn, GitHub, Twitter in `index.html`.
- **Theme colors**: Edit `:root` variables in `styles.css` to tweak colors.

## Adding images

Create an `images/` folder in your repo root and add:
- `contact-hover.jpg` — shown on hover over the Contact button (any atmospheric photo works)
- `you.jpg` — your photo for the About page
- Any photos for the Photography grid

No build step required — edit, commit, push.
