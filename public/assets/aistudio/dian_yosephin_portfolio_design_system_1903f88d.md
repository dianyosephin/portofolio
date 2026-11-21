---
name: "Dian Yosephin Editorial Scrapbook"
description: "Warm editorial magazine and aesthetic scrapbook design system for Dian Yosephin's personal portfolio, pairing linen paper surfaces and terracotta accents with bold Syne display type and Caveat handwritten notes."
---

## Overview

This design system powers the personal portfolio of **Dian Yosephin** (S1 Teknik Informatika student at ITPLN, Event Coordinator, AI & Data Science Enthusiast, and former OSIS Leader). Designed for academic recruiters, tech recruiters, event partners, and project collaborators, the visual language blends **Warm Editorial Magazine** structure with **Aesthetic Scrapbook** tactility—clean warm linen surfaces, high-contrast condensed display headlines, handwritten script annotations with subtle heart/star doodles, polaroid photo frames, and crisp rounded cards.

## Colors

The palette is anchored in warm paper tones (`#F5F2EC` linen ground, `#FFFFFF` crisp card stock, `#EFEBE4` soft sand spreads) paired with deep charcoal ink (`#1A1817`) and muted taupe (`#635E59`). Warm terracotta (`#C85A32`) serves as the signature editorial highlight, while deeper terracotta (`#A23E18`) handles high-contrast interactive fills with white text.

```yaml
colors:
  paper: "#F5F2EC"
  surface: "#FFFFFF"
  surface-alt: "#EFEBE4"
  ink-primary: "#1A1817"
  ink-soft: "#635E59"
  accent-rust: "#C85A32"
  accent-rust-soft: "#FFEDE8"
  accent-border: "#D6CFCE"
  primary: "#A23E18"
  on-primary: "#FFFFFF"
  on-paper: "#1A1817"
  on-surface: "#1A1817"
  on-surface-alt: "#1A1817"
  outline: "#D6CFCE"
```

## Typography

A three-font editorial hierarchy balances magazine authority with personal warmth:
- **Syne** (700/800, uppercase, tight tracking) drives monumental magazine mastheads and section titles.
- **Plus Jakarta Sans** (400/500/600/700) provides crisp, legible body copy, metadata pills, and navigation labels.
- **Caveat** (700) delivers handwritten scrapbook notes, margin callouts, and sticker annotations.

Every display and headline level above `32px` includes a `-mobile` counterpart.

```yaml
typography:
  display-xl:
    fontFamily: "Syne"
    fontSize: 84px
    fontWeight: 800
    lineHeight: 88px
    letterSpacing: -2px
  display-xl-mobile:
    fontFamily: "Syne"
    fontSize: 32px
    fontWeight: 800
    lineHeight: 36px
    letterSpacing: -0.5px
  display-lg:
    fontFamily: "Syne"
    fontSize: 56px
    fontWeight: 800
    lineHeight: 60px
    letterSpacing: -1.5px
  display-lg-mobile:
    fontFamily: "Syne"
    fontSize: 32px
    fontWeight: 800
    lineHeight: 36px
    letterSpacing: -0.5px
  headline-lg:
    fontFamily: "Syne"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 42px
    letterSpacing: -0.75px
  headline-lg-mobile:
    fontFamily: "Syne"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 34px
    letterSpacing: -0.5px
  headline-md:
    fontFamily: "Syne"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 30px
    letterSpacing: -0.25px
  title-md:
    fontFamily: "Syne"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 24px
    letterSpacing: -0.2px
  hand-lg:
    fontFamily: "Caveat"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 38px
    letterSpacing: 0px
  hand-md:
    fontFamily: "Caveat"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 28px
    letterSpacing: 0px
  body-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0px
  body-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 26px
    letterSpacing: 0px
  body-sm:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0px
  label-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
    letterSpacing: 0.5px
  label-sm:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 16px
    letterSpacing: 0.75px
```

## Layout & Spacing

Desktop layouts use a **Fixed-Max-Width Grid** (`1200px` container) with 12-column editorial splits, generous section breathing room (`64px`–`96px`), and responsive collapse to single-column stacks on mobile (`375px`–`768px`). Spacing follows an `8px` base unit with a `4px` micro step.

```yaml
spacing:
  gutter-xs: 4px
  gutter-sm: 8px
  gutter-md: 16px
  gutter-lg: 24px
  gutter-xl: 32px
  section: 64px
  page-margin: 24px
```

## Elevation & Depth

Hierarchy is conveyed through tactile paper layering rather than heavy drop shadows. Primary cards sit on crisp `#FFFFFF` against the `#F5F2EC` linen ground, framed by a `1px solid #D6CFCE` hairline border and subtle ambient shadow (`0 4px 16px rgba(26,24,23,0.04)`). Feature spreads use the `#EFEBE4` soft sand surface, while Polaroid gallery frames and sticky notes use slightly deeper paper shadows (`0 10px 30px rgba(26,24,23,0.06)`) and gentle `-2deg` to `2deg` tilts.

## Shapes

Clean rounded corners give editorial cards a friendly, modern feel while Polaroid photo frames keep tighter inner corners. Pills use full rounding for tags, stats, and contact actions.

```yaml
rounded:
  sm: 6px
  DEFAULT: 12px
  md: 16px
  lg: 20px
  xl: 28px
  full: 9999px
```

## Motion & Micro-interaction

Motion is tactile and restrained, evoking physical paper lifting slightly off a desk. Interactive cards lift `4px` on hover; links and pill buttons shift smoothly within `180ms`. All animations respect `prefers-reduced-motion` and animate only `transform` and `opacity`.

```yaml
motion:
  state-change:
    duration: 180ms
    delay: 0ms
    timingFunction: ease-out
  card-lift:
    duration: 240ms
    delay: 0ms
    timingFunction: cubic-bezier(0.2, 0, 0, 1)
  marquee-scroll:
    duration: 24000ms
    delay: 0ms
    timingFunction: linear
```

## Voice & Content Strategy

The voice is **warm, articulate, and achievement-oriented**, blending Indonesian and English naturally as a modern Informatics student and student leader. Section headings use uppercase `Syne` display type paired with lowercase or sentence-case `Caveat` handwritten annotations (`get to know me ♡`, `things I've executed ✦`). Metrics and dates (`14–15 Juli 2025`, `94.39`, `100%`) are concrete and verifiable.

## Components

Component implementations live as individual HTML sticker sheet files in
`components/`. Each file contains the canonical, styled HTML components with
`<!-- COMPONENT: name -->` comment markers. Read each file before use.

- **Button** → `@components/button.html`: `button-primary`, `button-icon`, `button-with-icon`
- **Card** → `@components/card.html`: `card-elevated`, `card-action`, `card-interactive`, `card-interactive-2`
- **Chip** → `@components/chip.html`: `chip-action`, `chip-input`, `chip-with-icon`
- **Typography** → `@components/typography.html`: `typography-display`, `typography-body`, `typography-label`
