// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Hytale Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/pawnage/pawnage' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'introduction' },
						{ label: 'Your First Plugin', slug: 'your-first-plugin' },
						{ label: 'Project Setup', slug: 'project-setup' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Handling Events', slug: 'handling-events' },
						{ label: 'Creating Commands', slug: 'creating-commands' },
						{ label: 'Working with Players', slug: 'working-with-players' },
						{ label: 'Spawning Entities', slug: 'spawning-entities' },
						{ label: 'Manipulating Blocks', slug: 'manipulating-blocks' },
						{ label: 'Scheduling Tasks', slug: 'scheduling-tasks' },
						{ label: 'Custom Components', slug: 'custom-components' },
						{ label: 'ECS Theory', slug: 'ecs-theory' },
						{ label: 'Config Files', slug: 'config-files' },
						{ label: 'Common Features', slug: 'common-features' },
						{ label: 'Gradle & Testing', slug: 'gradle-testing' },
					],
				},
				{
					label: 'Example Projects',
					items: [
						{
							label: 'PVP Arena',
							items: [
								{ label: 'Part 1: Arena Core', slug: 'tutorials/pvp-arena-part1' },
								{ label: 'Part 2: Match Flow', slug: 'tutorials/pvp-arena-part2' },
								{ label: 'Part 3: Combat & Scoring', slug: 'tutorials/pvp-arena-part3' },
								{ label: 'Part 4: Commands & Polish', slug: 'tutorials/pvp-arena-part4' },
							],
						},
						{
							label: 'RTS Game',
							items: [
								{ label: 'Part 1: Resource System', slug: 'tutorials/rts-game-part1' },
								{ label: 'Part 2: Building System', slug: 'tutorials/rts-game-part2' },
								{ label: 'Part 3: Unit System', slug: 'tutorials/rts-game-part3' },
								{ label: 'Part 4: Combat & Win Conditions', slug: 'tutorials/rts-game-part4' },
							],
						},
						{
							label: 'Capture The Flag',
							items: [
								{ label: 'Part 1: Flag System', slug: 'tutorials/ctf-part1' },
								{ label: 'Part 2: Team Bases', slug: 'tutorials/ctf-part2' },
								{ label: 'Part 3: Scoring System', slug: 'tutorials/ctf-part3' },
								{ label: 'Part 4: Game Flow', slug: 'tutorials/ctf-part4' },
							],
						},
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'API Quick Reference', slug: 'api-reference' },
						{ label: 'Event List', slug: 'event-list' },
						{ label: 'ECS Components', slug: 'ecs-components' },
						{ label: 'System Types', slug: 'system-types' },
						{ label: 'Network Protocol', slug: 'protocol-api' },
						{ label: 'External Resources', slug: 'resources' },
					],
				},
				{
					label: 'Advanced',
					items: [
						{ label: 'Advanced ECS Patterns', slug: 'advanced-ecs' },
						{ label: 'Built-in Modules', slug: 'builtin-modules' },
						{ label: 'Asset System', slug: 'asset-system' },
						{ label: 'Bootstrap Plugins', slug: 'bootstrap-plugins' },
						{ label: 'Production Patterns', slug: 'advanced-patterns' },
					],
				},
				{
					label: 'UI System',
					items: [
						{ label: 'Overview', slug: 'ui' },
						{ label: 'DSL Syntax', slug: 'ui/dsl-syntax' },
						{ label: 'Common.ui Reference', slug: 'ui/common-reference' },
						{ label: 'Sounds.ui Reference', slug: 'ui/sounds-reference' },
						{
							label: 'Pages',
							items: [
								{ label: 'Portal & Teleportation', slug: 'ui/pages/portal-teleportation' },
								{ label: 'Shop & Trading', slug: 'ui/pages/shop-trading' },
								{ label: 'Respawn System', slug: 'ui/pages/respawn-system' },
								{ label: 'Prefab Editing', slug: 'ui/pages/prefab-editing' },
								{ label: 'Admin & Debug', slug: 'ui/pages/admin-debug' },
								{ label: 'Content Creation', slug: 'ui/pages/content-creation' },
								{ label: 'World & Environment', slug: 'ui/pages/world-environment' },
								{ label: 'Navigation & Warping', slug: 'ui/pages/navigation-warping' },
								{ label: 'Item Management', slug: 'ui/pages/item-management' },
								{ label: 'Memories', slug: 'ui/pages/memories' },
							],
						},
						{ label: 'Reusable Components', slug: 'ui/components/reusable-elements' },
						{ label: 'HUD: Time Left', slug: 'ui/hud/time-left' },
					],
				},
			],
		}),
	],
});
