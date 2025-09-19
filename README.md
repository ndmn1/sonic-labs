# Sonic Labs - Online Learning Platform

A modern, responsive online learning platform built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components. This project replicates the design from the provided Figma mockup with a focus on clean code, performance, and user experience.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Course Management**: Display and filter courses by category and difficulty level
- **Search Functionality**: Real-time search through course titles and descriptions
- **Interactive Elements**: Hover animations and smooth transitions
- **TypeScript**: Full type safety throughout the application
- **Testing**: Unit tests for core components
- **Performance**: Optimized with Next.js 15 and React 19

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Testing**: Jest + React Testing Library
- **Font**: Urbanist (Google Fonts)

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd sonic-labs
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

## 🧪 Testing

Run the test suite:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind configuration
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── __tests__/           # Component tests
│   ├── course-card.tsx      # Course card component
│   ├── courses-section.tsx  # Courses listing and filtering
│   ├── footer.tsx           # Footer component
│   ├── hero-section.tsx     # Hero section with feature cards
│   ├── navigation.tsx       # Navigation bar
│   └── newsletter-section.tsx # Newsletter signup
└── lib/
    ├── data/
    │   └── courses.ts       # Course data and types
    └── utils.ts             # Utility functions
```

## 🎨 Design System

The application follows a consistent design system based on the Figma mockup:

- **Colors**: Dark theme with gradient accents
- **Typography**: Urbanist font family
- **Spacing**: Consistent spacing scale using Tailwind
- **Components**: Reusable shadcn/ui components
- **Animations**: Subtle hover effects and transitions

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Desktop**: > 1024px

## 🎯 Key Components

### CourseCard

- Displays course information with hover animations
- Supports different difficulty levels (Beginner, Intermediate, Advanced)
- Includes rating, student count, and pricing

### CoursesSection

- Grid layout for course display
- Search functionality
- Category and level filtering
- Responsive design

### Navigation

- Logo and navigation links
- Login button with gradient styling
- Notification bell with indicator

### HeroSection

- Feature cards with icons
- Gradient background effects
- Responsive typography

## 🚀 Deployment

The application is ready for deployment on platforms like Vercel, Netlify, or any other Next.js-compatible hosting service.

**Build the application**

   ```bash
   npm run build
   ```

## 🖼️ Design & Live Demo

- [Figma Design File](https://www.figma.com/design/TKRHNmJTAsyEU2WvtHMEeG/Sonic-Labs-assignment)
- [Live Vercel Deployment](https://sonic-labs-one.vercel.app)
