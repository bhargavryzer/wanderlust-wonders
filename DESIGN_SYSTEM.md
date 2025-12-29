# Praxis Design System

## Overview
This document defines the design system for the Praxis platform, ensuring consistency across all components and pages.

## Color Palette

### Primary Colors
- **Purple Base**: `#7c3aed` (purple-600)
- **Purple Light**: `#a78bfa` (purple-400)
- **Purple Dark**: `#6d28d9` (purple-800)
- **Blue Accent**: `#3b82f6` (blue-500)
- **Blue Dark**: `#1e40af` (blue-800)

### Neutral Colors
- **Slate Background**: `#f8fafc` (slate-50) to `#475569` (slate-600)
- **Gray Background**: `#f9fafb` (gray-50) to `#6b7280` (gray-500)
- **Black**: `#000000`
- **White**: `#ffffff`

### Semantic Colors
- **Text Primary**: `#ffffff` (on dark backgrounds)
- **Text Secondary**: `rgba(255, 255, 255, 0.7)` (white/70)
- **Text Tertiary**: `rgba(255, 255, 255, 0.6)` (white/60)
- **Text Light**: `#2d1b4e` (on light backgrounds)

## Gradients

### Primary Background Gradient
```css
background: linear-gradient(135deg, #7c3aed 0%, #8b5cf6 25%, #a78bfa 50%, #7c3aed 75%, #6d28d9 100%);
```

### Button Gradients
- **Primary**: `from-purple-600 to-blue-600`
- **Secondary**: `from-slate-100 via-gray-100 to-slate-100`

## Typography

### Font Families
- **Primary**: `font-serif` (for headings and brand elements)
- **Secondary**: Default sans-serif (for body text and UI elements)

### Font Sizes
- **Hero**: `text-6xl` to `text-8xl` (mobile to desktop)
- **Headings**: `text-3xl` to `text-5xl`
- **Subheadings**: `text-xl` to `text-2xl`
- **Body**: `text-base` to `text-lg`
- **Small**: `text-sm`

### Font Weights
- **Normal**: `font-normal` (400)
- **Medium**: `font-medium` (500)
- **Semibold**: `font-semibold` (600)
- **Bold**: `font-bold` (700)

## Spacing

### Base Unit: 4px (0.25rem)
- **xs**: `p-2` (8px)
- **sm**: `p-4` (16px)
- **md**: `p-6` (24px)
- **lg**: `p-8` (32px)
- **xl**: `p-12` (48px)
- **2xl**: `p-16` (64px)

### Component Spacing
- **Section Padding**: `py-20 lg:py-32`
- **Card Padding**: `p-6` to `p-8`
- **Button Padding**: `px-6 py-3` to `px-8 py-4`

## Border Radius

### Scale
- **Small**: `rounded-lg` (8px) - Buttons, inputs
- **Medium**: `rounded-xl` (12px) - Cards, badges
- **Large**: `rounded-2xl` (16px) - Modal containers, large cards
- **Extra Large**: `rounded-3xl` (24px) - Hero sections, special containers
- **Full**: `rounded-full` - Pills, circular elements

## Buttons

### Primary Button
```css
bg-white text-[#2d1b4e] hover:bg-white/90 font-semibold px-8 py-4 rounded-full shadow-lg shadow-purple-500/20
```

### Secondary Button (Navbar Style)
```css
bg-gradient-to-r from-slate-100 via-gray-100 to-slate-100 border border-black text-black px-6 py-3 rounded-xl font-semibold hover:from-slate-200 hover:to-gray-200
```

### Outline Button
```css
border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full
```

## Animations

### Standard Transitions
```css
transition-all duration-300
```

### Hover Effects
- **Scale**: `hover:scale-105`
- **Translate**: `hover:translate-y-[-2px]`
- **Shadow**: `hover:shadow-xl`

### Motion Variants
```javascript
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};
```

## Responsive Breakpoints

### Standard Breakpoints
- **Mobile**: `sm:` (640px+)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)
- **Large Desktop**: `xl:` (1280px+)

### Responsive Patterns
- **Typography**: `text-3xl sm:text-4xl md:text-5xl`
- **Spacing**: `p-4 sm:p-6 lg:p-8`
- **Layout**: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`

## Background Patterns

### Dotted Grid
```css
backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)';
backgroundSize: '24px 24px';
```

### Gradient Orbs
```css
/* Large orb */
w-[600px] h-[600px] bg-purple-400/30 rounded-full blur-3xl

/* Medium orb */
w-[500px] h-[500px] bg-violet-600/40 rounded-full blur-3xl
```

## Shadows

### Standard Shadows
- **Small**: `shadow-lg`
- **Medium**: `shadow-xl`
- **Large**: `shadow-2xl`
- **Colored**: `shadow-purple-500/20`

## Backdrop Effects

### Glassmorphism
```css
backdrop-blur-xl bg-white/10 border border-white/20
```

### Blur Effects
- **Light**: `backdrop-blur-sm`
- **Medium**: `backdrop-blur-md`
- **Heavy**: `backdrop-blur-xl`

## Component States

### Hover States
- All interactive elements should have hover states
- Use consistent transition timing (300ms)
- Include scale, color, or shadow changes

### Focus States
- Use `focus:outline-none focus:ring-2 focus:ring-purple-400/50`
- Ensure accessibility with visible focus indicators

### Disabled States
- Use `disabled:opacity-50 disabled:cursor-not-allowed`
- Maintain visual hierarchy for disabled elements

## Loading States

### Loading Spinner Component
```typescript
<LoadingSpinner size="md" color="white" />
```

**Props:**
- `size`: "sm" (16px), "md" (24px), "lg" (32px)
- `color`: "white", "black", "purple"
- `className`: Additional CSS classes

### Loading Button Component
```typescript
<LoadingButton
  isLoading={loading}
  loadingText="Submitting..."
  variant="primary"
  size="md"
  spinnerColor="white"
>
  Submit
</LoadingButton>
```

**Props:**
- `isLoading`: Boolean loading state
- `loadingText`: Text to show during loading
- `variant`: "primary", "secondary", "outline"
- `size`: "sm", "md", "lg"
- `spinnerColor`: Color of the spinner

### Loading Page Component
```typescript
<LoadingPage message="Loading dashboard..." size="lg" />
```

**Props:**
- `message`: Custom loading message
- `size`: Size of the spinner

## Usage Guidelines

### Do's
- Use consistent spacing based on the 4px grid
- Apply appropriate border radius for component size
- Use semantic color tokens for consistency
- Include hover states on all interactive elements
- Follow responsive breakpoint patterns
- Use LoadingButton for form submissions
- Use LoadingPage for full-page loading states

### Don'ts
- Don't mix different gradient styles without reason
- Don't use arbitrary spacing values
- Don't skip hover states on interactive elements
- Don't use inconsistent animation durations
- Don't break the established visual hierarchy
- Don't show loading states without user feedback

## Implementation Notes

- All components should import from this design system
- Use CSS variables for colors when possible
- Test designs across all breakpoints
- Ensure accessibility with proper contrast ratios
- Maintain consistency between pages and components
