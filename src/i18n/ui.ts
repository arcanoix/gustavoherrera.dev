export const languages = {
  en: "English",
  es: "Español",
}

export const defaultLang = "en"

export const localePaths = {
  en: "/",
  es: "/es/",
} as const satisfies Record<Lang, string>

export const ui = {
  en: {
    "meta.title": "Gustavo Herrera | AI Engineer & Fullstack Developer",
    "meta.description":
      "AI Engineer & Senior Fullstack Developer with 15+ years building scalable web applications, APIs, and AI-powered solutions with Python, RAG, and AI agents. Available for remote work.",
    "meta.ogDescription":
      "AI Engineer & Senior Fullstack Developer with 15+ years building scalable systems, RAG architectures, AI agents, and REST APIs.",
    "nav.switchTo": "Switch to Spanish",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.about": "About",
    "skills.all": "All",
    "experience.current": "Current",
    "about.locationLabel": "Location",
    "about.focusLabel": "Focus",
    "about.focusValue": "AI Engineering & Backend",
    "about.sinceLabel": "Coding since",
    loading: "Loading...",
    "hero.role": "AI Engineer",
    "hero.description":
      "AI Engineer & Senior Fullstack Developer with 15+ years of experience. Building RAG systems, AI agents, and scalable platforms with Python, LLMs (OpenAI, Anthropic, DeepSeek), Laravel, and React.",
    "hero.location": "Venezuela · Remote",
    "hero.hireMe": "Hire me",
    "hero.viewProjects": "View Projects",
    "stats.years": "Years",
    "stats.repos": "Repos",
    "stats.rating": "Rating",
    "stats.reviews": "Reviews",
    "section.projects": "Projects",
    "services.headline": "AI that fits your workflow",
    "services.intro":
      "Automate repetitive work without rebuilding your operation. I help you choose what to automate, connect it to your systems, and see how it performs.",
    "services.contact": "Let’s talk about your project",
    "services.example": "Illustrative example",
    "services.assessment.title": "Process assessment",
    "services.assessment.description":
      "Find where your team repeats work and decide what to automate first based on effort, risk, and time savings.",
    "services.assessment.example.map": "Map the workflow",
    "services.assessment.example.identify": "Find duplicate data entry",
    "services.assessment.example.prioritize": "Prioritize automatic validation",
    "services.agents.title": "Custom AI agents",
    "services.agents.description":
      "Get answers from your documents and route requests while keeping sensitive decisions with your team.",
    "services.agents.example.requester": "Requester:",
    "services.agents.example.request": "Can I make a policy exception?",
    "services.agents.example.agent": "Agent:",
    "services.agents.example.response": "The policy requires approval.",
    "services.agents.example.review": "Escalate to a human",
    "services.integrations.title": "System integrations",
    "services.integrations.description":
      "Connect APIs, databases, and billing so orders and invoices move between systems without retyping data.",
    "services.integrations.example.order": "Order",
    "services.integrations.example.invoice": "CFDI 4.0 invoice",
    "services.integrations.example.record": "Accounting record",
    "services.monitoring.title": "Monitoring and improvement",
    "services.monitoring.description":
      "Spot failures and see what needs attention after launch with metrics, activity logs, and alerts.",
    "services.monitoring.example.success": "Invoice generated",
    "services.monitoring.example.retry": "Sync queued for retry",
    "services.monitoring.example.alert": "Alert sent for review",
    "section.skills": "Skills",
    "section.experience": "Experience",
    "section.posts": "Posts",
    "section.about": "About me",
    "section.contact": "Contact",
    "about.p1Start": "I'm",
    "about.p1End":
      ", an AI Engineer and Senior Fullstack Developer from Venezuela with over 15 years of experience building software systems and automating business processes.",
    "about.p2":
      "Currently focused on AI engineering with Python—designing RAG architectures, building AI agents, and integrating OpenAI, Anthropic, and DeepSeek APIs for electronic billing (CFDI 4.0) workflows. I also have deep experience in backend development with Laravel, Go, and scalable REST APIs, as well as React, Vue.js, Next.js, and Astro on the frontend.",
    "about.p3":
      "I'm passionate about open source, sharing knowledge, and building tools that make developers' lives easier. I started programming in 2005 and have never stopped learning.",
    "contact.description":
      "Available for freelance projects and full-time remote opportunities. Feel free to reach out.",
    "footer.made": "Made with",
    "post.readMore": "Read More",
  },
  es: {
    "meta.title": "Gustavo Herrera | Ingeniero de IA y Desarrollador Fullstack",
    "meta.description":
      "AI Engineer y Desarrollador Fullstack Senior con más de 15 años construyendo aplicaciones web escalables, APIs y soluciones con IA usando Python, RAG y agentes de IA. Disponible para trabajo remoto.",
    "meta.ogDescription":
      "AI Engineer y Desarrollador Fullstack Senior con más de 15 años construyendo sistemas escalables, arquitecturas RAG, agentes de IA y APIs REST.",
    "nav.switchTo": "Cambiar a inglés",
    "nav.services": "Servicios",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiencia",
    "nav.about": "Sobre mí",
    "skills.all": "Todas",
    "experience.current": "Actual",
    "about.locationLabel": "Ubicación",
    "about.focusLabel": "Enfoque",
    "about.focusValue": "AI Engineering y Backend",
    "about.sinceLabel": "Programando desde",
    loading: "Cargando...",
    "hero.role": "AI Engineer",
    "hero.description":
      "AI Engineer y Desarrollador Fullstack Senior con más de 15 años de experiencia. Construyendo sistemas RAG, agentes de IA y plataformas escalables con Python, LLMs (OpenAI, Anthropic, DeepSeek), Laravel y React.",
    "hero.location": "Venezuela · Remoto",
    "hero.hireMe": "Contrátame",
    "hero.viewProjects": "Ver proyectos",
    "stats.years": "Años",
    "stats.repos": "Repositorios",
    "stats.rating": "Calificación",
    "stats.reviews": "Reseñas",
    "section.projects": "Proyectos",
    "services.headline": "IA que se adapta a tu operación",
    "services.intro":
      "Automatiza tareas repetitivas sin rehacer tu operación. Te ayudo a elegir qué automatizar, conectarlo con tus sistemas y ver cómo funciona.",
    "services.contact": "Hablemos de tu proyecto",
    "services.example": "Ejemplo ilustrativo",
    "services.assessment.title": "Diagnóstico de procesos",
    "services.assessment.description":
      "Detecta dónde se repite el trabajo y decide qué automatizar primero según el esfuerzo, el riesgo y el ahorro de tiempo.",
    "services.assessment.example.map": "Mapear el flujo de trabajo",
    "services.assessment.example.identify":
      "Detectar la doble captura de datos",
    "services.assessment.example.prioritize":
      "Priorizar la validación automática",
    "services.agents.title": "Agentes de IA a medida",
    "services.agents.description":
      "Responde consultas con tus documentos y canaliza solicitudes sin quitarle a tu equipo las decisiones delicadas.",
    "services.agents.example.requester": "Solicitante:",
    "services.agents.example.request":
      "¿Puedo hacer una excepción a la política?",
    "services.agents.example.agent": "Agente:",
    "services.agents.example.response": "La política exige aprobación.",
    "services.agents.example.review": "Derivar a una persona",
    "services.integrations.title": "Integración de sistemas",
    "services.integrations.description":
      "Conecta APIs, bases de datos y facturación para mover pedidos y facturas entre sistemas sin volver a capturar datos.",
    "services.integrations.example.order": "Pedido",
    "services.integrations.example.invoice": "Factura CFDI 4.0",
    "services.integrations.example.record": "Registro contable",
    "services.monitoring.title": "Monitoreo y mejora",
    "services.monitoring.description":
      "Detecta fallos y distingue qué requiere atención tras el lanzamiento con métricas, registros de actividad y alertas.",
    "services.monitoring.example.success": "Factura generada",
    "services.monitoring.example.retry":
      "Sincronización pendiente de reintento",
    "services.monitoring.example.alert": "Alerta enviada para revisión",
    "section.skills": "Habilidades",
    "section.experience": "Experiencia",
    "section.posts": "Publicaciones",
    "section.about": "Sobre mí",
    "section.contact": "Contacto",
    "about.p1Start": "Soy",
    "about.p1End":
      ", AI Engineer y Desarrollador Fullstack Senior de Venezuela con más de 15 años de experiencia construyendo sistemas de software y automatizando procesos de negocio.",
    "about.p2":
      "Actualmente enfocado en ingeniería de IA con Python: diseñando arquitecturas RAG, construyendo agentes de IA e integrando APIs de OpenAI, Anthropic y DeepSeek para flujos de facturación electrónica (CFDI 4.0). También cuento con amplia experiencia en backend con Laravel, Go y APIs REST escalables, y en frontend con React, Vue.js, Next.js y Astro.",
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
