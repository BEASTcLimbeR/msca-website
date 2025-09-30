# 🏔️ Maharashtra Sports Climbing Association Website

> **India's Premier Olympic-Level Climbing Facility** - Interactive 3D Website

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-3D-orange?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Features

### 🎮 Interactive 3D Experience
- **Immersive 3D Climbing Wall** - Explore our Olympic-level facility in virtual reality
- **Animated Climbing Holds** - 24 dynamic holds with realistic physics
- **Floating Equipment** - Interactive rope and carabiner animations
- **Professional Lighting** - Multiple light sources for realistic rendering
- **Smooth Controls** - Drag to rotate, scroll to zoom, auto-rotation

### 🎨 Modern Design System
- **Custom Climbing Theme** - Orange to red gradients inspired by climbing gear
- **Responsive Design** - Perfect on desktop, tablet, and mobile
- **Smooth Animations** - Framer Motion powered transitions
- **Accessible Components** - Built with Radix UI for accessibility
- **Dark/Light Mode** - Professional theming system

### 🚀 Performance Optimized
- **Next.js 15** - Latest React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Three.js** - Hardware-accelerated 3D graphics
- **Optimized Bundle** - Fast loading and smooth performance

## 🛠️ Tech Stack

### Core Framework
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe JavaScript

### 3D Graphics
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers and abstractions
- **@react-three/postprocessing** - Post-processing effects

### UI & Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

### Forms & Validation
- **React Hook Form** - Performant forms
- **Zod** - TypeScript-first validation
- **@hookform/resolvers** - Form validation resolvers

### Development Tools
- **ESLint** - Code linting
- **Leva** - GUI controls for debugging
- **React Intersection Observer** - Scroll animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/BEASTcLimbeR/msca-website.git
   cd msca-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Project Structure

```
msca-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   │   ├── button.tsx    # Button component
│   │   │   └── card.tsx      # Card component
│   │   ├── ClimbingScene.tsx # 3D climbing scene
│   │   └── SimpleClimbingScene.tsx # Main 3D component
│   └── lib/                   # Utility functions
│       └── utils.ts          # Helper functions
├── public/                    # Static assets
├── tailwind.config.ts        # Tailwind configuration
└── package.json              # Dependencies
```

## 🎮 3D Scene Features

### Interactive Elements
- **Climbing Wall** - 8x12 unit wall with realistic materials
- **Climbing Holds** - 24 animated holds in 4 different colors
- **Equipment** - Floating rope and carabiner with physics
- **Lighting** - Ambient, directional, and point lights
- **Shadows** - Realistic shadow casting

### Controls
- **Mouse Drag** - Rotate camera around the scene
- **Scroll Wheel** - Zoom in/out (4-15 units range)
- **Auto Rotation** - Gentle automatic camera movement
- **Touch Support** - Mobile-friendly controls

## 🎨 Customization

### Colors
The website uses a custom climbing-themed color palette:
- **Climbing Orange** - Primary brand color (#f97316)
- **Rock Gray** - Secondary colors for walls
- **Hold Colors** - Orange, yellow, teal, and red for holds

### Animations
- **Climbing Motion** - Holds move with climbing-like physics
- **Breathing Wall** - Subtle wall scaling animation
- **Floating Equipment** - Rope and carabiner floating effects
- **Smooth Transitions** - Framer Motion powered animations

## 📱 Responsive Design

- **Desktop** - Full 3D experience with all features
- **Tablet** - Optimized controls and performance
- **Mobile** - Touch-friendly interface with reduced complexity

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push
3. Get a custom domain and SSL certificate

### Other Platforms
- **Netlify** - Static site hosting
- **AWS Amplify** - Full-stack deployment
- **Railway** - Simple deployment platform

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏔️ About Maharashtra Sports Climbing Association

The Maharashtra Sports Climbing Association is India's premier climbing facility, featuring:
- **Olympic-Level Climbing Wall** - World-class training facility
- **Professional Training** - Expert coaches and programs
- **Competition Ready** - Hosts national and international events
- **Community Focus** - Building climbing culture in India

## 📞 Contact

- **Website**: [msca-website.vercel.app](https://msca-website.vercel.app)
- **Email**: info@msca.org
- **Location**: Maharashtra, India

---

**Built with ❤️ for the climbing community in India** 🏔️

*Scaling New Heights • Building Champions • Olympic-Level Excellence*