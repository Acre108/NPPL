# No Peace Past Luna — Strategy Map v1

Desktop-first React + TypeScript single-page application for an interactive political transit map of the solar system (year 2327).

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Data model and editing

All map content is data-driven and editable in:

- `src/data/factions.ts`
- `src/data/regions.ts`
- `src/data/nodes.ts`
- `src/data/links.ts`

### Add a faction

Add a new object to `factions` with:

- `id`, `name`, `shortName`, `category`
- `color`, `textColor`
- `description`, `ideologyTags`
- `visibilityType` (`recognized`, `hidden`, `roaming`, `fragmented`)
- `homeRegion`

### Add a node

Add a `NodeData` object in `nodes.ts`:

- Place `x`, `y` manually in the 2260 × 900 coordinate system.
- Set `regionId`, `factionId`, `type`, and `importance`.
- Include short lore in `summary` and search-friendly `tags`.

### Add a link/route

Add a `LinkData` object in `links.ts`:

- Connect `sourceId` and `targetId` (node IDs).
- Set `type`, `factionId`, `visibility`, and `strength`.
- Overlay modes automatically filter by link type and visibility.

## Feature highlights

- 4 overlay modes (Political, Trade/Transit, Military, Hidden Activity)
- Faction and route-type filtering
- Search for nodes/factions
- Hover tooltip + click-to-open lore panel
- Zoom/pan SVG map and reset view
- Label visibility toggle
- Faction highlight mode (mute others)
## Installation troubleshooting

If `npm install` fails behind a corporate or lab proxy, use the bootstrap helper:

```bash
npm run bootstrap
```

You can also point to an internal registry mirror:

```bash
NPM_REGISTRY=https://<your-org-registry>/ npm run bootstrap
```

The bootstrap script normalizes proxy-related npm env variables for npm v11+ and retries installation with clear diagnostics.

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Ensure your default branch is `main`.
3. In GitHub: **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` (or manually run the workflow) and Pages will deploy automatically.

This repo includes `.github/workflows/deploy-pages.yml`, which builds with the correct Vite base path for project Pages:

```bash
npm run build -- --base="/<repo-name>/"
```

If your repository name is `NPPL`, the deployed base path is `/NPPL/`.

