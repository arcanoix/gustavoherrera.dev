import { useEffect, useRef, useState } from "react"
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
}

const SERVICES: Record<Lang, ServiceNode[]> = {
  en: [
    {
      id: "ai",
      label: "AI & Agents",
      stack: "Python · OpenAI · Anthropic · DeepSeek",
      detail: "Autonomous AI agents and LLM workflows tailored to business rules.",
    },
    {
      id: "rag",
      label: "RAG Systems",
      stack: "FastAPI · pgvector · Embeddings",
      detail: "Semantic search and grounded retrieval over enterprise documents.",
    },
    {
      id: "saas",
      label: "SaaS Platforms",
      stack: "Next.js · Laravel · PostgreSQL",
      detail: "Multi-tenant SaaS products built from architecture to production.",
    },
    {
      id: "apis",
      label: "REST APIs",
      stack: "Go · Python · Laravel · Docker",
      detail: "High-throughput APIs and microservices with zero-downtime deploys.",
    },
    {
      id: "dashboards",
      label: "Dashboards",
      stack: "React · TypeScript · Tailwind CSS",
      detail: "Real-time operational panels, analytics, and admin workflows.",
    },
    {
      id: "mobile",
      label: "Mobile Apps",
      stack: "React Native · Flutter · Kotlin",
      detail: "Cross-platform and native mobile experiences.",
    },
    {
      id: "webs",
      label: "Web Apps",
      stack: "Astro · React · Vue.js",
      detail: "Fast, accessible, SEO-ready web applications.",
    },
    {
      id: "cfdi",
      label: "CFDI 4.0",
      stack: "Go · Kubernetes · SAT Compliance",
      detail: "Mexican electronic billing systems at 300+ TPS scale.",
    },
  ],
  es: [
    {
      id: "ai",
      label: "IA y Agentes",
      stack: "Python · OpenAI · Anthropic · DeepSeek",
      detail: "Agentes autónomos y flujos con LLMs adaptados al negocio.",
    },
    {
      id: "rag",
      label: "Sistemas RAG",
      stack: "FastAPI · pgvector · Embeddings",
      detail: "Búsqueda semántica y recuperación precisa sobre datos empresariales.",
    },
    {
      id: "saas",
      label: "SaaS",
      stack: "Next.js · Laravel · PostgreSQL",
      detail: "Plataformas SaaS multi-tenant desde la arquitectura hasta producción.",
    },
    {
      id: "apis",
      label: "APIs REST",
      stack: "Go · Python · Laravel · Docker",
      detail: "Microservicios y APIs de alto rendimiento sin tiempo de inactividad.",
    },
    {
      id: "dashboards",
      label: "Dashboards",
      stack: "React · TypeScript · Tailwind CSS",
      detail: "Paneles operativos, analítica y flujos administrativos en tiempo real.",
    },
    {
      id: "mobile",
      label: "Apps móviles",
      stack: "React Native · Flutter · Kotlin",
      detail: "Experiencias móviles nativas y multiplataforma.",
    },
    {
      id: "webs",
      label: "Webs",
      stack: "Astro · React · Vue.js",
      detail: "Aplicaciones web rápidas, accesibles y optimizadas para SEO.",
    },
    {
      id: "cfdi",
      label: "CFDI 4.0",
      stack: "Go · Kubernetes · Cumplimiento SAT",
      detail: "Facturación electrónica en México escalando a 300+ TPS.",
    },
  ],
}

