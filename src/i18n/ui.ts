export const languages = {
  en: "English",
  es: "Español",
}

export const defaultLang = "en"

export const ui = {
  en: {
    "meta.description":
      "Senior Fullstack Developer with 15+ years building web applications and scalable APIs. Specialized in Laravel, React, and business automation. Available for remote work.",
    "meta.ogDescription":
      "Senior Fullstack Developer with 15+ years building web applications. Specialized in Laravel, React, and scalable REST APIs.",
    "nav.switchTo": "Switch to Spanish",
    loading: "Loading...",
    "hero.role": "Senior Fullstack Developer",
    "hero.description":
      "Building robust web applications and scalable APIs for over 15 years. Specialized in Laravel, React, and modern fullstack solutions — from business automation to SaaS platforms.",
    "hero.location": "Venezuela · Remote",
    "hero.hireMe": "Hire me",
    "hero.viewProjects": "View Projects",
    "stats.years": "Years",
    "stats.repos": "Repos",
    "stats.rating": "Rating",
    "stats.reviews": "Reviews",
    "section.projects": "Projects",
    "section.skills": "Skills",
    "section.experience": "Experience",
    "section.posts": "Posts",
    "section.about": "About me",
    "section.contact": "Contact",
    "about.p1Start": "I'm",
    "about.p1End":
      ", a Senior Fullstack Developer from Venezuela with over 15 years of experience building web applications and automating business processes.",
    "about.p2":
      "I specialize in backend development with Laravel and scalable REST APIs, integrating complex systems like billing platforms, accounting workflows, and SaaS solutions. On the frontend I work with React, Vue.js, Next.js, and Astro.",
    "about.p3":
      "I'm passionate about open source, sharing knowledge, and building tools that make developers' lives easier. I started programming in 2005 and have never stopped learning.",
    "contact.description":
      "Available for freelance projects and full-time remote opportunities. Feel free to reach out.",
    "footer.made": "Made with",
    "post.readMore": "Read More",
  },
  es: {
    "meta.description":
      "Desarrollador Fullstack Senior con más de 15 años construyendo aplicaciones web y APIs escalables. Especializado en Laravel, React y automatización de negocios. Disponible para trabajo remoto.",
    "meta.ogDescription":
      "Desarrollador Fullstack Senior con más de 15 años construyendo aplicaciones web. Especializado en Laravel, React y APIs REST escalables.",
    "nav.switchTo": "Cambiar a inglés",
    loading: "Cargando...",
    "hero.role": "Desarrollador Fullstack Senior",
    "hero.description":
      "Construyendo aplicaciones web robustas y APIs escalables por más de 15 años. Especializado en Laravel, React y soluciones fullstack modernas — desde automatización de negocios hasta plataformas SaaS.",
    "hero.location": "Venezuela · Remoto",
    "hero.hireMe": "Contrátame",
    "hero.viewProjects": "Ver proyectos",
    "stats.years": "Años",
    "stats.repos": "Repositorios",
    "stats.rating": "Calificación",
    "stats.reviews": "Reseñas",
    "section.projects": "Proyectos",
    "section.skills": "Habilidades",
    "section.experience": "Experiencia",
    "section.posts": "Publicaciones",
    "section.about": "Sobre mí",
    "section.contact": "Contacto",
    "about.p1Start": "Soy",
    "about.p1End":
      ", un Desarrollador Fullstack Senior de Venezuela con más de 15 años de experiencia construyendo aplicaciones web y automatizando procesos de negocio.",
    "about.p2":
      "Me especializo en desarrollo backend con Laravel y APIs REST escalables, integrando sistemas complejos como plataformas de facturación, flujos de contabilidad y soluciones SaaS. En el frontend trabajo con React, Vue.js, Next.js y Astro.",
    "about.p3":
      "Me apasiona el código abierto, compartir conocimiento y construir herramientas que faciliten la vida de los desarrolladores. Empecé a programar en 2005 y nunca he dejado de aprender.",
    "contact.description":
      "Disponible para proyectos freelance y oportunidades remotas de tiempo completo. No dudes en contactarme.",
    "footer.made": "Hecho con",
    "post.readMore": "Leer más",
  },
} as const

export type Lang = keyof typeof ui
export type UIKey = keyof (typeof ui)[typeof defaultLang]
