# Nadia Islam Dipa | Developer Portfolio

A single-page portfolio built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS v4**.
Dark mode by default (light mode available), smooth scrolling, a section-aware navbar and subtle Framer Motion animations.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Check that the production build passes before you deploy:

```bash
npm run build
```

## Add your images

| File | Purpose |
|---|---|
| `public/profile.jpg` | Your photo in the hero (shown as a circle, square works best) |
| `public/projects/fit-log.png` | Fit Log screenshot (16:9, e.g. 1280x720) |
| `public/projects/bazar-dor.png` | Bazar Dor screenshot |
| `public/projects/dev-stack-builder.png` | Dev Stack Builder screenshot |

If a file is missing, a clean placeholder is shown instead of a broken image.

## Edit your content

| What | Where |
|---|---|
| Name, intro, bio, email, social links, education | `src/data/site.ts` |
| Projects (add, remove, replace) | `src/data/projects.ts` |
| Skills and their icons | `src/data/skills.ts` |
| Colors (light and dark) | `src/app/globals.css` (the `:root` and `.dark` blocks) |

## Contact form (Resend)

The form posts to `/api/contact`, which sends the email with Resend.

1. Make a free account at <https://resend.com> and create an API key.
2. Locally: `copy .env.example .env.local` (Windows) and paste your key after `RESEND_API_KEY=`. Restart `npm run dev`.
3. On Netlify: **Site configuration > Environment variables**, add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, then redeploy.

`onboarding@resend.dev` only delivers to the email your Resend account was created with. Until `RESEND_API_KEY` is set, the form shows an error message when someone submits.

## Put it on GitHub

```bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/NadiaDipa/portfolio.git
git push -u origin main
```

(Create an empty repo named `portfolio` on GitHub first.)

## Deploy on Netlify

1. Log in at <https://app.netlify.com> and click **Add new project > Import an existing project**.
2. Choose **GitHub** and select the `portfolio` repo.
3. Netlify detects Next.js on its own. Leave the build settings as they are and click **Deploy**.
4. When it finishes, open your site URL and check every section.
5. Optional: set `NEXT_PUBLIC_SITE_URL` to your final URL in **Site configuration > Environment variables** (used for SEO and social previews), then redeploy.

Every `git push` to `main` redeploys the site automatically.

## Project structure

```
src/
  app/
    layout.tsx        Inter font, SEO + Open Graph metadata, theme provider
    page.tsx          Composes all sections
    globals.css       Tailwind + light/dark color tokens
  components/         Navbar, Hero, About, Skills, SkillCard, Projects, ProjectCard,
                      Footer + small helpers (FadeIn, SafeImage, ScrollProgress, ...)
  data/               site.ts, projects.ts, skills.ts
```
