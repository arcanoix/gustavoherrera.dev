# Gustavo Herrera – Personal Portfolio

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE.svg?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![React](https://img.shields.io/badge/React-19.x-61DAFB.svg?style=flat&logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

Personal developer portfolio and showcase for **Gustavo Herrera** ([@arcanoix](https://github.com/arcanoix)), Senior Fullstack Developer with 15+ years of experience. Built with Astro, React, TypeScript, and Tailwind CSS for speed, accessibility, and clean component architecture.

![Portfolio Cover](/images/cover.png)

---

## ✨ Features

- **Modern Architecture**: Fast static site generation powered by Astro 5 islands architecture.
- **Interactive Components**: Client-side interactive sections built with React 19, Tailwind CSS, and Radix UI primitives.
- **Dark / Light Mode**: Instant theme switching with local storage persistence and system preference fallback.
- **Projects Showcase**: Curated selection of real-world client platforms, open-source tools, and web applications.
- **Experience & Skills Timeline**: Chronological track record in software engineering, leadership, and core technical skills.
- **Dockerized Environment**: Ready-to-use Docker and Docker Compose configuration for quick local setup.

---

## 🛠️ Tech Stack

### Core & Frameworks

- [Astro 5](https://astro.build/) - Web framework for content-driven websites
- [React 19](https://react.dev/) - UI library for dynamic client components
- [TypeScript](https://www.typescriptlang.org/) - Strict typing and maintainability

### Styling & UI

- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling and theme tokens
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible component primitives
- [Lucide Icons](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) - Vector icon packs
- [Locomotive Scroll](https://github.com/locomotivemtl/locomotive-scroll) - Smooth scrolling

### Tooling & DevOps

- [Prettier](https://prettier.io/) with `prettier-plugin-astro` - Code formatting
- [Docker](https://www.docker.com/) & Docker Compose - Containerized development

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ or v20+ recommended)
- [npm](https://www.npmjs.com/) (or pnpm / yarn)
- _(Optional)_ [Docker](https://www.docker.com/) & Docker Compose

### Local Development

1. **Clone the repository:**

   ```bash
   git clone https://github.com/arcanoix/gustavoherrera.dev.git
   cd gustavoherrera.dev
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. Navigate to [http://localhost:4321](http://localhost:4321) in your browser.

### Running with Docker

Run the development environment in a container without installing local Node dependencies:

```bash
docker compose up
```

The app will be available at [http://localhost:4321](http://localhost:4321) with hot reloading enabled.

---

## 📜 Available Scripts

| Command            | Description                                                      |
| :----------------- | :--------------------------------------------------------------- |
| `npm run dev`      | Starts the Astro development server at `localhost:4321`          |
| `npm run build`    | Builds the static site for production into the `dist/` directory |
| `npm run preview`  | Previews the production build locally                            |
| `npm run prettier` | Formats all files across the repository                          |

---

## 📁 Project Structure

```text
├── images/             # Static showcase assets & covers
├── public/             # Public assets (icons, thumbnails, media)
├── src/
│   ├── components/     # UI components (ProjectSection, SkillsSection, Timeline, etc.)
│   ├── content/        # Data collections (projects.ts, skills.ts, experiences.ts, posts.ts)
│   ├── layouts/        # Astro layout templates
│   ├── lib/            # Shared utilities
│   ├── pages/          # Astro file-based routes (index.astro)
│   └── styles/         # Global styles and Tailwind imports
├── astro.config.mjs    # Astro configuration with React and Tailwind
├── compose.yaml        # Docker Compose configuration
├── Dockerfile.dev      # Dockerfile for development
├── package.json        # Dependencies and scripts
└── tailwind.config.mjs # Tailwind CSS configuration
```

---

## 👤 Author

**Gustavo Herrera**

- GitHub: [@arcanoix](https://github.com/arcanoix)
- LinkedIn: [in/thavoo](https://www.linkedin.com/in/thavoo/)
- Freelancer: [freelancer.com/u/gustavoherrera84](https://www.freelancer.com/u/gustavoherrera84)
- X (Twitter): [@arcanoix\_](https://x.com/arcanoix_)
- Email: [gustavoh.2312@gmail.com](mailto:gustavoh.2312@gmail.com)

---

## 📄 License

This project is licensed under the [Apache-2.0 License](LICENSE).
