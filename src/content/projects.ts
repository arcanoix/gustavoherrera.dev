import { FaGithub, FaGlobe } from "react-icons/fa"
import { PiLinkSimpleBold } from "react-icons/pi"

export const PROJECTS = {
  en: [
    {
      title: "DgCost",
      description: "DgCost is a simple cost calculation tool for developers.",
      image: "/images/dgcost.png",
      imageWidth: 1389,
      imageHeight: 866,
      tags: ["1 Star", "0 Fork", "TypeScript", "PLpgSQL", "css"],
      links: [
        {
          name: "DgCost Recetario App Repository",
          url: "https://github.com/arcanoix/dgbakerycake-recetario-app",
          icon: FaGithub,
        },
        {
          name: "DgCost Website",
          url: "https://www.dgcost.online/",
          icon: FaGlobe,
        },
      ],
    },
    {
      title: "Landing Page DGBakeryCake",
      description: "Landing page for entrepreneurship Cake Bakery",
      image: "/images/dgbakerycake.png",
      imageWidth: 1827,
      imageHeight: 904,
      tags: ["JavaScript", "Next.js"],
      links: [
        {
          name: "Preview",
          url: "https://www.dgbakerycake.com/",
          icon: PiLinkSimpleBold,
        },
      ],
    },
    {
      title: "FogonIA SaaS Restaurant Management",
      description:
        " FogonIA is a SaaS restaurant management system that helps restaurants manage their operations more efficiently.",
      image: "/images/fogonia.png",
      imageWidth: 1340,
      imageHeight: 826,
      tags: ["JavaScript", "Next.js"],
      links: [
        {
          name: "Preview",
          url: "https://www.contar.online/",
          icon: PiLinkSimpleBold,
        },
      ],
    },
  ],
  es: [
    {
      title: "DgCost",
      description:
        "DgCost es una herramienta sencilla de cálculo de costos para desarrolladores.",
      image: "/images/dgcost.png",
      imageWidth: 1389,
      imageHeight: 866,
      tags: ["1 Estrella", "0 Forks", "TypeScript", "PLpgSQL", "css"],
      links: [
        {
          name: "Repositorio de la app DgCost Recetario",
          url: "https://github.com/arcanoix/dgbakerycake-recetario-app",
          icon: FaGithub,
        },
        {
          name: "Sitio web de DgCost",
          url: "https://www.dgcost.online/",
          icon: FaGlobe,
        },
      ],
    },
    {
      title: "Landing Page DGBakeryCake",
      description:
        "Landing page para el emprendimiento de repostería Cake Bakery",
      image: "/images/dgbakerycake.png",
      imageWidth: 1827,
      imageHeight: 904,
      tags: ["JavaScript", "Next.js"],
      links: [
        {
          name: "Vista previa",
          url: "https://www.dgbakerycake.com/",
          icon: PiLinkSimpleBold,
        },
      ],
    },
    {
      title: "FogonIA SaaS Restaurant Management",
      description:
        " FogonIA es un sistema SaaS de gestión de restaurantes que ayuda a administrar sus operaciones de manera más eficiente.",
      image: "/images/fogonia.png",
      imageWidth: 1340,
      imageHeight: 826,
      tags: ["JavaScript", "Next.js"],
      links: [
        {
          name: "Vista previa",
          url: "https://www.contar.online/",
          icon: PiLinkSimpleBold,
        },
      ],
    },
  ],
}
