# 🛰️ ashTourguide – AI-Powered Wearable Landing Page

**ashTourguide** is a futuristic, tech-heavy landing page built with **Next.js App Router**, **Tailwind CSS**, and **shadcn/ui** components.  
It showcases the ashTourguide device – a next-gen AI wearable that redefines how tourists explore the world using spatial computing, AR overlays, and edge inference.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 14+ (App Router)](https://nextjs.org/docs)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide](https://lucide.dev/)
- **Form Handling:** React Hook Form (for newsletter waitlist)

---

## 🧠 Project Structure

/ashTourguide
├── app/ # App router pages and layouts
├── components/ # Reusable UI components (Hero, FeatureCard, Tabs, etc.)
├── public/ # Static assets (images, logos, mockups)
├── styles/ # Global styles (if any)
├── ui/ # shadcn/ui components
├── lib/ # Utility functions (optional)
├── README.md # Project documentation
├── tailwind.config.js # Tailwind CSS configuration
├── shadcn.config.ts # shadcn/ui configuration
└── package.json # Project metadata and dependencies

## 🖼️ Pages & Sections

### ✅ Hero Section
- Headline, subheadline
- CTA Buttons: `Preorder Now`, `See it in Action`
- Product visualization placeholder

### ✅ Features Grid
- Cards for each cutting-edge tech feature:
  - UWB Navigation
  - AR Multilingual Agent
  - LIDAR + SLAM Mapping
  - Neural Path Suggestion

### ✅ Tech Specs Tabs
- Use `Tabs` to view Sensors, Neural Core, Connectivity, HUD, Battery
- Each tab displays a jargon-rich list of specifications

### ✅ How It Works
- Timeline or vertical stepper showing ashTourguide’s AI processing pipeline

### ✅ Testimonials
- Carousel or cards from early testers like “Edgewalker #009 – Saito”

### ✅ Final CTA
- Email waitlist form (with form validation)
- Footer with minimalist design

---

## 📦 Getting Started

```bash
git clone https://github.com/yourusername/ashTourguide.git
cd ashTourguide

# Install dependencies
pnpm install
# or
npm install
# or
yarn install

# Start the dev server
npm run dev
