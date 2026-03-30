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
7. **Code must match Figma exactly** — never invent styles, spacing, or layouts that aren't in the design

---

## Figma-to-code fidelity (NON-NEGOTIABLE)

Code is a translation of Figma, not an interpretation. Every component must be built by reading the actual Figma design.

### Before coding any component or screen:
1. **Screenshot the Figma node** — use `figma_capture_screenshot` or `Figma:get_screenshot` to see exactly what you're building
2. **Read the node properties** — extract fills, text styles, spacing, auto layout settings from Figma
3. **Map every value to a token** — every colour → `colors.*`, every font → `typography.*`, every spacing → `spacing.*`, every shadow → `shadows.*`
4. **If a value doesn't exist in tokens, flag it** — do NOT invent a new value or hardcode it. Ask Naren.

### While coding:
- **Spacing must come from Figma auto layout values** — read padding and gap from the actual node, then map to the closest `spacing.*` token
- **Border radius must match Figma** — read the cornerRadius from the node, map to `radius.*`
- **Colours must match the bound semantic variable** — if Figma says `Primary/Default`, code says `colors.primary.default`. No substitutions.
- **Typography must match the linked text style** — if Figma says `Header-H2`, code says `typography.h2`. No approximations.
- **Never add decorative elements, shadows, or effects that aren't in the Figma design**
- **Never remove elements that are in the Figma design**

### After coding:
- Compare the coded component side-by-side with the Figma screenshot
- Every pixel that differs is a bug to fix

### When a Figma design uses raw values instead of tokens (CRITICAL):
If you find a Figma node using a raw hex colour, raw font size, or hardcoded spacing instead of a semantic token:
1. **Do NOT silently map it to the nearest token** — this hides a design gap
2. **Do NOT hardcode the raw value in code** — this creates tech debt
3. **STOP and flag it to Naren** with:
   - What the raw value is (e.g. `#4A90D9` used as a fill)
   - Where it appears (which screen, which component, which node)
   - A suggestion for the right semantic token considering:
     - **Scalability** — will this token be reused across multiple screens?
     - **Naming** — does it fit the existing token naming hierarchy?
     - **Semantic meaning** — what role does this colour/value play (surface, text, status, etc.)?
   - Whether an existing token could work, or whether a new token needs to be created in Figma first
4. **Wait for Naren's decision** before proceeding
5. The goal is always: **every value in code traces back to a named token, every token has a clear purpose, and no token is redundant**

---

## Backend (Supabase — free tier)
- Auth: email + magic link for parents, PIN-based child profiles
- Database: Postgres with RLS per family
- Storage: proof images in family-scoped buckets
- Realtime: task status subscriptions
- Edge Functions: push notifications

---

## Verification rules (NON-NEGOTIABLE)

These rules exist because of past mistakes. They are never optional.

### Figma work
- **After ANY Figma operation:** take a screenshot with `figma_capture_screenshot` and visually verify before declaring done. Do NOT trust API return values alone — look at the actual screen.
- **Never declare a screen "clean" or "compliant" based only on API data.** The API can say a node is linked but the visual result might be wrong. Always screenshot.
- **Before building ANY component in code:** screenshot the Figma screen first and reference it directly. Do not build from memory or descriptions.

### Code work
- **Before debugging ANY error:** read the actual source files first (`cat` the file, clone the repo, or ask the user to share). Never guess fixes from error messages alone.
- **One precise fix per attempt.** No trial-and-error chains of "try this, try that" — each fix must be based on reading the actual code.
- **If you can't access the code:** ask the user to share the specific file contents. Do not guess.

### General
- **Never validate your own work by reading your own output.** Always use an independent check (screenshot, file read, test run).
- **If something fails, read the source before suggesting a fix.** The extra 30 seconds of reading saves minutes of wrong guesses.

---

## Standing rules
- Run `tsc --noEmit` before committing — no type errors allowed
- Components must be self-contained — all styles via tokens, no global stylesheets
- Kid UI: minimum 48px touch targets, visual-first, large text
- Parent UI: information-dense, scannable, efficient workflows