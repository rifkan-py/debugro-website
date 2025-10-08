# Debugro Website - GitHub Copilot Instructions

This file contains comprehensive instructions for GitHub Copilot to help with code generation and suggestions for the Debugro company website built with Astro.

## Project Overview

This is a modern company website for Debugro, built with Astro, showcasing software development services. The website emphasizes professional design, exceptional user experience, and technical excellence.

## Technology Stack

- **Framework**: Astro 4.x
- **Styling**: TailwindCSS + CSS Variables
- **TypeScript**: Full TypeScript support
- **Components**: Astro components (.astro files)
- **Build Tool**: Vite (via Astro)
- **Package Manager**: pnpm

## Design System & Color Palette

### Primary Color Variables
```css
:root {
    /* Neutral / Base */
    --color-bg: #121212;
    --color-surface: #1e1e1e;
    --color-border: #2c2c2c;
    --color-text: #e0e0e0;
    --color-text-muted: #a0a0a0;

    /* Primary (branding) */
    --color-primary: #208cba;
    --color-primary-light: #dcf1fa;
    --color-primary-light-dark: #002d40;
    --color-primary-dark: #00151ec4;

    /* Secondary / Accent */
    --color-secondary: #22d3ee;
    --color-secondary-light: #67e8f9;
    --color-secondary-dark: #0e7490;

    /* Success / Warning / Error */
    --color-success: #16a34a;
    --color-warning: #f59e0b;
    --color-error: #dc2626;
}
```

### Usage Guidelines
- **Primary Blue**: Main CTAs, links, interactive elements
- **Primary Dark**: Cards, modals, containers
- **Secondary Green**: Success states, highlights
- **Accent Amber**: Special highlights, warnings
- **Background**: Main page background
- **Surface**: Card backgrounds, sections

## UI/UX Best Practices

### 1. Component Structure
```astro
---
// Always include TypeScript interfaces for props
interface Props {
  title: string;
  description?: string;
  variant?: 'primary' | 'secondary';
}

const { title, description, variant = 'primary' } = Astro.props;
---

<div class="component-container">
  <!-- Component content -->
</div>

<style>
  /* Scoped styles when needed */
</style>
```

### 2. Responsive Design Patterns
- **Mobile-first approach**: Start with mobile styles, then scale up
- **Breakpoints**: sm:640px, md:768px, lg:1024px, xl:1280px, 2xl:1536px
- **Grid system**: Use CSS Grid and Flexbox appropriately
- **Typography**: Responsive font sizes using clamp() or Tailwind responsive utilities

### 3. Animation & Transitions
```css
/* Standard transition timing */
.transition-smooth {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover states */
.hover-lift {
  transform: translateY(0);
  transition: transform 0.2s ease;
}

.hover-lift:hover {
  transform: translateY(-2px);
}
```

### 4. Accessibility Standards
- Always include `alt` attributes for images
- Use semantic HTML elements
- Maintain proper heading hierarchy (h1 → h2 → h3)
- Ensure color contrast ratio ≥ 4.5:1
- Include focus states for interactive elements
- Use `aria-` attributes when needed

## Code Generation Guidelines

### 1. Astro Components
When creating Astro components, follow this structure:

```astro
---
// Import statements
import Layout from '../layouts/Layout.astro';

// TypeScript interfaces
interface Props {
  // Define props here
}

// Component logic
const { } = Astro.props;

// SEO data when applicable
const seoData = {
  title: "",
  description: "",
  keywords: "",
  canonicalUrl: ""
};
---

<!-- HTML structure -->
<Layout seoData={seoData}>
  <!-- Component content -->
</Layout>

<script>
  // Client-side JavaScript when needed
</script>

<style>
  /* Scoped styles when necessary */
</style>
```

