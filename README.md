# Bimba IFE – Next.js Landing Page

Modern, mobile-first landing page for Bimba IFE early education center.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **SCSS Modules** (component-scoped styling)
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Page assembly (imports all sections)
│   └── globals.scss        # Global reset, typography, keyframes
│
├── components/
│   ├── Navbar/             # Fixed navbar with scroll shadow
│   ├── HeroSection/        # Hero with floating bubbles & clouds
│   ├── WhySection/         # 4 feature cards
│   ├── AboutSection/       # About text + mosaic + stats ribbon
│   ├── ProgramsSection/    # 3 program cards with gradient banners
│   ├── ScheduleSection/    # Weekly schedule (horizontal scroll on mobile)
│   ├── RegistrationSection/# 4-step registration + WhatsApp CTA
│   ├── RulesSection/       # Terms & conditions cards
│   ├── ContactSection/     # Contact cards on orange background
│   ├── Footer/             # Brand + links + copyright
│   └── SectionReveal/      # Reusable scroll-reveal wrapper
│
├── hooks/
│   └── useScrollReveal.ts  # IntersectionObserver hook
│
└── styles/
    ├── variables.scss      # Colors, spacing, radii, shadows, breakpoints
    └── mixins.scss         # Responsive, flexbox, typography, card mixins
```

## Design System

### Colors
- `$sun` #FF6B1A — Primary orange
- `$honey` #FFB830 — Warm yellow
- `$sky` #35B8E0 — Sky blue
- `$leaf` #52C96B — Green
- `$berry` #A066D3 — Purple

### Fonts
- **Baloo 2** — Display/headings (playful, rounded)
- **Nunito** — Body text (friendly, readable)

### Breakpoints (mobile-first)
- `sm`: 480px
- `md`: 640px
- `lg`: 768px
- `xl`: 900px
- `2xl`: 1024px
- `3xl`: 1140px

## Animations (Framer Motion)

- **Hero**: staggered `slideUp` with spring easing
- **Clouds**: `cloudDrift` horizontal float
- **Stars**: continuous `spin`
- **Floating bubbles**: gentle `y` oscillation
- **Program card icons**: `float` up/down
- **Cards on scroll**: `useInView` triggered `fadeUp`
- **Hover states**: spring `translateY` + `rotate` on why cards
