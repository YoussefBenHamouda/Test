const express = require("express");

// Display subset: Noto Serif by Monotype, licensed under the SIL Open Font License 1.1.

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_request, response) => {
  response.send(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#f04b23">
    <title>Ship It. — Live Workshop</title>
    <style>
      @font-face {
        font-family: "Ship Display";
        src: url("data:font/woff2;base64,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") format("woff2");
        font-style: italic;
        font-weight: 800;
        font-display: block;
      }

      :root {
        --paper: #f1efe8;
        --ink: #161713;
        --signal: #f04b23;
        --muted: #5d5d55;
      }

      * { box-sizing: border-box; }

      html { background: var(--ink); }

      body {
        margin: 0;
        min-height: 100svh;
        color: var(--ink);
        background: var(--paper);
        font-family: "Avenir Next", "Helvetica Neue", Arial, sans-serif;
      }

      ::selection { color: var(--paper); background: var(--signal); }

      .page {
        position: relative;
        display: grid;
        grid-template-rows: auto 1fr auto;
        min-height: 100svh;
        padding: clamp(1.25rem, 3vw, 3rem);
        overflow: hidden;
        isolation: isolate;
      }

      .page::before {
        content: "";
        position: absolute;
        z-index: -1;
        width: min(46vw, 42rem);
        aspect-ratio: 1;
        right: -14vw;
        top: -20vw;
        border: clamp(3rem, 9vw, 9rem) solid var(--signal);
        border-radius: 50%;
        transform-origin: center;
        animation: settle 1050ms ease-out both;
      }

      .registration {
        position: absolute;
        left: 0;
        top: 43%;
        display: grid;
        gap: .55rem;
        color: var(--muted);
        font-size: .55rem;
        font-weight: 800;
        letter-spacing: .14em;
        writing-mode: vertical-rl;
      }

      .registration::before,
      .registration::after {
        content: "";
        width: 1.4rem;
        height: 1px;
        background: var(--ink);
      }

      header,
      footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        font-size: .72rem;
        font-weight: 800;
        letter-spacing: .12em;
        text-transform: uppercase;
      }

      .mark { display: flex; align-items: center; gap: .65rem; }

      .mark::before {
        content: "";
        width: .72rem;
        height: .72rem;
        border-radius: 50%;
        background: var(--signal);
        box-shadow: 0 0 0 .3rem rgba(240, 75, 35, .15);
      }

      .chapter { color: var(--muted); }

      main {
        display: grid;
        grid-template-columns: minmax(0, 1.35fr) minmax(17rem, .65fr);
        align-items: end;
        gap: clamp(2rem, 6vw, 7rem);
        padding: clamp(4.5rem, 11vh, 8rem) 0 clamp(3rem, 8vh, 6rem);
      }

      h1 {
        max-width: 8ch;
        margin: 0;
        font-family: "Ship Display", serif;
        font-size: clamp(4.8rem, 10vw, 6rem);
        font-style: italic;
        font-weight: 800;
        letter-spacing: -.04em;
        line-height: .68;
      }

      h1 span { display: block; margin-left: .72em; color: var(--signal); }

      .editorial {
        align-self: end;
        padding-top: 1.2rem;
        border-top: 2px solid var(--ink);
      }

      .editable {
        max-width: 13ch;
        margin: 0;
        font-size: clamp(2rem, 4vw, 4.5rem);
        font-weight: 800;
        letter-spacing: -.035em;
        line-height: .95;
      }

      .editable em { color: var(--signal); font-style: normal; }

      .hint {
        margin: 1.5rem 0 0;
        color: var(--muted);
        font-size: .86rem;
        line-height: 1.6;
      }

      code {
        color: var(--ink);
        font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
        font-weight: 700;
      }

      .status { display: flex; align-items: center; gap: .7rem; }

      .status::before {
        content: "";
        width: .5rem;
        height: .5rem;
        border-radius: 50%;
        background: var(--signal);
        animation: pulse 1.8s ease-in-out infinite;
      }

      a { color: inherit; text-underline-offset: .25em; }
      :focus-visible { outline: 3px solid var(--signal); outline-offset: 4px; }

      @keyframes settle {
        0% { transform: scale(.92) rotate(-5deg); }
        56% { transform: scale(1.035) rotate(1.2deg); }
        78% { transform: scale(.985) rotate(-.4deg); }
        100% { transform: scale(1) rotate(0); }
      }

      @keyframes pulse { 50% { opacity: .35; } }

      @media (max-width: 760px) {
        .page { min-height: 100svh; }
        .chapter { max-width: 14ch; text-align: right; }
        .registration { display: none; }
        main { grid-template-columns: 1fr; align-content: center; padding: 4rem 0; }
        h1 { font-size: clamp(4.8rem, 24vw, 6rem); }
        .editorial { width: min(100%, 25rem); justify-self: end; }
        .editable { font-size: clamp(2.25rem, 10vw, 3.6rem); }
        footer { align-items: flex-end; }
      }

      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; }
      }
    </style>
  </head>
  <body>
    <div class="page">
      <!-- FORM · scrutineering start signal · Impeccable seed 3cedd98f -->
      <div class="registration" aria-hidden="true">INSPECTED · READY</div>
      <header>
        <div class="mark">Ship It.</div>
        <div class="chapter">Chapter 01 — The Starting Line</div>
      </header>

      <main>
        <h1>Ship <span>It.</span></h1>

        <section class="editorial" aria-labelledby="make-it-yours">
          <h2 class="editable" id="make-it-yours">Edit this text to <em>make it yours.</em></h2>
          <p class="hint">Open <code>app.js</code>, find this sentence, and give your build a voice.</p>
        </section>
      </main>

      <footer>
        <span class="status">Ready on localhost:${port}</span>
        <span>Build · Pack · Ship</span>
      </footer>
    </div>
  </body>
</html>`);
});

app.listen(port, () => {
  console.log(`Ship It. is ready at http://localhost:${port}`);
});
