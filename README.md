# Emmanuel Martine Charles — Portfolio

Responsive multi-page portfolio built with semantic HTML, CSS, and vanilla JavaScript.

## Pages

`index.html` — introduction and featured work; `about.html` — experience; `projects.html` — live previews; `skills.html` — capabilities; `contact.html` — contact details and inquiry form.

## Personal assets

Add the supplied files to `assets/images/profile.jpg`, `assets/images/og-image.jpg`, optional provider logos in `assets/images/`, and `assets/docs/Emmanuel_Martine_Charles_CV.pdf`. The site falls back to a polished initials avatar if the profile photo is missing.

## Contact form

The form is ready for Formspree. Replace the placeholder action in `contact.html` with `https://formspree.io/f/YOUR_FORM_ID`, create a free form at [formspree.io](https://formspree.io), and confirm `vanadizyemachazy@gmail.com`. EmailJS or a custom backend can also be substituted.

## Updating projects

Project cards are repeated in `index.html` and `projects.html`. The cards now use the real project URLs in their iframe previews and in their “Visit website” buttons. If a website sends `X-Frame-Options: sameorigin`, browsers will block only the embedded frame; the live button still opens the real site.

## Preview

Open `index.html` directly, or serve this folder with any static server. No build step or dependency installation is required.
