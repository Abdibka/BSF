# PT Bintang Semesta Farma

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui + Radix UI
- **Icons:** Lucide React
- **Maps:** React Leaflet

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Freelance-BSF
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   ```

4. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm build
pnpm start
```

### Linting

```bash
pnpm lint
```

---

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── page.tsx           # Main homepage
│   ├── layout.tsx         # Root layout (metadata, fonts, providers)
│   ├── globals.css        # Global styles & CSS animations
│   ├── robots.ts          # SEO robots configuration
│   └── sitemap.ts         # SEO sitemap generation
│
├── components/            # React components
│   ├── header.tsx         # Navigation header
│   ├── hero-section.tsx   # Hero banner
│   ├── about-section.tsx  # Company introduction
│   ├── trust-badges.tsx   # License/certification badges
│   ├── services.tsx       # Services showcase
│   ├── product-categories.tsx  # Product category cards
│   ├── principals.tsx     # Partner companies carousel
│   ├── timeline.tsx       # Company journey timeline
│   ├── vision-mission.tsx # Vision, mission, core values
│   ├── advantages.tsx     # Competitive advantages
│   ├── network-map.tsx    # Interactive branch map
│   ├── gallery-section.tsx # Photo gallery
│   ├── contact-section.tsx # Contact information
│   ├── footer.tsx         # Footer
│   └── ui/                # Reusable UI components (shadcn/ui)
│
├── lib/                   # Utilities & context
│   ├── language-context.tsx  # Multi-language provider (ID/EN)
│   └── utils.ts           # Helper functions
│
├── hooks/                 # Custom React hooks
│   ├── use-mobile.ts      # Responsive design hook
│   └── use-toast.ts       # Toast notification hook
│
├── public/                # Static assets
│   ├── logo.png           # Company logo
│   └── [image folders]/   # Gallery images
│
└── docs/                  # Company documentation files
```

---

## App Directory Details

The `app/` directory uses Next.js App Router:

| File | Purpose |
|------|---------|
| `page.tsx` | Main homepage - renders all sections in order |
| `layout.tsx` | Root layout with metadata, fonts (Inter + Poppins), theme provider, and analytics |
| `globals.css` | Tailwind CSS imports, CSS variables for theming, and 20+ custom animations |
| `robots.ts` | Search engine crawler configuration |
| `sitemap.ts` | Auto-generated sitemap for SEO |

### Adding New Pages

To add a new page, create a folder in `app/`:

```
app/
└── about/
    └── page.tsx    # Accessible at /about
```

---

## Key Features

### Multi-Language Support

**To add/modify translations:**

1. Open `lib/language-context.tsx`
2. Find the `translations` object
3. Add or update translation keys:

```typescript
const translations = {
  id: {
    "hero.title": "Judul dalam Bahasa Indonesia",
    // ...
  },
  en: {
    "hero.title": "Title in English",
    // ...
  },
};
```

4. Use in components:

```tsx
const { t } = useLanguage();
return <h1>{t("hero.title")}</h1>;
```

### Interactive Map

The network map (`components/network-map.tsx`) uses React Leaflet to display branch locations.

**To update branch locations:**

1. Open `components/network-map.tsx`
2. Modify the `branches` array:

```typescript
const branches = [
  {
    name: "Jakarta",
    type: "pbf",
    coordinates: [-6.1447, 106.7283],
    address: "...",
    googleMapsUrl: "https://maps.google.com/...",
  },
  // Add more branches...
];
```

### Sections Customization

Each section is a separate component in `/components/`. To modify:

| Section | File | What to Change |
|---------|------|----------------|
| Hero Banner | `hero-section.tsx` | Background, title, subtitle |
| Trust Badges | `trust-badges.tsx` | Certification logos and text |
| About | `about-section.tsx` | Company description, stats |
| Timeline | `timeline.tsx` | Company milestones |
| Vision/Mission | `vision-mission.tsx` | Vision, mission, values |
| Advantages | `advantages.tsx` | Competitive advantage cards |
| Services | `services.tsx` | Service offerings |
| Products | `product-categories.tsx` | Product category cards |
| Partners | `principals.tsx` | Partner company logos |
| Gallery | `gallery-section.tsx` | Event photo galleries |
| Contact | `contact-section.tsx` | Address, phone, WhatsApp |

### Adding Gallery Images

1. Create a folder in `public/` with the event name
2. Add images to the folder
3. Update `gallery-section.tsx` to include the new folder

---

## Styling

### Theme Colors

The primary color scheme uses teal (`#4AB8D3`, `#1E8FAA`). Colors are defined as CSS variables in `app/globals.css`:

```css
:root {
  --primary: 190 65% 55%;
  --primary-foreground: 0 0% 100%;
  /* ... */
}
```

### Custom Animations

Available animations in `globals.css`:

- `fade-in-up` - Fade in while moving up
- `scale-in` - Scale from 0.9 to 1
- `slide-in-left` / `slide-in-right` - Slide from sides
- `float` - Floating effect
- `pulse-glow` - Pulsing glow effect
- `gradient-shift` - Animated gradient background

Use in components:

```tsx
<div className="animate-fade-in-up">Content</div>
```

---

## UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/) components located in `components/ui/`.

**Adding new shadcn components:**

```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add card
# etc.
```

---

## SEO Configuration

Metadata is configured in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "PT Bintang Semesta Farma",
  description: "...",
  keywords: ["pharmaceutical", "distributor", ...],
  // ...
};
```

Structured data (JSON-LD) for search engines is also included in the layout.

---

## Deployment

### Vercel

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically


---

## Scripts Reference

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

---

## License

Private project for PT Bintang Semesta Farma.
