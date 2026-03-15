# MedNorm AI — Frontend Prototype

This repository is a frontend‑only prototype for "MedNorm AI — Healthcare Data Normalization Engine" built with React + Vite + Tailwind.

Quick start

1. Install dependencies
   - npm install

2. Development
   - npm run dev

3. Build
   - npm run build

Notes for Vercel deployment

- This project sets a Node engine recommendation to `18.x`. The file `.nvmrc` contains `18` to help Vercel or other hosts pick the right runtime.
- Build scripts call Vite using Node to avoid execution permission issues in some CI environments:
  - `node ./node_modules/vite/bin/vite.js build`

If you see a `/node_modules/.bin/vite: Permission denied` error during deploy, ensure Vercel is using Node 18 (check Project Settings > Environment > Node.js Version) or the `.nvmrc` is honored.

If you need me to add a `vercel.json` or CI adjustments for a specific host, tell me which provider and I will add it.
