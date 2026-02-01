# Rules - React + Tailwind Enforcement Layer (STRICT)

## FRAMEWORK CONSTRAINTS

This project uses:

- React (functional components only)
- Tailwind CSS for styling
- Pegasus Design System Pro as UI source of truth

🚫 DO NOT introduce other UI libraries (MUI, Chakra, Ant, etc.)
🚫 DO NOT introduce inline styles
🚫 DO NOT introduce custom CSS unless explicitly requested
🚫 DO NOT invent utility classes not aligned with Figma values

---

## REACT RULES (MANDATORY)

### Component Structure

- Use functional components only
- Use named exports unless explicitly told otherwise
- Keep components small and composable
- One visual component per file unless Figma groups them together

Example (preferred):

```tsx
export function DashboardMetricCard() {
  return (...)
}
```

🚫 Do NOT:

- Over-abstract prematurely
- Create “generic” components if Figma shows a specific variant
- Merge multiple Figma components into one React component

---

## STATE & LOGIC SEPARATION

Rules:

- UI components should be presentational by default
- Business logic and data fetching should live outside UI components
- Do not mix layout logic with data transformation logic

If unsure:
➡️ Ask or flag instead of guessing.

---

## TAILWIND RULES (VERY STRICT)

### Design Fidelity

- Tailwind classes MUST map directly to Figma spacing, sizing, and typography
- Use exact spacing values (e.g. `gap-2`, `px-4`, `py-3`) only if they match Figma
- Do not “round” values for convenience

🚫 DO NOT:

- Approximate spacing (“this looks close enough”)
- Replace Figma spacing with arbitrary Tailwind values
- Use `flex-1` or `w-full` unless explicitly shown in Figma

---

### Colors

- Use only design-system color tokens
- Never hardcode hex values
- Never introduce new semantic colors

Example (preferred):

```tsx
bg-surface-primary text-content-secondary
```

🚫 Never:

```tsx
bg-[#0F172A]
```

---

### Typography

- Use only approved Tailwind typography utilities
- Font size, weight, and line-height MUST match Figma exactly
- No custom font stacks

If Tailwind config does not match Figma:
➡️ Flag it. Do NOT workaround.

---

## LAYOUT & RESPONSIVENESS

Rules:

- Layout must follow Figma breakpoints and structure
- Do not add responsiveness unless Figma explicitly defines it
- Desktop-first unless otherwise specified

🚫 DO NOT:

- Auto-stack elements on mobile unless Figma shows it
- Introduce hidden breakpoints or responsive tweaks

---

## COMPONENT-SPECIFIC ENFORCEMENT

### Buttons

- Use only defined button variants
- Respect hover / active / disabled states exactly
- No custom animations unless specified

### Inputs / Forms

- Placeholder, label, helper text spacing must match Figma
- Error and focus states must be implemented as designed

### Modals / Overlays

- Backdrop color, opacity, and blur must match Figma
- Close behavior must match Figma interaction

---

## CHARTS & DATA VISUALIZATION (CRITICAL)

🚨 Charts must be implemented to visually match Figma exactly.
🚨 No simplifications.
🚨 No “best practice” redesigns.

Rules:

- Match stroke width, spacing, radius, and colors
- Axis labels, ticks, and legends must be identical
- Animations only if explicitly shown

If a chart library cannot replicate Figma:
➡️ Flag the limitation. Do NOT redesign.

---

## NAMING CONVENTIONS

- Component names should mirror Figma component names
- Folder structure should reflect Figma hierarchy where possible

Example:

```
components/
  dashboard/
    DashboardMetricSquare.tsx
    DashboardMetricHorizontal.tsx
```

---

## AI BEHAVIOR OVERRIDES

When generating React + Tailwind code:

1. Check Figma first
2. Replicate structure and styling exactly
3. Prefer clarity over abstraction
4. Ask when ambiguous
5. Never invent UI or behavior

---

## FINAL ENFORCEMENT RULE

If the output does not look **pixel-identical** to Figma:
➡️ the implementation is incorrect.
