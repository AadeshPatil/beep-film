# Project Structure

This project follows the Next.js App Router 14 best practices with proper separation of concerns.

## Directory Structure

```
VIDEO_WEBSITE/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout component
│   │   └── page.tsx            # Home page
│   └── common/                 # Shared code across the application
│       ├── components/         # Reusable UI components
│       │   ├── header.tsx      # Navigation header component
│       │   ├── hero.tsx        # Hero section component
│       │   ├── video-grid.tsx  # Video portfolio grid component
│       │   ├── video-card.tsx  # Individual video card component
│       │   ├── footer.tsx      # Footer component
│       │   └── index.ts        # Barrel export for components
│       ├── types/              # TypeScript type definitions
│       │   └── index.ts        # Shared interfaces and types
│       └── index.ts            # Barrel export for common
├── .github/
│   └── copilot-instructions.md # Coding guidelines
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── postcss.config.js
└── README.md

```

## Code Style Guidelines (Following Copilot Instructions)

### 1. File and Directory Naming
- ✅ All files use **kebab-case**: `video-card.tsx`, `video-grid.tsx`
- ✅ All directories use **kebab-case**: `common/components/`
- ✅ Each directory has an `index.ts` for clean barrel exports

### 2. Component Naming
- ✅ Component names use **PascalCase**: `VideoCard`, `VideoGrid`, `Header`
- ✅ All components include `"use client"` directive when needed
- ✅ Page components don't have `"use client"` directive

### 3. TypeScript Types
- ✅ Interfaces use **PascalCase** without `I` prefix: `Video`, `VideoCardProps`
- ✅ Types are centralized in `common/types/index.ts`
- ✅ Shared types are imported using `type` keyword

### 4. Code Formatting
- ✅ Use **double quotes** consistently
- ✅ Add **semicolons** at the end of statements
- ✅ Use camelCase for variables and functions
- ✅ Use SCREAMING_SNAKE_CASE for constants

### 5. Accessibility
- ✅ All buttons have `aria-label` attributes
- ✅ All iframes have `title` attributes
- ✅ Interactive elements have proper roles and keyboard support
- ✅ IDs use kebab-case
- ✅ Class names use kebab-case

### 6. Component Organization
- ✅ Separation of concerns: shared components in `common/`
- ✅ App-specific code stays in `app/`
- ✅ No dependencies from `common/` to `app/`
- ✅ Single responsibility per component

### 7. State Management
- ✅ Local state with `useState` and `useReducer`
- ✅ No Redux used (not needed for this project)
- ✅ Context API ready for future global state

## Import Structure

### Before (❌ Old Structure)
```typescript
import Header from '@/components/Header'
import Hero from '@/components/Hero'
```

### After (✅ New Structure)
```typescript
import { Header, Hero, VideoGrid, Footer } from "@/common";
```

## Benefits of This Structure

1. **Clean Imports**: Barrel exports make imports cleaner
2. **Type Safety**: Centralized types prevent duplication
3. **Scalability**: Easy to add new features without refactoring
4. **Maintainability**: Clear separation of concerns
5. **Consistency**: Follows Next.js and React best practices
6. **Accessibility**: Proper ARIA labels and semantic HTML

## Next Steps for Adding Features

### Adding a New Component
1. Create file in `src/common/components/` using kebab-case
2. Export from `src/common/components/index.ts`
3. Import using barrel export: `import { NewComponent } from "@/common"`

### Adding New Types
1. Add to `src/common/types/index.ts`
2. Import using `type` keyword: `import type { NewType } from "@/common/types"`

### Adding App-Specific Features
1. Create folder in `src/app/` for new routes
2. Add components in `src/app/[route]/components/`
3. Keep shared logic in `src/common/`
