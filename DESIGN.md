---
name: "Ship It."
description: "A scrutineering start-signal system for a terse, editable workshop launch page."
colors:
  signal-orange: "#f04b23"
  warm-paper: "#f1efe8"
  inspection-ink: "#161713"
  muted-notation: "#5d5d55"
typography:
  display:
    fontFamily: '"Ship Display", serif'
    fontSize: "clamp(4.8rem, 10vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.68
    letterSpacing: "-0.04em"
  headline:
    fontFamily: '"Avenir Next", "Helvetica Neue", Arial, sans-serif'
    fontSize: "clamp(2rem, 4vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  body:
    fontFamily: '"Avenir Next", "Helvetica Neue", Arial, sans-serif'
    fontSize: "0.86rem"
    lineHeight: 1.6
  label:
    fontFamily: '"Avenir Next", "Helvetica Neue", Arial, sans-serif'
    fontSize: "0.72rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.12em"
  registration:
    fontFamily: '"Avenir Next", "Helvetica Neue", Arial, sans-serif'
    fontSize: "0.55rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.14em"
  code:
    fontFamily: 'ui-monospace, SFMono-Regular, Consolas, monospace'
    fontSize: "0.86rem"
    fontWeight: 700
    lineHeight: 1.6
rounded:
  signal-circle: "50%"
spacing:
  page-gutter: "clamp(1.25rem, 3vw, 3rem)"
  main-gap: "clamp(2rem, 6vw, 7rem)"
  editorial-inset: "1.2rem 0 0"
  hint-offset: "1.5rem 0 0"
components:
  inspection-mark:
    textColor: "{colors.inspection-ink}"
    typography: "{typography.label}"
  registration-label:
    textColor: "{colors.muted-notation}"
    typography: "{typography.registration}"
  editorial-panel:
    backgroundColor: "{colors.warm-paper}"
    textColor: "{colors.inspection-ink}"
    padding: "{spacing.editorial-inset}"
  editable-target:
    textColor: "{colors.inspection-ink}"
    typography: "{typography.headline}"
  workshop-hint:
    textColor: "{colors.muted-notation}"
    typography: "{typography.body}"
  ready-status:
    textColor: "{colors.inspection-ink}"
    typography: "{typography.label}"
  signal-ring:
    backgroundColor: "transparent"
    rounded: "{rounded.signal-circle}"
    size: "min(46vw, 42rem)"
---

# Design System: Ship It.

## Overview

**Creative North Star: "The Scrutineering Start Signal"**

Ship It. looks like a machine has passed inspection and is waiting for release: a warm paper field, near-black inspection ink, terse technical notation, and one decisive orange signal. The interface is spare enough that the editable sentence remains unmistakable, while the oversized italic title and off-canvas ring give the tiny workshop starter a memorable identity.

The system is flat, exact, and energetic rather than glossy. Large negative fields separate the display title from the edit target; registration ticks and status language supply the scrutineering character without competing with the participant's next action.

**Key Characteristics:**
- Warm paper and inspection ink carry nearly the entire surface.
- Signal orange is rare, semantic, and visually decisive.
- Condensed-feeling italic display lettering contrasts with terse sans-serif labels.
- Desktop composition uses an asymmetric two-column field; mobile becomes a single stack.
- Motion is limited to one damped entrance and one restrained readiness pulse.

## Colors

The palette behaves like an inspection sheet marked with a single live signal.

### Primary
- **Signal Orange:** Marks the title payoff, editable phrase, readiness indicators, selection, focus, and the large signal ring.

### Neutral
- **Warm Paper:** The uninterrupted page field and inverse text color for selections.
- **Inspection Ink:** Primary text, rules, registration ticks, and the dark browser surround.
- **Muted Notation:** Secondary instructions, chapter notation, and registration text.

### Named Rules

**The One Signal Rule.** Orange identifies the active signal or exact point of attention; it does not become general surface decoration.

**The Paper Field Rule.** Preserve the broad warm-paper field so type, rules, and the signal ring carry the hierarchy without panels or fills.

## Typography

**Display Font:** Ship Display (with serif fallback)

