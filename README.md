# Portfolio Website

> **Note**: Remember to set the GitHub repository description to:
> "Modern, responsive portfolio website showcasing projects and skills - built with Next.js 15, TypeScript, and Tailwind CSS"
> 
> And add topics: `nextjs`, `portfolio`, `typescript`, `tailwind-css`, `react`, `responsive-design`, `seo`

A modern, professional portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This portfolio showcases projects, skills, and professional experience with a focus on performance, accessibility, and responsive design.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Server-side rendering and optimized images
- **SEO Friendly**: Proper meta tags and structured data
- **Dark Mode Support**: Automatic dark/light mode switching
- **Type Safe**: Full TypeScript implementation
- **Accessibility**: WCAG compliant design patterns

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx          # About page
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact page
│   │   ├── projects/
│   │   │   ├── page.tsx          # Projects overview
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Individual project pages
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   └── components/
│       ├── ProjectCard.tsx       # Project card component
│       ├── CaseStudy.tsx         # Case study component
│       ├── TechStack.tsx         # Technology stack component
│       ├── Navigation.tsx        # Navigation component
│       └── Footer.tsx            # Footer component
├── public/                       # Static assets
├── .github/                      # GitHub configuration
└── ...config files
```

## 🛠️ Technologies Used

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React** - Component-based UI library

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Git** - Version control

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/M-LN/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information
1. Update personal details in:
   - `src/app/layout.tsx` - Site metadata
   - `src/app/page.tsx` - Hero section and featured projects
   - `src/app/about/page.tsx` - About information
   - `src/app/contact/page.tsx` - Contact information

### Projects
1. Update project data in:
   - `src/app/page.tsx` - Featured projects on home page
   - `src/app/projects/page.tsx` - All projects listing
   - `src/app/projects/[slug]/page.tsx` - Individual project details

### Styling
1. Customize colors and styling in:
   - `src/app/globals.css` - Global styles
   - Tailwind classes throughout components

### Components
- All reusable components are in `src/components/`
- Easy to customize and extend

## 🚢 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with automatic optimizations

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS
- Google Cloud
- Azure

## 📊 Performance

- **Core Web Vitals**: Optimized for excellent scores
- **SEO**: Built-in SEO optimization
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance**: Fast loading with code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📧 Contact

For questions or support, please reach out through the contact form on the website or via:
- GitHub: [@M-LN](https://github.com/M-LN)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and Tailwind CSS
