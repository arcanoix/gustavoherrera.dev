import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { PROJECTS } from "@/content/projects"
import type { Lang } from "@/i18n/ui"

interface ProjectSectionProps {
  lang: Lang
}

const ProjectSection = ({ lang }: ProjectSectionProps) => {
  const projects = PROJECTS[lang]
  const [activeIndex, setActiveIndex] = useState(0)
  const activeProject = projects[activeIndex] ?? projects[0]

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
      {/* Interactive project ledger */}
      <div className="flex flex-col gap-3 lg:col-span-5">
        {projects.map((project, index) => {
          const isActive = index === activeIndex
          return (
            <button
              key={project.title}
              type="button"
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              className={`group flex flex-col gap-2 rounded-2xl p-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                isActive
                  ? "bg-white text-slate-900 dark:bg-[#0b0f17] dark:text-white"
                  : "text-slate-500 hover:bg-slate-100/60 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-white/[0.03] dark:hover:text-slate-200"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                  {project.title}
                </h3>
                <span
                  className={`inline-flex h-2 w-2 shrink-0 rounded-full transition-colors ${
                    isActive
                      ? "bg-emerald-500"
                      : "bg-slate-300 group-hover:bg-slate-400 dark:bg-white/15"
                  }`}
                />
              </div>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {project.description}
              </p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-slate-200 bg-slate-100/80 px-2 py-0.5 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Mobile links */}
              <div className="mt-2 flex flex-wrap gap-4 lg:hidden">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:underline dark:text-emerald-400"
                  >
                    <link.icon className="h-3.5 w-3.5" />
                    <span>{link.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </button>
          )
        })}
      </div>

      {/* Live preview panel */}
      {activeProject && (
        <div className="hidden lg:col-span-7 lg:block">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-[#0d121c]">
            <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-[#07090e]">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                width={activeProject.imageWidth}
                height={activeProject.imageHeight}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5">
              <div>
                <p className="text-base font-semibold text-slate-900 dark:text-white">
                  {activeProject.title}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {activeProject.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {activeProject.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-3.5 py-2 text-sm font-medium text-slate-800 transition-colors hover:border-emerald-500/60 hover:text-emerald-600 dark:border-white/10 dark:text-slate-200 dark:hover:border-emerald-400/50 dark:hover:text-emerald-400"
                  >
                    <link.icon className="h-4 w-4" />
                    <span>{link.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectSection
