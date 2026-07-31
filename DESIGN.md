# Design

Client-supplied design guide for Pääkaupungin Putkihuolto — "premium Scandinavian service"
identity for a trust-first LVI/renovation contractor. This file records binding decisions;
follow it over generic defaults.

## Visual World

Premium Finnish home-service contractor. Professional, established, calm, modern — not a
generic plumber template, not a SaaS landing page, not an industrial/construction cliché.
Clean layouts, large whitespace, strong typographic hierarchy, rounded cards, subtle shadows.

Anti-references (avoid): generic SaaS/startup landing pages, blue-gradient contractor templates,
industrial/factory aesthetics, "cheap emergency service" feeling, tool/pipe close-ups, dirty
basements.

## Color Tokens

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` / `--color-accent` | `#38629F` | Primary buttons, links, brand highlights |
| `--color-accent-hover` | `#2f5488` (derived, ~10% darker) | Hover state for primary actions |
| `--color-dark` | `#1F2937` | Header, footer, dark CTA/emergency sections |
| `--color-bg-light` | `#F8FAFC` | Section backgrounds, cards |
| `--color-accent-tint` | `#EAF1F8` | Trust sections, info blocks, icon badges |
| `--color-accent-light` | `#0EA5E9` | Sparse use: emergency indicators, small highlights |

Keep blue as the brand color (water/trust/plumbing association) but pushed toward a premium,
desaturated Scandinavian tone rather than generic "construction blue."

## Typography

- Headings: Manrope (strong, modern, professional).
- Body: Source Sans 3 (highly readable, neutral).
- Large confident headings, short paragraphs, strong hierarchy. No walls of text, no technical
  overload above the fold.

## Layout System

Ported from this workspace's shared component conventions (see `app/lib/sectionTypography.ts`):
max-width content column (1200px for text-led sections, up to 1600px for hero/full-bleed),
rounded-2xl cards with `--color-border` hairlines and `--shadow-soft`, generous section padding
(py-20 to py-28 desktop).

## Header

Background: `--color-dark`. Nav: Palvelut, Saneeraus, Päivystys, Yritys, Yhteystiedot. Primary
CTA "Pyydä tarjous" (accent button), secondary "24/7 Päivystys" indicator/link.

## Hero

Left: eyebrow (service area), headline, supporting copy, CTA pair, trust badges. Right/below:
large professional image. Headline: "Luotettavat LVI- ja saneerauspalvelut pääkaupunkiseudulla."
Trust badges: years of experience, pääkaupunkiseutu/Etelä-Suomi, 24/7 päivystys, certified competence.

## Section Sequence (homepage)

1. Hero (white bg)
2. Trust Introduction — "Putkityöt kerralla kuntoon" (light gray bg, 3 cards: Kokemus,
   Luotettavuus, Nopeus)
3. Emergency Service — dark navy, high-contrast differentiator section, "Putkirikko tai
   vesivahinko? Saat apua nopeasti."
4. Services — white bg, 6 service cards (Putkityöt, Vuotokorjaukset, Viemärihuollot,
   Lämmitysjärjestelmät, Saneeraukset, Taloyhtiöpalvelut)
5. Two Audience Split — light blue bg, Kodin omistajille / Taloyhtiöille paths
6. Why Choose Us — white bg, 4 trust cards
7. Renovation — image section, "Kodin remontit ilman turhaa koordinointia"
8. Reviews/Trust — light gray, Google review style cards
9. About Company — dark, humanizing, no corporate language
10. Final CTA — deep navy, "Tarvitsetko luotettavan putkimiehen?"
11. Contact — quote form + contact details + map
12. Footer

## Motion

Subtle only: fade-in on scroll (reuse `.reveal` utility / `SectionFadeIn`-equivalent stagger
pattern), small card hover lift, button color transitions. No heavy animation.

## Mobile

Sticky bottom bar with call + quote CTAs (reuse `MobileStickyCta` pattern), large touch targets,
fast-loading, single-column stacking.

## Imagery

Unsplash stock photography (demo placeholder, see PRODUCT.md Evidence on Hand): professional LVI
technician in a modern Finnish home, heating system inspection, bathroom renovation, technician
with homeowner. Avoid dirty pipes, tool close-ups, industrial warehouses.
