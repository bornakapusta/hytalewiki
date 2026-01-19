# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hytale Server Plugin API documentation project. Two main directories:

- **server-docs/** - Astro/Starlight documentation site (active development)
- **decompiled-server/** - Decompiled Java server code (~5,200 files, read-only reference)

Each subdirectory has its own CLAUDE.md with detailed context.

## Commands

All commands run from `server-docs/`:

```bash
npm install          # Install dependencies
npm run dev          # Dev server at localhost:4321
npm run build        # Build to ./dist/
npm run preview      # Preview production build
```

## Architecture

### Documentation Site (server-docs/)
- Astro 5.x + Starlight theme
- Content: MDX files in `src/content/docs/`
- Sidebar config: `astro.config.mjs`
- Deploys to Cloudflare Pages

### Decompiled Server (decompiled-server/)
Reference material documenting:
- Plugin system (48 plugins via manifests.json)
- ECS framework (`com.hypixel.hytale.component/`)
- Event bus (`com.hypixel.hytale.event/`)
- Network protocol, procedural generation, codecs

## Workflow

When writing documentation:
1. Reference decompiled Java code to understand actual API behavior
2. Create/edit MDX files in `server-docs/src/content/docs/`
3. Update sidebar in `astro.config.mjs` for new pages

## Documentation Guidelines

**Use ECS for examples** - Hytale uses an Entity Component System similar to Minecraft's. When writing code examples, prefer ECS patterns (components, systems, archetypes) over OOP inheritance hierarchies. Reference `com.hypixel.hytale.component/` for the actual implementation.
