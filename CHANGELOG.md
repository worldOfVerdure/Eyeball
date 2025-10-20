# Changelog

All notable changes to this project will be documented here.

## [1.2.0] - 2025-10-15

Added

- Extended createPalette() to support infoMain, errorMain, and divider tokens
- New Typography variants: cardTitle, cardPrice, cardDescription, and navItemCard
- "dom" added to tsconfig.lib for browser API support
- "declaration": true enabled in tsconfig.base.json for type generation

Changed

- Moved font.ts to config/ folder for improved modularity
- Updated type.d.ts to reflect new Typography variants

## [1.1.0] - 2025-09-24

Added

- Emotion cache for MUI override safety
- `errorMain`, `infoMain`, and `divider` palette tokens
- Open Graph image and manifest for preview polish
- Favicons and fonts folder in `/public`

Changed

- Migrated from `head.tsx` to `metadata.ts`
- Adopted `layout.tsx` / `ClientLayout.tsx` structure
- Moved `viewport` to `layout.tsx`
- Renamed `temp.tsx` → `Test.tsx` and updated import
- Updated `PaletteTokenKey` to reflect new tokens

## [1.0.1] - 2025-09-19

Fixed

- ESLint warnings in Emotion components
- Theme typing cleanup for palette safety
