# Melting Ice Cube Pomodoro

A visual focus-timer experiment where an ice cube gradually melts as a work session passes.

The project explores a physical-feeling alternative to a standard countdown: p5.js particles begin in a structured cube and fall away over time. The visual metaphor is intended to make elapsed focus time easier to feel at a glance.

> **Status:** visual prototype. The melting particle experiment runs, but it is not yet connected to a complete Pomodoro timer or user controls.

## Current behavior

- p5.js canvas rendered in the browser
- grid of ice-colored particles
- distance-weighted random melting
- gravity applied to melted particles
- separate early bouncing-cube experiment in `sketch.js`

The page currently loads `testSketch.js`, which contains the active melting experiment.

## Technology

- HTML and CSS
- JavaScript
- p5.js from a CDN

## Run locally

No build step is required. Use a local web server:

```bash
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000).

## Validation status

There are no automated tests or CI workflow. The current visual behavior should be checked manually in current desktop and mobile browsers. `testSketch.js` is application code despite its temporary name; it is not an automated test.

## Known limitations

- no timer, start/pause/reset controls, or work/break cycle exists yet
- melting is random rather than tied to elapsed session progress
- the canvas is fixed at 400 by 400 pixels
- the page has no accessible timer text or reduced-motion mode
- refreshing loses all state
- p5.js requires an external CDN connection
- the original cube experiment and current particle prototype are not organized clearly

## High-value next steps

- drive melting deterministically from remaining session time
- add start, pause, reset, and work/break controls
- show an accessible text countdown alongside the visual
- make the ice responsive and visually coherent across screen sizes
- add reduced-motion and sound preferences
- preserve a completed-session state without requiring an account
- rename the active sketch and add simple timer-logic tests

## Authorship

Created by [SimpleCaci](https://github.com/SimpleCaci). A project license has not yet been selected.
