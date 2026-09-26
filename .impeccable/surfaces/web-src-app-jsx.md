---
version: 1
slug: "web-src-app-jsx"
primary_target: "web/src/App.jsx"
related_targets: []
---

## Scope

New surface: the landing/home page of the Dutch voice tutor app (`web/src/App.jsx` + supporting components/CSS). Visitor mode: Persuade (a first-time visitor must understand the offer and press the mic). Pure UI/design exploration — no backend wiring.

## Audience, job, action, proof, constraints

- Audience: newly arrived adult Arabic-speaking immigrants in NL/Flanders, inburgering track, learning spoken Dutch under real exam/legal pressure.
- Job on this page: understand in seconds that this is voice-first spoken-Dutch practice for the inburgering exam, see their CEFR progress concept (A0→B1), and press the mic to start.
- Action: press the central mic CTA.
- Proof/content: synthetic but realistic Dutch example phrases relevant to inburgering situations (gemeente, huisarts, werk); no invented testimonials, pricing, or pass-rate claims (per PRODUCT.md).
- Constraints: Arabic UI chrome is RTL, Dutch content examples stay LTR inline — this bidirectional mixing is functional, not decorative. Warm/approachable tone, explicitly not corporate/generic edtech.

## Direction contract

**THESIS:** The page is not a hero-plus-features SaaS shell with a mic icon bolted on — it IS a voice note, the exact object this audience already sends fifty times a day on WhatsApp, scaled up to become the entire interface. It refuses the Duolingo-mascot/progress-bar default and the blue-corporate-dashboard default alike.

**OWN-WORLD (revised, palette v2):** Deep, warm lamplit-espresso ground (`#2b1710`, not corporate black, not chat-app blue) lit by one vivid coral accent (`#ff5a36`/`#b8330f`) that glows at page-center; emerald (`#2fd98a`/`#0b3b29`) held in total reserve for the live/recording state only. Physical scene forcing dark-over-light: a learner practicing quietly in the evening, phone glow in a dim room, not a bright office SaaS demo. Every "message" is a rounded voice-note bubble: waveform bar, play triangle, mm:ss timestamp, double-check read receipt. Type: a warm humanist Arabic-capable display face for RTL chrome headlines, a plain LTR sans (system Arabic/Latin pairing) for Dutch example content set inside bubbles. Corners are soft/bubble-radius throughout; no glass, no gradients-as-decoration, no generic rounded-icon tiles. Full token/rule detail lives in DESIGN.md (updated alongside this revision) — this brief only records that the palette changed and why.

**STORY:** Visitor lands RTL: Arabic headline states the exam-fluency promise in one line, a thread of 2-3 exchanged voice-note bubbles (tutor Arabic prompt → learner Dutch attempt bubble, shown mid-waveform) demonstrates the mechanism live above the fold, then the oversized central mic bubble invites them to press and start their own note. CEFR progress reads as read-receipt-style ticks (▪▪▫▫) climbing A0→B1 beneath the thread, framed as "your voice notes so far," not a gamified bar.

**FIRST VIEWPORT:** RTL page, Arabic nav/kicker top-right, one-line Arabic promise headline top area. Center-stage: a stacked voice-note thread (2 bubbles, alternating sides per RTL/LTR content direction) leading the eye down to one oversized circular mic-bubble CTA, waveform halo around it, positioned dead-center as the largest single object on the page. CEFR strip (A0→B1 as chat-style read-receipt ticks) sits directly beneath the mic CTA, small Dutch example phrase visible inside one bubble in LTR.

**FORM:** Voice-Note Companion, my grounded candidate #1 (of 7, ordered by resonance to the audience's daily WhatsApp voice-note ritual and the voice-first mechanism), offered as Impeccable's Pick against the assigned direction (Souk Signage, candidate #6) and selected by the user. Seed key: 9b2a6472.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Memorable moment

The oversized central voice-note bubble mid-waveform, with the mic CTA living inside a real voice-note object rather than beside one.

## Unresolved decisions

- Exact Arabic display/body face pairing (to be chosen during build against system-available Arabic-capable fonts from the approved list; no cliché calligraphy face).
- Whether later app screens (not this landing page) extend the voice-note-thread metaphor into the actual lesson UI — out of scope for this pass.

This build is code-led (no image generation available in this environment; stated per new-work.md's build-path fallback, not recorded to config).
