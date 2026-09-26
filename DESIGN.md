---
name: Sawti (صوتي)
description: A voice-first Dutch tutor for Arabic speakers, built as an oversized WhatsApp-style voice note glowing on a warm, lamplit dark ground.
colors:
  ground: "#2b1710"
  ground-deep: "#190d08"
  paper: "#f7ead9"
  cream-bubble: "#fff6ea"
  text-soft: "#c7a88d"
  ink: "#2c1c12"
  ink-soft: "#6b5644"
  line: "rgba(247, 234, 217, 0.14)"
  line-on-light: "rgba(44, 28, 18, 0.12)"
  coral: "#ff5a36"
  coral-deep: "#b8330f"
  coral-tint: "#ffb59c"
  emerald: "#2fd98a"
  emerald-deep: "#0b3b29"
  emerald-tint: "#b8f2d9"
typography:
  display:
    fontFamily: "IBM Plex Sans Arabic, IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 3.15rem)"
    fontWeight: 700
    lineHeight: 1.28
    letterSpacing: "normal"
  body:
    fontFamily: "IBM Plex Sans Arabic, IBM Plex Sans, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Sans Arabic, IBM Plex Sans, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  latin-accent:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.01em"
rounded:
  sm: "6px"
  md: "12px"
  lg: "22px"
  pill: "999px"
  circle: "50%"
spacing:
  xs: "8px"
  sm: "14px"
  md: "20px"
  lg: "32px"
  xl: "48px"
components:
  mic-cta:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.ground}"
    rounded: "{rounded.circle}"
    size: "clamp(132px, 18vw, 176px)"
  mic-cta-recording:
    backgroundColor: "{colors.emerald}"
    textColor: "{colors.ground}"
    rounded: "{rounded.circle}"
    size: "clamp(132px, 18vw, 176px)"
  bubble-tutor:
    backgroundColor: "{colors.coral-deep}"
    textColor: "{colors.paper}"
    rounded: "{rounded.lg}"
    padding: "13px 17px"
  bubble-learner:
    backgroundColor: "{colors.cream-bubble}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "13px 17px"
  cefr-chip-done:
    backgroundColor: "{colors.coral-deep}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "9px 16px"
  cefr-chip-current:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.emerald-deep}"
    rounded: "{rounded.pill}"
    padding: "9px 16px"
  cefr-chip-locked:
    backgroundColor: "transparent"
    textColor: "{colors.text-soft}"
    rounded: "{rounded.pill}"
    padding: "9px 16px"
---

# Design System: Sawti (صوتي)

## Overview

**Creative North Star: "The Voice Note, Glowing After Dark"**

Sawti's landing page refuses the two defaults its category ships by reflex: the gamified-mascot language app and the blue corporate-SaaS dashboard with a mic icon bolted onto a hero. Instead, the page IS a voice note — the exact object Arabic-speaking WhatsApp users already send fifty times a day — enlarged until it becomes the whole interface. Two real message bubbles (a tutor's Arabic prompt, a learner's Dutch reply) form a live conversation thread above the fold, leading the eye down to one oversized circular mic button that glows like a lit object against a dark, lamplit ground — the single largest, most saturated thing on the page. CEFR progress (A0→B1) reads as a row of read-receipt-style chips rather than a gamified progress bar — "your voice notes so far," not points.

The scene this palette answers to: a learner practicing quietly in the evening, phone screen lighting a dim room after a full day of work or family duties — not a bright office SaaS demo. A deep, warm espresso-brown ground carries that scene, lit by one vivid coral accent glowing at page-center like the phone's own light. One color is held in total reserve: emerald appears nowhere except the live-recording state, so its appearance always means "this is listening right now."

**Key Characteristics:**
- A dark, warm ("lamplit," not corporate-black) ground makes the coral mic CTA read as a genuinely glowing object, not a flat colored circle.
- Chat-bubble vocabulary (waveform, timestamp, read-receipt tick) carries the entire visual system, not just the demo thread.
- RTL is structural, not mirrored decoration: Arabic chrome flows right-to-left natively; Dutch phrases are isolated LTR islands (`dir="ltr" lang="nl"`) inside the RTL flow.
- Emerald is a state color, not a palette color — it exists only while something is actively being recorded.
- No kickers, no icon-tile feature grids, no gamification chrome (badges, streaks, confetti).

## Colors

A deep, warm espresso-brown ground carries the page; one vivid coral accent glows at its center; emerald is held back entirely for the live-recording moment.

