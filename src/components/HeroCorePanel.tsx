import { useState } from "react"
import { Cpu } from "lucide-react"
import type { Lang } from "@/i18n/ui"

interface HeroCorePanelProps {
  lang: Lang
}

interface ServiceNode {
  id: string
  label: string
  stack: string
  detail: string
  x: number
  y: number
}

const SERVICES: Record<Lang, ServiceNode[]> = {
  en: [
    {
      id: "ai",
      label: "AI & Agents",
      stack: "Python · OpenAI · Anthropic · DeepSeek",
      detail: "Autonomous AI agents and LLM workflows tailored to business rules.",
      x: 50,
      y: 82,
    },
    {
      id: "rag",
      label: "RAG Systems",
      stack: "FastAPI · pgvector · Embeddings",
      detail: "Semantic search and grounded retrieval over enterprise documents.",
      x: 22,
      y: 22,
    },
    {
      id: "saas",
      label: "SaaS Platforms",
      stack: "Next.js · Laravel · PostgreSQL",
      detail: "Multi-tenant SaaS products built from architecture to production.",
      x: 80,
      y: 72,
    },
    {
      id: "apis",
      label: "REST APIs",
      stack: "Go · Python · Laravel · Docker",
      detail: "High-throughput APIs and microservices with zero-downtime deploys.",
      x: 78,
      y: 22,
    },
    {
      id: "dashboards",
      label: "Dashboards",
      stack: "React · TypeScript · Tailwind CSS",
      detail: "Real-time operational panels, analytics, and admin workflows.",
      x: 18,
      y: 68,
    },
    {
      id: "mobile",
      label: "Mobile Apps",
      stack: "React Native · Flutter · Kotlin",
      detail: "Cross-platform and native mobile experiences.",
      x: 84,
      y: 46,
    },
    {
      id: "webs",
      label: "Web Apps",
      stack: "Astro · React · Vue.js",
      detail: "Fast, accessible, SEO-ready web applications.",
      x: 50,
      y: 16,
    },
    {
      id: "cfdi",
      label: "CFDI 4.0",
      stack: "Go · Kubernetes · SAT Compliance",
      detail: "Mexican electronic billing systems at 300+ TPS scale.",
      x: 16,
      y: 44,
    },
  ],
  es: [
    {
      id: "ai",
      label: "IA y Agentes",
      stack: "Python · OpenAI · Anthropic · DeepSeek",
      detail: "Agentes autónomos y flujos con LLMs adaptados al negocio.",
      x: 50,
      y: 82,
    },
    {
      id: "rag",
      label: "Sistemas RAG",
      stack: "FastAPI · pgvector · Embeddings",
      detail: "Búsqueda semántica y recuperación precisa sobre datos empresariales.",
      x: 22,
      y: 22,
    },
    {
      id: "saas",
      label: "SaaS",
      stack: "Next.js · Laravel · PostgreSQL",
      detail: "Plataformas SaaS multi-tenant desde la arquitectura hasta producción.",
      x: 80,
      y: 72,
    },
    {
      id: "apis",
      label: "APIs REST",
      stack: "Go · Python · Laravel · Docker",
      detail: "Microservicios y APIs de alto rendimiento sin tiempo de inactividad.",
      x: 78,
      y: 22,
    },
    {
      id: "dashboards",
      label: "Dashboards",
      stack: "React · TypeScript · Tailwind CSS",
      detail: "Paneles operativos, analítica y flujos administrativos en tiempo real.",
      x: 18,
      y: 68,
    },
    {
      id: "mobile",
      label: "Apps móviles",
      stack: "React Native · Flutter · Kotlin",
      detail: "Experiencias móviles nativas y multiplataforma.",
      x: 84,
      y: 46,
    },
    {
      id: "webs",
      label: "Webs",
      stack: "Astro · React · Vue.js",
      detail: "Aplicaciones web rápidas, accesibles y optimizadas para SEO.",
      x: 50,
      y: 16,
    },
    {
      id: "cfdi",
      label: "CFDI 4.0",
      stack: "Go · Kubernetes · Cumplimiento SAT",
      detail: "Facturación electrónica en México escalando a 300+ TPS.",
      x: 16,
      y: 44,
    },
  ],
}

const HeroCorePanel = ({ lang }: HeroCorePanelProps) => {
  const nodes = SERVICES[lang]
  const [activeId, setActiveId] = useState<string>("ai")
  const activeNode = nodes.find((n) => n.id === activeId) ?? nodes[0]

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 dark:border-white/10 dark:bg-[#0b0f17]">
      {/* Top HUD Bar */}
      <div className="flex items-center justify-between text-xs tracking-wider text-slate-500 dark:text-slate-400">
        <span className="font-semibold text-slate-800 dark:text-slate-200">
          ARCANOIX // CORE
        </span>
        <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          {lang === "es" ? "en línea" : "online"}
        </span>
      </div>

      {/* Orbital Network Stage */}
      <div className="relative my-4 h-[300px] w-full overflow-hidden rounded-xl bg-slate-100/70 dark:bg-[#07090e]">
        {/* Dotted orbital rings */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-300/80 dark:border-white/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-300/50 dark:border-white/5"
        />

        {/* Rotating radar sweep */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2"
        >
          <svg
            viewBox="0 0 100 100"
            className="h-full w-full origin-center animate-[spin_8s_linear_infinite] text-emerald-500/25"
          >
            <path d="M50 50 L50 0 A50 50 0 0 1 93.3 25 Z" fill="currentColor" />
          </svg>
        </div>

        {/* SVG connector lines from center (50,50) to each node */}
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          {nodes.map((node) => {
            const isActive = node.id === activeId
            return (
              <line
                key={node.id}
                x1="50"
                y1="50"
                x2={node.x}
                y2={node.y}
                stroke={isActive ? "#10b981" : "currentColor"}
                strokeOpacity={isActive ? 0.75 : 0.16}
                strokeWidth={isActive ? 0.45 : 0.25}
                strokeDasharray="1.2 1.2"
                className="text-slate-500 dark:text-slate-400 transition-opacity duration-300"
              />
            )
          })}
        </svg>

        {/* Center Core Emblem */}
        <div className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-emerald-500/40 bg-emerald-500/15 text-emerald-600 dark:border-emerald-400/40 dark:bg-emerald-500/20 dark:text-emerald-300">
          <Cpu className="h-7 w-7" />
        </div>

        {/* Service Nodes */}
        {nodes.map((node) => {
          const isActive = node.id === activeId
          return (
            <button
              key={node.id}
              type="button"
              onMouseEnter={() => setActiveId(node.id)}
              onFocus={() => setActiveId(node.id)}
              onClick={() => setActiveId(node.id)}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                isActive
                  ? "scale-105 border-emerald-500 bg-emerald-600 text-white"
                  : "border-slate-200 bg-white/90 text-slate-700 hover:border-emerald-500/50 hover:text-slate-900 dark:border-white/10 dark:bg-[#111724]/95 dark:text-slate-300 dark:hover:text-white"
              }`}
            >
              {node.label}
            </button>
          )
        })}
      </div>

      {/* Bottom Live Readout */}
      <div className="flex flex-col gap-1.5 rounded-xl bg-slate-100/80 px-4 py-3 dark:bg-[#07090e]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            {activeNode.label}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {activeNode.stack}
          </span>
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          {activeNode.detail}
        </p>
      </div>
    </div>
  )
}

export default HeroCorePanel
