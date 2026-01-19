# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hytale Server Plugin API documentation site built with Astro and Starlight. Documents the server plugin framework for Kotlin/Java developers.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview built site locally
```

## Architecture

- **Framework**: Astro 5.x with Starlight documentation theme
- **Content**: MDX files in `src/content/docs/`
- **Config**: `astro.config.mjs` defines sidebar structure and site metadata
- **Content Schema**: `src/content/content.config.ts` uses Starlight's docsLoader/docsSchema

## Content Structure

All documentation lives in `src/content/docs/`:
- Root level: Getting started guides, core API docs
- `tutorials/`: Multi-part project tutorials (PVP Arena, RTS Game, CTF)
- `ui/`: UI system documentation with nested `pages/`, `components/`, `hud/`

New pages require corresponding sidebar entry in `astro.config.mjs`.

## MDX Conventions

Pages use YAML frontmatter with `title` and optional `description`. Homepage uses `template: splash`. Starlight components (`Card`, `CardGrid`) available for layouts.