### Primary
- **Coral** (`#ff5a36`): the brand's peak-saturation accent, reserved for icon-only surfaces — the idle mic CTA and the nav brand mark. Its glyph sits in Ground (dark-on-bright) rather than Paper, because Coral itself is too light to hold text/icon contrast at the 3:1 non-text floor with a light glyph.
- **Coral Deep** (`#b8330f`): the same hue, darkened, used wherever the color sits *behind body text* (tutor bubble, "done" CEFR chip, nav-link hover text on the dark ground) — the darker step exists specifically to hold ≥4.5:1 contrast with Paper text on top of it, or with the dark Ground behind it.
- **Coral Tint** (`#ffb59c`): the idle mic CTA's halo rings, the learner bubble's play-button chip and waveform bars, hover underlines.

### Secondary
- **Emerald** (`#2fd98a`) / **Emerald Deep** (`#0b3b29`) / **Emerald Tint** (`#b8f2d9`): the live-recording accent. Appears only on the mic CTA and its pulse rings while `is-recording` is true, on the current-level CEFR chip (the one state that is "live" in the CEFR sense too), and as the keyboard focus ring. Never used decoratively or at rest.

### Neutral
- **Ground** (`#2b1710`) / **Ground Deep** (`#190d08`): the page background — a warm, near-black espresso-brown, never a cold or corporate black. Ground Deep is reserved for a deeper vignette step, not yet used on a shipped element.
- **Paper** (`#f7ead9`): the page's primary light text (headline, brand name) and the light text used inside saturated fills (tutor bubble, "done" chip, mic CTA's stop-badge background).
- **Text Soft** (`#c7a88d`): secondary text directly on the dark ground (sub-headline, mic label, CEFR caption, footer, nav links, the locked CEFR chip) — a warm tan, never gray.
- **Cream Bubble** (`#fff6ea`): the learner's (outgoing) message bubble — a light card that pops forward off the dark ground, the way an outgoing chat bubble should read as "yours."
- **Ink** (`#2c1c12`) / **Ink Soft** (`#6b5644`): text colors used *only inside the light learner bubble card* — the one place on the page where a light background calls for dark text again.
- **Line** (`rgba(247, 234, 217, 0.14)`): hairlines sitting directly on the dark ground (footer rule, the locked CEFR chip's border).
- **Line On Light** (`rgba(44, 28, 18, 0.12)`): the one hairline that sits on a light surface instead — the learner bubble's own edge.

### Named Rules
**The Emerald Reservation Rule.** Emerald never appears at rest. Its only triggers are the live-recording state (`.mic-cta.is-recording`), the single CEFR level currently in progress, and the keyboard focus ring. If a design adds emerald anywhere else, it has broken the rule that gives the color meaning.

**The Bright/Deep Split Rule.** Coral ships in two roles that are never interchangeable: Coral (bright) is for a surface that only ever holds an icon or glyph, rendered in Ground so it reads as a dark mark on a glowing badge. Coral Deep is for any surface that holds body text, rendered in Paper. Putting body text on bright Coral, or an icon in Paper on bright Coral, both fail contrast — this split exists because the design already failed that exact check once during the light-mode build and had to be fixed.

**The Two-Surface Text Rule.** Only two places on the page use dark-on-light text (Ink / Ink Soft): inside the learner bubble card. Everywhere else is light-on-dark (Paper / Text Soft directly on Ground, or Paper on a saturated fill). A new element should default to light-on-dark unless it is, like the learner bubble, a light card floating on the ground.

## Typography

**Display/Body Font:** IBM Plex Sans Arabic (with IBM Plex Sans, system-ui fallback)
**Latin Accent Font:** IBM Plex Sans (for Dutch phrases embedded in RTL flow)

**Character:** One warm, humanist superfamily pairing carries the whole page — IBM Plex Sans Arabic for all Arabic chrome and body copy, IBM Plex Sans for the Dutch example phrases, so the two scripts feel like siblings rather than a translated-afterthought font swap.

### Hierarchy
- **Display** (700, `clamp(2rem, 4.6vw, 3.15rem)`, 1.28 line-height): the one-line Arabic headline promise, set in Paper on the dark ground. Capped well under 6rem; never spans more than 3 lines at 15ch max-width.
- **Body** (400, 0.95rem, 1.55 line-height): bubble captions, the sub-headline.
- **Label** (500, 0.85rem, 1.4 line-height): nav links, the CEFR caption, the mic idle/recording label.
- **Latin Accent** (600, 0.95rem, 1.4 line-height, -0.01em tracking): the Dutch phrase inside a learner bubble — set apart by weight and the Latin face, always wrapped `dir="ltr" lang="nl"` so bidi punctuation never scrambles.

### Named Rules
**The Isolated Script Rule.** Any Dutch (Latin-script) content inside the RTL page is wrapped in its own `dir="ltr" lang="nl"` span. Relying on the browser's implicit bidi algorithm for embedded Latin phrases is what causes punctuation and word order to scramble; isolation is not optional here.

## Layout

Single-column, center-aligned hero capped at 720px, sitting inside a full-height flex page (`nav` → `hero` → `foot`, footer pinned via `margin-top: auto`). The RTL document direction drives every row: in flex/grid rows, the first DOM child lands at the *right* edge (nav brand, tutor bubble's play button, the CEFR A0 chip), not the left — this is native RTL flow, not a mirrored LTR layout. The conversation thread is a narrow 480px column of independently-aligned bubbles (`align-self: flex-start` for tutor/incoming, `flex-end` for learner/outgoing). Vertical rhythm scales with `clamp()` at every major gap (hero padding, thread margin, mic-stage margin, CEFR margin) rather than fixed breakpoint jumps, so the composition holds between the comp-width and common desktop widths (1280–1600px) without snapping. Below 560px, CEFR chips drop their text label and keep only the A0–B1 code, and the nav wraps if the two link labels don't fit their row.

## Elevation & Depth

The dark ground itself is the primary depth device: a light card (the learner bubble) or a saturated glowing object (the tutor bubble, the mic CTA) reads as "raised" simply by being brighter than its surroundings, before any shadow is added. Shadows layer on top of that for two different jobs. The mic CTA and tutor bubble get a **glow** — a soft, wide, hue-matched shadow that reads as light being cast, plus inset highlight/shadow pairs that model a glossy, convex surface. The learner bubble gets a **grounding shadow** instead — a neutral near-black shadow, because a light neutral card doesn't need a colored glow to read as lifted off a dark field.

### Shadow Vocabulary
- **Bubble (tutor)** (`box-shadow: 0 14px 28px -12px rgba(255, 90, 54, 0.4)`): a coral glow under the incoming bubble.
- **Bubble (learner)** (`box-shadow: 0 14px 28px -14px rgba(0, 0, 0, 0.5)`): a neutral grounding shadow under the light cream card.
- **Mic CTA (idle)** (`box-shadow: 0 22px 50px -16px rgba(255, 90, 54, 0.6), inset 0 3px 0 rgba(255, 255, 255, 0.2), inset 0 -7px 12px rgba(0, 0, 0, 0.2)`): a wide coral glow plus a glossy top highlight and a darker inset base, so the button reads as a convex, lit object rather than a flat fill.
- **Mic CTA (recording)** (`box-shadow: 0 22px 54px -14px rgba(47, 217, 138, 0.65), inset 0 3px 0 rgba(255, 255, 255, 0.16), inset 0 -7px 12px rgba(0, 0, 0, 0.24)`): the same glossy construction, re-tinted emerald.

### Named Rules
**The Two-Object Rule.** Only the message bubbles and the mic CTA cast shadows. Nav, chips, and footer stay flat against the ground, so the shadow vocabulary keeps meaning "this is a physical, lit or lifted object" instead of decorating everything.

**The Glow-Versus-Ground Rule.** A saturated fill (coral, emerald) gets a hue-matched glow shadow. A light neutral card (the learner bubble) gets a neutral near-black grounding shadow instead. Never hue-match a shadow to a light neutral surface — it reads as a color cast, not as depth.

## Shapes

Soft, bubble-radius geometry throughout — no sharp corners anywhere on the page. Message bubbles use a 22px radius with one corner pinched to 6px on the side nearest their "tail" (bottom-end for the tutor bubble, bottom-start for the learner bubble), a direct nod to chat-bubble tails without drawing a literal pointed tail shape. The mic CTA and its halo rings are true circles. CEFR chips and the nav brand mark step down to smaller radii (999px pill, 12px rounded-square) so the radius scale reads as one family at different sizes rather than mismatched shapes.

## Components

### Buttons (Mic CTA)
- **Shape:** true circle, `clamp(132px, 18vw, 176px)` diameter — deliberately the single largest, most luminous object on the page.
- **Idle:** Coral fill, Ground-colored icon (dark glyph on the bright badge), a two-layer static halo ring (`coral-tint` border at 0.5/0.28 opacity), a glossy convex shadow (see Elevation & Depth).
- **Recording:** fill swaps to Emerald, the mic icon is replaced by Ground-colored animated live-waveform bars, the halo rings animate an outward pulse (`mic-pulse`, staggered 0.6s between the two rings) tinted Emerald Tint, and a small Paper-on-Emerald-Deep stop-badge appears at the bottom-inline-end corner.
- **Hover/Active:** scales to 1.035 on hover, 0.96 on press, via `cubic-bezier(0.16, 1, 0.3, 1)` — a real tactile press, not just a color change.

### Chips (CEFR levels)
- **Style:** pill radius, 1.5px border by default.
- **Done:** Coral Deep fill, Paper text, a small check icon.
- **Current:** Paper fill (the one other bright chip on the page, deliberately — "the level you're actually working on" earns the pop), 2px Emerald border, Emerald Deep text, a pulsing Emerald dot badge at the top-inline-end corner.
- **Locked:** transparent fill, Text Soft at 0.72 opacity against the bare dark ground — the one intentionally reduced-contrast state on the page, matching standard disabled/future-state treatment.

### Cards / Containers (Message bubbles)
- **Corner Style:** 22px radius, 6px on the tail-side corner.
- **Background:** Coral Deep (tutor/incoming, glowing) or Cream Bubble (learner/outgoing, a light card on the dark ground).
- **Shadow Strategy:** see Elevation & Depth — glow for the coral bubble, grounding shadow for the cream bubble.
- **Border:** none on the tutor bubble; 1px `{colors.line-on-light}` on the learner bubble (it is the one light-surface card, so it takes the dark-tinted hairline, not the page's light one).
- **Internal Padding:** 13px 17px, grid-laid (play button, waveform, duration, tick on row one; caption spans both columns on row two).

### Navigation
- Flex row (wraps if needed), brand mark + name at the reading-start side (right, under RTL), two text links at the reading-end side. Brand mark: Coral fill, Ground-colored icon. Links default to Text Soft, hover to Coral (bright, legible directly against the dark ground) with a Coral Tint underline fading in.

### Signature Component: Voice-Note Bubble
The bubble is the page's one non-generic custom component: a play/pause toggle (real, if simulated — clicking it plays a bar-scale animation for the bubble's own stated duration, then auto-stops), a waveform of fixed-height bars, a tabular-numeral timestamp explicitly isolated `dir="ltr"`, a read-receipt check tick, and a caption line that either shows Arabic instruction text or an isolated Dutch phrase in the Latin Accent style. Every other "message-shaped" element on the page (the CEFR done/current chips) borrows this same visual grammar rather than inventing a second one.

## Do's and Don'ts

### Do:
- **Do** keep Emerald exclusive to the live-recording state, the single in-progress CEFR level, and the focus ring — see The Emerald Reservation Rule.
- **Do** put icon-only content on bright Coral in Ground, and body text on Coral Deep in Paper — never the reverse — see The Bright/Deep Split Rule.
- **Do** default new text to light-on-dark (Paper/Text Soft on Ground) and reserve dark-on-light (Ink/Ink Soft) for content inside a light card like the learner bubble — see The Two-Surface Text Rule.
- **Do** give a saturated fill a hue-matched glow shadow and a light neutral card a neutral grounding shadow — see The Glow-Versus-Ground Rule.
- **Do** wrap any Latin-script (Dutch) text embedded in the RTL flow in `dir="ltr" lang="nl"` — see The Isolated Script Rule.

### Don't:
- **Don't** add a kicker/eyebrow label above the headline, a features-grid of icon+heading+text cards, or gamification chrome (streaks, badges, confetti, points) — the brief explicitly rejected generic edtech and gamified-app defaults.
- **Don't** default to cream-background-plus-calligraphy for "an Arabic app" — that rendering was named and rejected during this build's direction round in favor of the audience's actual daily voice-note ritual.
- **Don't** treat "dark mode" as cold or corporate here — Ground is a warm espresso-brown, not black, and the palette's job is to feel like a lit phone screen in a dim room, not a tech dashboard.
- **Don't** apply opacity-based dimming to text that needs to stay ≥4.5:1 (this caused a real contrast failure on the tutor bubble during the first, light-mode build; fixed then, and the Bright/Deep Split Rule exists so the new dark palette doesn't repeat it).
- **Don't** mirror the layout as if it were LTR-flipped; RTL here is native document flow (`dir="rtl"` on `<html>`), so first-DOM-child-at-the-right is the correct, unforced behavior of flex/grid rows.
