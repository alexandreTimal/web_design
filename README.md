# HW2 - Personal Brand Portfolio + CV (extended)

## Chosen scenario

Personal Brand Portfolio + CV - a small multi-page site presenting my background, projects, contact form, and interactive demos.

## HW1 pages (kept)

- `index.html` - home page with intro, featured projects and latest updates.
- `about.html` - content page with profile, experience, education and skills.
- `data.html` - data page with a real project portfolio table (5 rows, headers with scope, caption).
- `contact.html` - contact form page (validated client-side with JavaScript).
- `styles.css` - main external stylesheet used by all pages.

## HW2 additions

- `specificity.html` + `specificity.txt` - CSS specificity exercise with answers.
- `card.html` + `card.css` - business card page (image, name, role, email, GitHub) using element/class/id selectors.
- `overview.html` - responsive profile/projects overview page using CSS Grid + Flexbox + media queries (mobile-first), with 4+ project cards including one styled differently (`.featured`).
- `chatbot.html` + `chatbot.css` + `chatbot.js` - interactive chatbot with question bank (array of objects), dynamic DOM updates and form submit handling.
- `universities.html` + `universities.js` - extra page using Fetch API (carry-over from Lab 10).
- `figma-auth.css` + `assets/figma-auth.svg` - exported CSS and screenshot from the Figma authentication frame (two-panel layout, reusable button components).

## CSS placement (demonstrated)

- External: `styles.css` linked from every page.
- Internal: `<style>` block in `index.html` (.highlight) and `overview.html` (full grid layout).
- Inline: inline `style="..."` on the latest-updates paragraph in `index.html`.

## Selectors used

- Element, class, id selectors (across all pages).
- `:nth-child(odd)` / `:nth-child(even)` in `styles.css` for sections and table rows.
- Attribute selector example in `specificity.html`.

## Navigation

Same menu on every page: Home, About, Projects Data, Contact, Universities, Card, Overview, Chatbot.

## Validation

HTML and CSS validated with the W3C validator (https://validator.w3.org/, https://jigsaw.w3.org/css-validator/).

## Bonus

- Skip-link for keyboard accessibility on every page.
- Responsive nav and grid via mobile-first media queries on `overview.html`.
- Client-side form validation on `contact.html` (Lab 9 carry-over).

## Known limitations

- Contact form is static (no backend).
- Universities page uses an HTTP-only public API; if served via HTTPS the browser may block mixed content (open via `file://` or local HTTP server).
