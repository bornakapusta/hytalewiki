# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Decompiled Java source from Hytale game server (decompiled via Vineflower). Contains plugin framework, 48 built-in plugins, ECS architecture, and core server systems. ~5,200 Java files, 187MB.

**Not buildable** - no pom.xml/build.gradle. Read-only reference for understanding Hytale server internals.

## Code Structure

```
com/hypixel/hytale/
├── server/          # Core server (worldgen, NPC, spawning, flock) - 2,582 files
├── builtin/         # 31 built-in plugins (adventure, blocks, mounts, etc.) - 1,283 files
├── protocol/        # Network protocol handling - 733 files
├── procedurallib/   # Procedural generation library - 146 files
├── codec/           # Data encoding/decoding (BSON) - 125 files
├── component/       # ECS framework - 90 files
├── math/            # Mathematical utilities - 81 files
├── event/           # Event bus system - 15 files
├── plugin/early/    # Early plugin loading with bytecode transformation
└── common/          # Shared utilities
```

## Core Architecture

### Plugin System
- Manifest-driven: `manifests.json` registers 48 plugins with dependencies
- Plugin format: `{ Group, Name, Version, Main, Dependencies, OptionalDependencies, SubPlugins }`
- Main classes extend plugin base in `com.hypixel.hytale.builtin.*`

### ECS (Entity Component System)
Key classes in `com.hypixel.hytale.component/`:
- `ComponentRegistry<ECS_TYPE>` - Central registry for components, resources, systems
- `ComponentType<ECS_TYPE, T>` / `ResourceType<ECS_TYPE, T>` - Type handles
- `SystemType<ECS_TYPE, T>` - System type registry
- `Archetype<ECS_TYPE>` - Entity queries by component composition
- `Store<ECS_TYPE>` - World/chunk storage
- `Holder<ECS_TYPE>` - Entity container

System types: `TickingSystem`, `QuerySystem`, `RefSystem`, `EntityEventSystem`, `WorldEventSystem`

### Event System
In `com.hypixel.hytale.event/`:
- `EventBus` - Central dispatcher with sync/async registries
- `IEvent<KeyType>` / `IAsyncEvent<KeyType>` - Event interfaces
- `EventPriority` - Listener ordering
- `EventRegistration` - Registration handles

### Early Plugin System
`com.hypixel.hytale.plugin.early.EarlyPluginLoader`:
- Loads JAR plugins from `earlyplugins/` directory
- `ClassTransformer` SPI for bytecode modification
- Flags: `--early-plugins=<paths>`, `--accept-early-plugins`, `--singleplayer`

## Key Patterns

1. **Registry pattern** - Components, resources, systems all registered via typed registries
2. **Codec pattern** - BSON serialization via `BuilderCodec<T>`, `KeyedCodec<T>`
3. **Dependency injection** - Systems declare dependencies, auto-ordered by framework
4. **Archetype queries** - ECS queries filter entities by component composition

## Dependencies (bundled)

- Netty (including QUIC) - networking
- MongoDB BSON - serialization
- fastutil - high-performance collections
- Bouncy Castle - cryptography
- JLine/Jansi - terminal

## Plugin Categories

**Adventure**: Camera, Farming, Objectives, Reputation, Shop, NPC systems
**World**: WorldGen, HytaleGenerator, Biomes, Caves, Structures
**Mechanics**: BlockPhysics, Fluid, Weather, Crafting, Mounts
**Movement**: Mantling, SafetyRoll, SprintForce, CrouchSlide, Parkour
**Tools**: BuilderTools, AssetEditor, NPCEditor, CreativeHub
