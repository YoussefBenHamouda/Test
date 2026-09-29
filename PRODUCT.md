# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Node.js 20 with one Express application and no client framework.

## Users

Live-workshop participants learning to package and ship a minimal web application during a timed competition, plus the facilitator who needs a clean answer-key branch.

## Product Purpose

Provide an intentionally tiny, memorable starting point that runs immediately and gives every participant one obvious piece of copy to personalize before they containerize and deploy it themselves.

## Positioning

The repository is deliberately the starting line rather than a finished production scaffold: one route, one dependency, and no deployment opinions.

## Operating Context

Participants clone or generate a fresh copy, install dependencies, start the server, personalize the visible placeholder, then write their own Docker and deployment configuration live.

## Capabilities and Constraints

- Serve one HTML page at `/`.
- Read `process.env.PORT`, defaulting to `3000`.
- Keep fewer than ten repository files.
- Keep Express as the only dependency; no testing, linting, CI, or deployment configuration.
- Keep the participant-facing default branch free of Docker configuration.
- Maintain a separate `facilitator-solution` branch with a simple Dockerfile answer key.
- Publish as a public GitHub template repository.

## Brand Commitments

The workshop and page are named “Ship It.” The tone is energetic, concise, and action-oriented. The editable copy must be unmistakable.

## Evidence on Hand

No testimonials, performance claims, logos, photography, or other external brand assets were supplied; none should be fabricated.

## Product Principles

- Make the next action obvious.
- Keep every technical choice legible to beginners.
- Let the page feel special without hiding the tiny source participants will edit.
- Preserve the competition’s open-ended Docker and deployment work.
