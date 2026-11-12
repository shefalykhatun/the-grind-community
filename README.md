# The Grind — React + Vite starter

This is the first migration stage of The Grind.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev` and open the local URL shown in the terminal.

## Current migration status

- React + Vite project scaffold: ready.
- Existing The Grind demo preserved under `public/demo/` and displayed inside a React shell.
- Reimu and Punch background videos preserved alongside the demo.
- Existing demo interactions remain in the original HTML and still use sample/in-memory data.
- Supabase authentication, database persistence, file uploads, email, and secure admin permissions are NOT connected yet. Those are subsequent migration steps.

The current wrapper is intentionally a compatibility bridge, not a claim that every legacy screen has already been rewritten as native React components. This keeps the current design and demo working while the screens are migrated safely in stages.
