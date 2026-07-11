# Nexit Web Application

A modern, highly aesthetic, and fully responsive web application built with Next.js, Tailwind CSS, Framer Motion, and Lenis smooth scrolling.

## ✨ Features

- **Next.js App Router**: Utilizing the latest features of Next.js for seamless routing and rendering.
- **Buttery Smooth Scrolling**: Integrated with `lenis` for a premium, momentum-based scrolling experience.
- **Beautiful Animations**: Complex micro-interactions, entrance effects, and smooth page load animations powered by `framer-motion`.
- **Modern UI Design**: Glassmorphism, tailored teal gradients, and a sleek dark aesthetic built with Tailwind CSS.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices featuring a custom animated mobile navigation drawer.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll:** [Lenis](https://github.com/darkroomengineering/lenis)
- **Icons:** [Lucide React](https://lucide.dev/)

## 🚀 Setup Instructions

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (version 18 or higher is recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shaamil777/nexit.git
   cd nexit
   ```

2. **Install dependencies:**
   Using npm (default):
   ```bash
   npm install
   ```
   *(Alternatively, you can use `yarn install` or `pnpm install`)*

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the Application:**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 📁 Project Structure

- `app/` - Contains the core Next.js App Router files (`page.tsx`, `layout.tsx`, `globals.css`).
- `components/` - Modular, reusable UI components.
  - `home/` - Landing page sections (Hero, About, Services, Experience, AppShowCase, etc.).
  - `layout/` - Global structure elements (Navbar, Footer, LoadingScreen, SmoothScrolling wrapper).
- `public/` - Static assets including images and svgs.
