# ADmyBRAND AI Suite - Landing Page

A modern, responsive landing page for ADmyBRAND AI Suite built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

### Core Landing Page Sections
- **Hero Section** - Compelling headline with call-to-action buttons
- **Features Section** - AI-powered marketing tools showcase
- **Interactive Pricing Calculator** - Dynamic pricing based on usage
- **Pricing Plans** - Three-tier pricing structure (Starter, Pro, Enterprise)
- **Demo Video Section** - Product demonstration with video player
- **Blog/Resources Section** - Content hub with newsletter signup
- **Testimonials** - Customer success stories
- **FAQ Section** - Frequently asked questions with accordion
- **Footer** - Links and company information

### Technical Features
- **Light Theme Design** - Clean, modern white/gray color scheme
- **Responsive Design** - Mobile-first approach, works on all devices
- **Smooth Animations** - Framer Motion animations throughout
- **Interactive Elements** - Calculators, video controls, form inputs
- **Glassmorphism Effects** - Modern glass-like card designs
- **TypeScript** - Full type safety and better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vide-coding
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/                    # Shadcn UI components
│   └── landing/              # Landing page components
│       ├── header.tsx
│       ├── hero-section.tsx
│       ├── features-section.tsx
│       ├── pricing-section.tsx
│       ├── interactive-pricing-calculator.tsx
│       ├── demo-video-section.tsx
│       ├── blog-section.tsx
│       ├── testimonials-section.tsx
│       ├── faq-section.tsx
│       └── footer.tsx
├── app/
│   ├── globals.css           # Global styles and utilities
│   ├── layout.tsx
│   └── page.tsx              # Main landing page
```

## 🎨 Customization

### Colors & Theme
The project uses a light theme with custom CSS utilities:
- `glass-light` - Light glassmorphism effect
- `gradient-bg-light` - Light gradient backgrounds
- `animate-float` - Floating animation
- `animate-pulse-glow` - Glowing pulse effect

### Adding New Sections
1. Create a new component in `src/components/landing/`
2. Import and add to `app/page.tsx`
3. Follow the existing pattern for styling and animations

### Modifying Content
- Update text content directly in component files
- Modify pricing in `pricing-section.tsx`
- Update FAQ items in `faq-section.tsx`
- Change testimonials in `testimonials-section.tsx`

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email support@admybrand.com or create an issue in the repository. 