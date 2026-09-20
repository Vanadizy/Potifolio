# Emmanuel Martine Charles Portfolio

This repository contains Emmanuel Martine Charles's personal portfolio website. It presents his background as a Computer Science graduate, software developer, mobile application developer, web designer, and IT support professional in Tanzania.

The website is designed as a professional personal-brand site with a clean CV-inspired layout, liquid-glass cards, responsive spacing, soft animations, project previews, contact options, and social links.

## Website overview

The site is a static multi-page website. It does not require a framework, database, build tool, or package installation.

- `index.html` is the landing page. It contains the hero introduction, profile image, featured projects, project links, and the Google Maps location section.
- `about.html` explains Emmanuel's education, work history, experience, and professional approach.
- `projects.html` displays selected projects with live website iframe previews, descriptions, external links, and a project inquiry form.
- `skills.html` presents core technical capabilities such as mobile development, web design, programming, databases, networking, systems, UI, and software engineering.
- `contact.html` contains phone numbers, WhatsApp, email, location, working hours, CV download, and a contact form.

## Shared files

- `styles.css` contains the complete visual system, responsive layouts, colors, typography, cards, forms, map layout, mobile navigation, and animations.
- `script.js` controls the mobile menu, search navigation, scroll reveal effects, social icons, provider logos, project inquiry form, footer project links, copyright text, and homepage map section.

The skills page also adds PHP, Flutter, React, MySQL, and PostgreSQL logos using the Devicon CDN. MySQL and PostgreSQL descriptions cover both GUI tools and command-line workflows.
- `assets/` stores images, the CV, and local preview documents.

## Personal assets

The supplied assets currently include:

- `assets/images/profile.jpeg` — Emmanuel's profile image.
- `assets/images/og-image.jpeg` — social sharing image used by the homepage metadata.
- `assets/images/profile2.png` and `assets/images/og-image2.png` — optional alternate images.
- `assets/images/logo-vodacom.png` — Vodacom logo used in the contact details.
- `assets/images/logo-halotel.png` — Halotel logo used in the contact details.
- `assets/docs/Emmanuel_Martine_Charles_CV.pdf` — downloadable CV.

To replace an image, keep the same filename or update the matching path in `index.html`, `styles.css`, or `script.js`.

## Projects and previews

The featured projects are:

1. Panga Leo — `https://pangaleo.co.tz`
2. KacheHub — `https://kachehub.com`
3. Malenya Pharmacy — `https://malenyapharmacy.com`

The project cards use the real website URLs in iframe previews and in the “Visit website” buttons. Some websites may block iframe embedding with browser security headers such as `X-Frame-Options`. That restriction is controlled by the external website; the direct project buttons still open the live websites.

## Contact forms

Both the contact form and project inquiry form use Formspree placeholders. Replace `YOUR_FORM_ID` in `contact.html` and `script.js` with the ID from a Formspree form:

```html
https://formspree.io/f/YOUR_FORM_ID
```

Create a form at [formspree.io](https://formspree.io), set the receiving email to `vanadizyemachazy@gmail.com`, and test both forms. EmailJS or a custom backend can be used instead if preferred.

## Location and availability

The homepage and contact page show:

- Location: 5 Mori St, Mwenge, Dar es Salaam, Tanzania.
- Working hours: 24 hours daily.
- A Google Maps search link and embedded map are included on the homepage.

## Social media

The footer includes links to TikTok, Instagram, Facebook, YouTube, LinkedIn, GitHub, WhatsApp, and email. The same complete social set is added across every page.

## Running the website

The simplest option is to open `index.html` in a browser. For more reliable iframe, map, and local asset behavior, run a local static server from the project folder:

```bash
npx serve .
```

Then open the localhost URL shown in the terminal. There is no build step.
