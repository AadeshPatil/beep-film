# Copilot Review Instructions

Please use these internal coding guidelines to review pull requests in **Next.js App Router 14 projects** like Aspire Mobile or AM2. Focus your review on:

- File and directory structure
- Component and hook naming
- TypeScript type and enum usage
- Commenting and documentation
- Accessibility (ARIA roles, labels, IDs)
- Code formatting and styling
- Best practices for state management and component organization

If a file violates any of these, leave a clear, helpful comment in the pull request.

---

# Copilot Code Review Instructions

## File and Directory Structure

Example structure for a Next.js App Router 14 project:

```plaintext
/src
  /app
    /dashboard
      /[id]
        - page.tsx
      - page.tsx
      /components
        - dashboard-widget.tsx
      /services
        - dashboard-service.ts
    /login
      - page.tsx
    /layout
      - layout.tsx
  /common
    /components
      - button.tsx
      - input.tsx
      - index.ts
    /context
      - auth-context.tsx
      - index.ts
    /reducers
      - auth-reducer.ts
      - index.ts
    /redux
      /features
        /auth
          - auth-slice.ts
          - index.ts
      - store.ts
      - root-reducer.ts
      - index.ts
    /styles
      - globals.css
      - index.ts
    /types
      - index.ts
    /utils
      - api.ts
      - helpers.ts
      - index.ts
```

- Each folder should have an `index.ts` file for clean imports.
- App-specific components and services should stay inside the relevant app folder.
- Shared code goes in `common`.
- Anything in `common` should not have dependencies on app-specific code.

---

## Naming Conventions

### Files & Folders

- Use **kebab-case** for all file and directory names
  Example: `user-profile`, `auth-slice.ts`

### Components

- File names: kebab-case
- Component names: **PascalCase**
- Include the `"use client"` directive when needed
- Page.tsx should not have `"use client"`

### Types & Interfaces

- Use **PascalCase** for interfaces and types. (no `I` prefix)
  Example: `interface User`, `type AuthState`

### Enums

- Enum name: PascalCase
- Enum values: SCREAMING_SNAKE_CASE
  Example: `enum UserRole { ADMIN = "Admin" }`

### Constants & Variables

- Constants: SCREAMING_SNAKE_CASE
- Variables: camelCase
- CSS-in-JS variables: camelCase

### Functions, Hooks & Context

- Hooks: camelCase (e.g., `useAuth`)
- Functions: camelCase
- Contexts and providers: PascalCase (e.g., `AuthContext`, `AuthProvider`)

---

## Accessibility

- ARIA labels: sentence case (`aria-label="Submit form"`)
- Use appropriate roles (`role="navigation"`, `role="main"`)
- Use `aria-labelledby` and `aria-describedby` when relevant
- IDs: kebab-case and unique (`main-content`)
- Class names: prefer **kebab-case**, optionally follow **BEM**
- Style: use MUI Styled Components and sass

---

## Best Practices

### Component Organization

- Each component should have a single responsibility
- Separate logic and UI (presentational vs container components)
- Reuse common UI components from `common/components`

### State Management

- Use `useState` or `useReducer` for local state
- Use Context API for global shared state
- Avoid Redux unless absolutely necessary

### Type Safety

- Always define prop types and state using interfaces or types
