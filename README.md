# Hytale Server Plugin API Documentation

Documentation site for the Hytale Server Plugin API, built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

## Project Structure

```
hytalewiki/
├── server-docs/        # Documentation site (Astro + Starlight)
│   └── CLAUDE.md       # AI assistant instructions for docs
└── decompiled-server/  # Decompiled server code for reference
    └── CLAUDE.md       # AI assistant instructions for server code
```

## Getting Started

```bash
cd server-docs
npm install
npm run dev     # Start dev server at localhost:4321
```

## Building

```bash
cd server-docs
npm run build   # Build to ./dist/
npm run preview # Preview production build
```

## Documentation Contents

- **Getting Started** - Introduction, first plugin, project setup
- **Guides** - Events, commands, players, entities, blocks, tasks, components
- **Example Projects** - PVP Arena, RTS Game, Capture The Flag tutorials
- **Reference** - API reference, event list, component list, network protocol
- **UI System** - DSL syntax, pages, HUD components
