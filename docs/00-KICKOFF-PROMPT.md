# 00 — Kickoff Prompt (paste this into Antigravity)

## Setup (do once)
1. Create an empty folder `q9-technologies` and open it as the Antigravity workspace.
2. Copy `AGENTS.md` into the project root. Save a second copy named `GEMINI.md`.
3. Copy the whole `docs/` folder into the project root.
4. Open the Agent Manager / chat panel, select the Gemini Flash model, set mode to **Planning** (so it shows a plan before editing).
5. Paste the prompt below.

---

## PROMPT TO PASTE

```
You are building the official website for Q9 Technologies.

First, read AGENTS.md in the project root, then read every file in /docs in numeric order (01 to 08). Do not write any code until you have read all of them.

Then:
1. Reply with a short summary (max 15 lines) of what you will build, the stack, and the phases from docs/08-BUILD-PHASES-AND-QA.md.
2. Open https://technolyte.com/ in the browser and study ONLY its visual design: colors, fonts, spacing, card styles, buttons, navbar, hero layout, section rhythm, hover and scroll animations, mobile menu, contact layout, quote modal. Write your findings into docs/DESIGN-TOKENS-EXTRACTED.md (hex colors, font families, font sizes, radii, shadows, spacing scale, breakpoints). Do not copy its text, logos or images.
3. Start Phase 1 and continue phase by phase. After each phase run `npm run lint` and `npm run build`, fix errors, then report what you did before starting the next phase.

Hard reminders:
- Copy text only from docs/04-CONTENT.md. Never invent clients, stats, testimonials, team members or app names.
- Contact details come only from docs/05-CONTACT-MODULE.md and live in src/config/site.ts.
- If something is missing, follow the placeholder pattern in AGENTS.md section 6 and log it in MISSING-CONTENT.md.

Begin now with step 1.
```

---

## If the agent drifts or stops midway
Paste one of these short follow-ups:

- **Continue:** `Continue from the current phase in docs/08-BUILD-PHASES-AND-QA.md. Re-read AGENTS.md first.`
- **Fix build:** `Run npm run lint and npm run build. Fix every error without changing the design or content, then report.`
- **Content drift:** `You changed copy. Restore all text exactly as in docs/04-CONTENT.md.`
- **Design drift:** `Compare the current UI against docs/02-DESIGN-SYSTEM.md and docs/DESIGN-TOKENS-EXTRACTED.md and fix mismatches in spacing, color, typography and card style.`
- **Review at the end:** `Run the full QA checklist in docs/08-BUILD-PHASES-AND-QA.md and report pass/fail for each item.`