const HeroCorePanel = ({ lang }: HeroCorePanelProps) => {
  const nodes = SERVICES[lang]
  const [activeId, setActiveId] = useState<string>("ai")
  const [isPaused, setIsPaused] = useState(false)
  const stageRef = useRef<HTMLDivElement | null>(null)
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>([])
  const lineRefs = useRef<(SVGLineElement | null)[]>([])
  const angleRef = useRef(0)

  const activeNode = nodes.find((n) => n.id === activeId) ?? nodes[0]

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    let frameId = 0
    let lastTime = performance.now()

    const positionNodes = (now: number) => {
      const stage = stageRef.current
      if (!stage) return

      const dt = (now - lastTime) / 1000
      lastTime = now

      if (!prefersReducedMotion && !isPaused) {
        angleRef.current += dt * 0.22
      }

      const w = stage.clientWidth
      const h = stage.clientHeight
      const cx = w / 2
      const cy = h / 2
      const rx = w * 0.37
      const ry = h * 0.33

      nodes.forEach((_, idx) => {
        const theta = angleRef.current + (idx / nodes.length) * Math.PI * 2
        const x = cx + Math.cos(theta) * rx
        const y = cy + Math.sin(theta) * ry

        const btn = nodeRefs.current[idx]
        if (btn) {
          btn.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
        }

        const line = lineRefs.current[idx]
        if (line) {
          line.setAttribute("x1", String(cx))
          line.setAttribute("y1", String(cy))
          line.setAttribute("x2", String(x))
          line.setAttribute("y2", String(y))
        }
      })

      if (!prefersReducedMotion) {
        frameId = requestAnimationFrame(positionNodes)
      }
    }

    frameId = requestAnimationFrame(positionNodes)
    return () => cancelAnimationFrame(frameId)
  }, [nodes, isPaused])

  return (
    <div
      data-ui="true"
      className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 dark:border-white/10 dark:bg-[#0b0f17]"
    >
      {/* Corner HUD brackets */}
      <span aria-hidden="true" className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-emerald-500/40" />
      <span aria-hidden="true" className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-emerald-500/40" />
      <span aria-hidden="true" className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-emerald-500/40" />
      <span aria-hidden="true" className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-emerald-500/40" />

      {/* Top HUD Bar */}
      <div className="flex items-center justify-between px-1 text-xs tracking-[0.18em] text-slate-500 dark:text-slate-400">
        <span className="font-semibold text-slate-800 dark:text-slate-200">
          ARCANOIX // CORE
        </span>
        <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {lang === "es" ? "en línea" : "online"}
        </span>
      </div>

      {/* Orbital Network Stage */}
      <div
        ref={stageRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative my-4 h-[310px] w-full overflow-hidden rounded-xl bg-slate-100/70 dark:bg-[#07090e]"
      >
        {/* Elliptical orbital rings */}
        <svg
          aria-hidden="true"
          viewBox="0 0 100 62.5"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <ellipse
            cx="50"
            cy="31.25"
            rx="37"
            ry="20.5"
            fill="none"
            stroke="rgba(16, 185, 129, 0.28)"
            strokeWidth="0.3"
            strokeDasharray="1 1.5"
            vectorEffect="non-scaling-stroke"
          />
          <ellipse
            cx="50"
            cy="31.25"
            rx="27"
            ry="14.5"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.1"
            strokeWidth="0.3"
            vectorEffect="non-scaling-stroke"
            className="text-slate-500 dark:text-white"
          />
        </svg>

        {/* Dynamic connector beams */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        >
          {nodes.map((node, idx) => {
            const isActive = node.id === activeId
            return (
              <line
                key={node.id}
                ref={(el) => {
                  lineRefs.current[idx] = el
                }}
                stroke={isActive ? "#10b981" : "currentColor"}
                strokeOpacity={isActive ? 0.8 : 0.16}
                strokeWidth={isActive ? 1.4 : 0.9}
                strokeDasharray="2 4"
                className="text-slate-500 dark:text-slate-400 transition-opacity duration-200"
              />
            )
          })}
        </svg>

        {/* Stationary centered radar + counter-rotating rings + core emblem */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 aspect-square h-[48%] -translate-x-1/2 -translate-y-1/2"
        >
          {/* Rotating radar sweep */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full origin-center animate-[spin_6s_linear_infinite] text-emerald-500/25"
          >
            <path d="M50 50 L50 2 A48 48 0 0 1 91.5 26 Z" fill="currentColor" />
          </svg>

          {/* Outer dashed ring */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full origin-center animate-[spin_14s_linear_infinite]"
          >
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="rgba(16, 185, 129, 0.5)"
              strokeWidth="0.7"
              strokeDasharray="2 6"
            />
          </svg>

          {/* Inner counter-rotating ring */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-[16%] h-[68%] w-[68%] origin-center animate-[spin_9s_linear_infinite_reverse]"
          >
            <circle
              cx="50"
              cy="50"
              r="47"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.25"
              strokeWidth="0.9"
              strokeDasharray="30 12 4 12"
              className="text-slate-500 dark:text-white"
            />
          </svg>

          {/* Center Core Emblem */}
          <div className="absolute inset-[30%] flex items-center justify-center rounded-2xl border border-emerald-500/45 bg-emerald-500/15 text-emerald-600 dark:border-emerald-400/45 dark:bg-emerald-500/20 dark:text-emerald-300">
            <Cpu className="h-6 w-6" />
          </div>
        </div>

        {/* Orbiting Service Nodes */}
        {nodes.map((node, idx) => {
          const isActive = node.id === activeId
          return (
            <button
              key={node.id}
              ref={(el) => {
                nodeRefs.current[idx] = el
              }}
              type="button"
              onMouseEnter={() => setActiveId(node.id)}
              onFocus={() => setActiveId(node.id)}
              onClick={() => setActiveId(node.id)}
              className={`absolute left-0 top-0 z-20 whitespace-nowrap rounded-xl border px-3 py-1.5 text-xs font-medium will-change-transform transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                isActive
                  ? "border-emerald-500 bg-emerald-600 text-white"
                  : "border-slate-200 bg-white/95 text-slate-700 hover:border-emerald-500/50 hover:text-slate-900 dark:border-white/15 dark:bg-[#111724]/95 dark:text-slate-200 dark:hover:text-white"
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
