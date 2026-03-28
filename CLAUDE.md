# Claude Rules — TaskHero Project

## Project context
- Figma file: `5dnR1zYkXoUNxNwJaDsesy` (SidePro-1 / TaskHero)
- GitHub repo: `designdexter/Taskhero`
- Stack: React Native, Expo SDK 52+, TypeScript, Storybook, Supabase

---

## Architecture

### Folder structure
```
src/
├── tokens/          # Design tokens (colors, typography, spacing, shadows)
├── components/
│   ├── shared/      # Components used by both parent and kid roles
│   ├── parent/      # Parent-only components
│   └── kid/         # Kid-only components
├── screens/
│   ├── parent/      # Parent screens (Home, Tasks, Rewards, Kids Dashboard, Create Task)
│   └── kid/         # Kid screens (Home, Task Detail, Rewards)
├── lib/             # Utilities, Supabase client, helpers
├── hooks/           # Custom React hooks
├── store/           # Zustand stores
└── types/           # Shared TypeScript types
```

### Design tokens
- All colours come from `src/tokens/colors.ts` — NEVER hardcode hex values in components
- Typography uses `src/tokens/typography.ts` — maps 1:1 to Figma text styles
- Spacing uses `src/tokens/spacing.ts` — base unit is 4px
- Shadows use `src/tokens/shadows.ts` — maps to Figma effect styles
- Import via barrel: `import { colors, typography, spacing, shadows } from '@/tokens'`

### Component rules
- Every component gets a `.stories.tsx` file alongside it
- Components must use tokens exclusively — no inline colours, font sizes, or magic numbers
- Shared components go in `shared/` — if both parent and kid use it, it lives there
- Kid components should favour large touch targets (min 48px), visual > text
- Parent components should be information-dense but scannable

### Storybook
- Single Storybook instance for both roles
- Story folders: `Shared/`, `Parent/`, `Kid/`, `Screens/Parent/`, `Screens/Kid/`
- Every component variant visible in Storybook before being used in screens

---

## Figma → Code mapping

### Semantic colour tokens → TypeScript
| Figma variable | Code path |
|---|---|
| `Surface/Page` | `colors.surface.page` |
| `Surface/Card` | `colors.surface.card` |
| `Text/Default` | `colors.text.default` |
| `Text/Muted` | `colors.text.muted` |
| `Primary/Default` | `colors.primary.default` |
| `Primary/Subtle` | `colors.primary.subtle` |
| `Border/Default` | `colors.border.default` |
| `Success/Default` | `colors.success.default` |
| `Danger/Default` | `colors.danger.default` |
| `Warning/Default` | `colors.warning.default` |
| `Kid/Card-*` | `colors.kid.card*` |

### Text styles → TypeScript
| Figma style | Code path |
|---|---|
| `Header-H1` | `typography.h1` |
| `Header-H2` | `typography.h2` |
| `Header-H3` | `typography.h3` |
| `BodySemibold` | `typography.bodySemibold` |
| `BodyMedium` | `typography.bodyMedium` |
| `BodyRegular` | `typography.bodyRegular` |
| `DescriptionRegular` | `typography.descriptionRegular` |
| `Description Medium` | `typography.descriptionMedium` |
| `DescriptionSemibold` | `typography.descriptionSemibold` |
| `CaptionMedium` | `typography.captionMedium` |
| `CaptionRegular` | `typography.captionRegular` |
| `Display` | `typography.display` |

### Effect styles → TypeScript
| Figma style | Code path |
|---|---|
| `Shadow/Button` | `shadows.button` |
| `Shadow/Card` | `shadows.card` |
| `Shadow/TabBar` | `shadows.tabBar` |
| `Shadow/Subtle` | `shadows.subtle` |
| `Shadow/Focus-Ring` | `shadows.focusRing` |

---

## NON-NEGOTIABLE RULES

1. **Never hardcode colours** — always use `colors.*` tokens
2. **Never hardcode font sizes** — always use `typography.*` tokens
3. **Never skip Storybook** — every component gets stories before being used in screens
4. **Components are pure UI** — no data fetching inside components, only props
5. **Screens compose components** — screens handle data, components handle rendering
6. **Font: Work Sans only** — no Inter, no SF Pro, no system fonts in the app UI

---

## Backend (Supabase — free tier)
- Auth: email + magic link for parents, PIN-based child profiles
- Database: Postgres with RLS per family
- Storage: proof images in family-scoped buckets
- Realtime: task status subscriptions
- Edge Functions: push notifications

---

## Standing rules
- Run `tsc --noEmit` before committing — no type errors allowed
- Components must be self-contained — all styles via tokens, no global stylesheets
- Kid UI: minimum 48px touch targets, visual-first, large text
- Parent UI: information-dense, scannable, efficient workflows
