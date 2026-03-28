# TaskHero

A React Native (Expo) app that helps parents assign tasks to kids and reward them with points. Built with a design-system-first approach: **Figma → Storybook → Expo**.

## Stack

- **Frontend:** React Native + Expo SDK 52+
- **Language:** TypeScript
- **Component Dev:** Storybook for React Native
- **State:** Zustand
- **Navigation:** expo-router (file-based)
- **Backend:** Supabase (auth, Postgres, storage, realtime)
- **Font:** Work Sans (Regular, Medium, SemiBold, Bold)

## Project structure

```
src/
├── tokens/              # Design tokens from Figma
│   ├── colors.ts        # Semantic colour tokens (41 tokens)
│   ├── typography.ts    # Text styles (12 styles)
│   ├── spacing.ts       # Spacing scale + border radius
│   ├── shadows.ts       # Shadow presets (5 styles)
│   └── index.ts         # Barrel export
├── components/
│   ├── shared/          # Used by both parent & kid
│   ├── parent/          # Parent-only components
│   └── kid/             # Kid-only components
├── screens/
│   ├── parent/          # Parent screens
│   └── kid/             # Kid screens
├── lib/                 # Supabase client, utilities
├── hooks/               # Custom hooks
├── store/               # Zustand stores
└── types/               # Shared TypeScript types
```

## Design

Designs live in Figma: [SidePro-1](https://www.figma.com/design/5dnR1zYkXoUNxNwJaDsesy)

- **Parents UI:** Home, Tasks, Rewards, Kids Dashboard, Create Task
- **Kids UI:** Home (calendar), Task Detail, Rewards

All screens use semantic design tokens (41 colour variables, 12 text styles, 5 shadow styles) that map 1:1 to the TypeScript token files in this repo.

## Getting started

```bash
# Install dependencies
npm install

# Start Expo dev server
npx expo start

# Run Storybook
npm run storybook
```

## Roles

**Parent** — creates tasks, approves/rejects completions, manages rewards, views child progress.

**Kid** — views assigned tasks, marks complete with optional photo proof, earns points, redeems rewards.

Both roles share a single codebase with role-based routing via expo-router.

## License

MIT
