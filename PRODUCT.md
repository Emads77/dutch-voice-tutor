# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite + React for the frontend, in its own `/web` folder. The existing Express server (`server.js`, repo root) is a separate, untouched skeleton for now — this phase is frontend/UI only, no wiring between them yet.

## Users

Primary users are newly arrived adult Arabic-speaking immigrants in the Netherlands/Flanders who are on the inburgering (civic integration) track. They are learning Dutch under practical/legal pressure — residency, work, and exam requirements — not as a casual hobby.

## Product Purpose

A voice-first Dutch tutor that helps Arabic speakers build spoken Dutch fluency for real inburgering situations and the exam's spoken-proficiency component. Success means learners can speak and be understood in real NL/Flanders contexts (gemeente, huisarts, werk) and pass the oral requirement, not just recognize vocabulary on a screen.

## Positioning

Voice-first, exam-aligned spoken fluency practice — distinct from text/vocab-drill apps (Duolingo, Babbel) that don't train or assess actual spoken output against inburgering's oral proficiency expectations.

## Operating Context

- Learners interact primarily by speaking into a mic, not typing/tapping through drills.
- UI chrome (navigation, labels, instructions) defaults to Arabic (RTL) with an English (LTR) toggle for chrome/copy; Dutch appears as the target-language content being learned/practiced (LTR) in both chrome languages, so the interface mixes RTL and LTR intentionally regardless of chrome language.
- Progress is tracked against CEFR levels (A0 → B1), the same scale referenced by inburgering requirements.
- A visitor can start practicing (press the mic) with no account. An account is only needed to save progress across sessions/devices, and creating one currently offers a 1-day free trial concept in the UI copy (no pricing model or paid tiers defined yet — do not invent one).

## Capabilities and Constraints

- This phase is UI/design exploration only: no backend wiring, no real speech recognition/API integration, and no real authentication yet — the login/signup modal is UI-only and says so explicitly rather than faking success.
- Frontend stack: Vite + React, built in `/web`. Client-side only: language (Arabic/English) and page (home / "why Sawti") are local React state plus a `#/why` hash route, no router dependency, no persistence across reloads.
- Mixed-direction layout (Arabic RTL chrome + Dutch LTR content) is a functional requirement of the design, not just a visual flourish, and must hold in both chrome languages.
- A secondary "Why Sawti" page exists to address the emotional case for the product (repeated exam failure, difficulty finding a Dutch speaking partner) before asking the visitor to act.

## Brand Commitments

Warm, approachable tutor branding — explicitly not corporate/generic edtech in tone or visual language. No existing name/logo/visual assets beyond the repo name "dutch-voice-tutor".

## Evidence on Hand

None yet — no existing copy, testimonials, or brand assets. Future work must not fabricate testimonials, pricing, or exam-pass-rate claims.

## Product Principles

1. Speaking is the primary mode, not an add-on — the mic/voice entry point is the product's center of gravity, not a secondary feature.
2. Arabic is a first-class interface language, not a translated afterthought — RTL chrome should feel native, not mirrored-LTR.
3. Progress should read as tangible movement toward a real, high-stakes goal (the exam/CEFR level), not abstract gamification points.
4. Warmth and approachability outrank corporate polish — this is a tutor, not a dashboard.

## Accessibility & Inclusion

Bidirectional (RTL/LTR) text handling must be correct and legible, not a mirrored approximation. No further accessibility requirements confirmed yet.
