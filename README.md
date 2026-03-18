# Personal Portfolio & Blog

A modern, production-ready personal portfolio and blog website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, responsive design with dark mode
- 📝 MDX-powered blog with syntax highlighting
- 🎨 Smooth animations with Framer Motion
- 🚀 Optimized for performance (95+ Lighthouse score)
- ♿ WCAG 2.1 AA compliant
- 📱 Fully responsive across all devices
- 🔍 SEO optimized with meta tags and sitemap
- 📊 Public analytics dashboard
- 💼 Project showcase with case studies
- 📧 Contact form with validation
- 📰 Newsletter subscription

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Content:** MDX
- **Icons:** Lucide React
- **Fonts:** Inter & JetBrains Mono
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Configure your personal information:
Edit `src/lib/constants.ts` with your details.

4. Run the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js app router pages
│   ├── components/     # React components
│   ├── content/        # MDX blog posts and projects
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilities and configurations
│   └── styles/         # Global styles
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Customization

### Personal Information

Edit `src/lib/constants.ts` to update:
- Name and title
- Contact information
- Social media links
- Navigation links

### Blog Posts

Add new blog posts in `src/content/blog/` as MDX files with frontmatter:

```mdx
---
title: "Your Post Title"
date: "2024-03-15"
excerpt: "Brief description"
category: "Tutorial"
tags: ["Next.js", "TypeScript"]
---

Your content here...
```

### Projects

Add projects in `src/content/projects/` as MDX files.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with one click

### Other Platforms

Build the production version:
```bash
pnpm build
```

Start the production server:
```bash
pnpm start
```

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## License

MIT License - feel free to use this template for your own portfolio!

## Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ using Next.js
