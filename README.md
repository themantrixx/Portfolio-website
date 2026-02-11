# Portfolio Website - The Modern Geek

A futuristic, "Matrix"-inspired personal portfolio website built for the modern developer. Features a cyberpunk aesthetic with holographic effects, digital rain, and a terminal-style interface, all while maintaining a clean and responsive user experience.

## 🚀 Features

-   **Cyberpunk Aesthetic:** "Modern Geek" theme with neon accents (Cyan, Purple, Pink) on a deep dark background.
-   **Visual Effects:**
    -   **Digital Rain:** Matrix-style falling code animation.
    -   **Holographic Projections:** 3D-tilt effects and scanline overlays on project cards.
    -   **CRT Monitor Vibe:** Subtle scanlines and flicker effects.
    -   **Glassmorphism:** Frosted glass UI elements for a modern touch.
-   **Mobile-First Experience:** Optimized touch interactions for project cards, ensuring seamless navigation on phones and tablets.
-   **Interactive UI:** Smooth scrolling, hover glitches, and magnetic buttons.
-   **Social Media Integration:** Easily connect via GitHub, LinkedIn, Twitter, and Email.
-   **Fully Responsive:** Optimized for all devices, from mobile phones to ultrawide monitors.
-   **Performance First:** Built with Vite for instant server start and lightning-fast HMR.

## 🛠️ Tech Stack

-   **Core:** React 19
-   **Build Tool:** Vite
-   **Styling:** Tailwind CSS v4 + Custom CSS Variables
-   **Animations:** Framer Motion + CSS Keyframes
-   **Icons:** Lucide React
-   **Forms:** Web3Forms (for contact form)

## 📂 Project Structure

-   `src/data.js`: Centralized configuration for portfolio content (projects, skills, social links, etc.).
-   `src/components/`: Reusable UI components for each section.
-   `src/App.jsx`: Main application layout.
-   `src/index.css`: Global styles and Tailwind configuration.

## 🏃‍♂️ Getting Started

### Prerequisites

-   Node.js (v18+ recommended)
-   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Explore:** Open [http://localhost:5173](http://localhost:5173) to view the site.

## ⚙️ Customization

This portfolio is designed to be easily customizable. All personal data, projects, and skills are stored in `src/data.js`.

1.  Open `src/data.js`.
2.  Update the `portfolioData` object with your details:
    -   **Name, Role, Tagline, About**: Personal information.
    -   **Social Links**: Update generic URLs to your profiles.
    -   **Skills**: Add or remove skills and categories.
    -   **Projects**: Replace sample projects with your own work.
    -   **Experience & Education**: Update your professional journey.

## 📧 Contact Configuration (Web3Forms)

The contact form is fully configured with **Web3Forms**. Submissions will be sent directly to your email.

## 📦 Building for Production

```bash
npm run build
```

The output will be in the `dist` folder.

## 📄 License

MIT License