**Body Font:** Avenir Next (with Helvetica Neue, Arial, and sans-serif fallbacks)

**Label/Mono Font:** The sans-serif body stack for labels; the system UI monospace stack for the file target.

**Character:** Heavy italic editorial lettering supplies velocity and ceremony. Compact, uppercase inspection labels and plain instructional copy keep the surrounding interface factual and legible.

### Hierarchy
- **Display:** Oversized, tightly tracked, heavy italic lettering reserved for the two-line Ship It. title; the second word is indented and signaled in orange.
- **Headline:** Heavy, compact sans-serif copy with a short measure (13ch) reserved for the obvious edit target.
- **Body:** Muted instructional copy with generous line spacing; inline code returns to inspection ink in bold monospace.
- **Label:** Heavy uppercase sans-serif with wide tracking for the mark, chapter, footer, and status.
- **Registration:** The smallest, widest-tracked uppercase label, set vertically on desktop only.

### Named Rules

**The Two Voices Rule.** Use Ship Display only for focal editorial lettering; all operational and instructional language stays in the sans-serif inspection voice.

**The Exact Target Rule.** The participant's editable sentence must remain a large, short-measure headline, with the words that invite ownership picked out in signal orange.

## Layout

The page is a full-viewport three-row grid: header, expanding main field, and footer. The main field aligns an oversized title against the editable instruction in an asymmetric 1.35fr/0.65fr grid, with a wide fluid gap and generous vertical breathing room. The signal ring is positioned beyond the upper-right edge, while a vertical registration mark sits at the left edge around 43% of the viewport.

At 760px and below, registration disappears, the main field becomes one column, the title scales against viewport width, and the editorial block aligns to the right with a maximum width of 25rem. Header and footer retain their opposing alignment; footer items align to their lower edges.

**The Open Field Rule.** Do not fill the negative space with extra cards, badges, or explanatory modules; the emptiness is what makes the edit target obvious.

## Elevation & Depth

The system is flat. A two-pixel ink rule separates the editable section, and the signal geometry establishes depth through scale and edge cropping rather than lifted surfaces. The only shadow is a translucent orange halo around the small brand mark; it reads as signal energy, not card elevation.

**The No Surface Shadow Rule.** Keep content on one paper plane; never use shadows to turn text groups into floating panels.

## Shapes

The primary form language is rectilinear and borderless, interrupted by perfect signal circles. Rules are thin and functional. The large ring is intentionally cropped by the viewport; the brand and status dots remain small, solid, and circular. Content containers do not introduce corner radii.

## Components

### Inspection Mark

A heavy uppercase Ship It. wordmark paired with a small orange dot and translucent signal halo. It sits in the header as an operational mark, not a decorative logo lockup.

### Registration Label

A muted, vertical desktop-only inspection label bracketed by short ink ticks. It is hidden on mobile rather than reflowed into the content stack.

### Editorial Edit Target

A warm-paper section with a two-pixel ink rule at its top. Its heavy headline keeps a short measure, and the ownership phrase changes to orange without changing weight or style.

### Workshop Hint

Muted instructional prose beneath the edit target. The literal file name is bold monospace in inspection ink so the code action is concrete and scannable.

### Ready Status

An uppercase footer label led by a small orange dot. The dot pulses gently while the text remains still.

### Signal Ring

One oversized orange circular border, cropped beyond the upper-right viewport. It performs a single damped scale-and-rotation settle on load and does not loop.

## Do's and Don'ts

### Do:
- **Do** reserve signal orange for focal words, readiness, focus, selection, and the single ring.
- **Do** keep the editable sentence and its literal file path immediately visible and unambiguous.
- **Do** preserve the desktop registration detail and remove it cleanly at the mobile breakpoint.
- **Do** honor reduced-motion preferences by collapsing animation to a single near-instant iteration.

### Don't:
- **Don't** add gradients, surface cards, decorative shadows, or rounded content containers to this flat inspection world.
- **Don't** repeat the large signal ring or scatter orange accents until they lose semantic force.
- **Don't** use Ship Display for instructions, labels, or body copy.
- **Don't** carry desktop registration ticks into the mobile content stack.