### 2. CSS Classes & Styling
- **Prefer Tailwind classes** over custom CSS
- **Use CSS variables** for colors: `text-[var(--color-primary)]`
- **Component containers**: `bg-[var(--color-primary-dark)]/80 backdrop-blur-sm rounded-2xl border border-[var(--color-primary-light-dark)]/30`
- **Cards**: `p-6 md:p-8 rounded-xl shadow-lg`
- **Buttons**: `px-6 py-3 rounded-lg font-medium transition-all duration-300`

### 3. Interactive Elements

#### Buttons
```astro
<!-- Primary Button -->
<button class="bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg hover:bg-[var(--color-primary-light)] transition-all duration-300 font-medium">
  Button Text
</button>

<!-- Secondary Button -->
<button class="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-3 rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 font-medium">
  Button Text
</button>
```

#### Forms
```astro
<div>
  <label for="input-id" class="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
    Label Text
  </label>
  <input
    type="text"
    id="input-id"
    class="w-full px-4 py-3 bg-[var(--color-primary-dark)]/50 border border-[var(--color-primary-light-dark)]/30 rounded-lg text-white placeholder-gray-400 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:outline-none transition-all duration-200"
    placeholder="Placeholder text"
  />
</div>
```

### 4. Layout Components
- **Header**: Fixed/sticky navigation with backdrop blur
- **Footer**: Multi-column layout with company info, links, contact
- **Sections**: Full-width with proper padding and max-width containers
- **Grid layouts**: Responsive grid systems for content

### 5. Performance Optimization
- **Images**: Use Astro's Image component with proper optimization
- **Lazy loading**: Implement for images and heavy content
- **Code splitting**: Leverage Astro's automatic code splitting
- **Minimal JavaScript**: Prefer CSS solutions over JavaScript when possible

## Content Guidelines

### 1. Copy Tone
- **Professional yet approachable**
- **Technical accuracy without jargon**
- **Action-oriented language**
- **Clear value propositions**

### 2. SEO Best Practices
- **Unique meta titles and descriptions**
- **Proper heading structure**
- **Alt text for all images**
- **Structured data when applicable**
- **Internal linking strategy**

## File Organization

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── sections/     # Page sections
│   └── forms/        # Form components
├── layouts/
│   └── Layout.astro  # Main layout
├── pages/            # Route pages
├── styles/
│   ├── global.css    # Global styles
│   └── components/   # Component-specific styles
└── assets/           # Images, icons, etc.
```

## Development Workflow

### 1. Component Development
1. Create interface for props
2. Implement responsive design
3. Add hover states and animations
4. Test accessibility
5. Optimize performance

### 2. Quality Checklist
- [ ] Mobile responsiveness tested
- [ ] Accessibility compliance
- [ ] Color contrast verified
- [ ] Performance optimized
- [ ] SEO meta data included
- [ ] Cross-browser compatibility

## Common Patterns

### 1. Hero Sections
```astro
<section class="relative min-h-screen flex items-center justify-center bg-[var(--color-background)] overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10"></div>
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <!-- Hero content -->
  </div>
</section>
```

### 2. Feature Cards
```astro
<div class="bg-[var(--color-primary-dark)]/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-[var(--color-primary-light-dark)]/30 hover:border-[var(--color-primary)]/50 transition-all duration-300 group">
  <!-- Card content -->
</div>
```

### 3. Modal/Dialog
```astro
<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
  <div class="w-full max-w-2xl bg-[var(--color-primary-dark)] rounded-2xl p-6 transform transition-all duration-300">
    <!-- Modal content -->
  </div>
</div>
```

## Browser Support
- **Modern browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Progressive enhancement**: Graceful degradation for older browsers
- **Mobile**: iOS 14+, Android 10+

## Testing Requirements
- **Responsive design**: Test on mobile, tablet, desktop
- **Accessibility**: Screen readers, keyboard navigation
- **Performance**: Lighthouse scores 90+
- **Cross-browser**: Major browsers and versions

Remember to always prioritize user experience, accessibility, and performance in every component and page you create.
