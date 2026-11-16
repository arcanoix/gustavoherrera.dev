import { useState } from "react"
import { SKILLS } from "@/content/skills"
import { useTranslations } from "@/i18n/utils"
import type { Lang } from "@/i18n/ui"

interface SkillsSectionProps {
  lang: Lang
}

const SkillsSection = ({ lang }: SkillsSectionProps) => {
  const skills = SKILLS[lang]
  const t = useTranslations(lang)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const visibleGroups =
    selectedCategory === "all"
      ? skills
      : skills.filter((g) => g.category === selectedCategory)

  return (
    <div className="flex flex-col gap-8">
      {/* Interactive domain filter */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label={t("section.skills")}>
        <button
          type="button"
          role="tab"
          aria-selected={selectedCategory === "all"}
          onClick={() => setSelectedCategory("all")}
          className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
            selectedCategory === "all"
              ? "bg-emerald-600 text-white"
              : "border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-white/10 dark:text-slate-400 dark:hover:border-white/20 dark:hover:text-white"
          }`}
        >
          {t("skills.all")}
        </button>
        {skills.map((group) => {
          const isSelected = selectedCategory === group.category
          return (
            <button
              key={group.category}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedCategory(group.category)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                isSelected
                  ? "bg-emerald-600 text-white"
                  : "border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-white/10 dark:text-slate-400 dark:hover:border-white/20 dark:hover:text-white"
              }`}
            >
              {group.category}
            </button>
          )
        })}
      </div>

      {/* Capability matrix */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visibleGroups.map((group, idx) => {
          const isPrimaryAI = idx === 0 && selectedCategory === "all"
          return (
            <div
              key={group.category}
              className={`flex flex-col justify-between gap-5 rounded-2xl border p-6 transition-colors ${
                isPrimaryAI
                  ? "border-emerald-500/40 bg-emerald-500/[0.04] dark:border-emerald-400/30 dark:bg-emerald-500/[0.06] md:col-span-2 lg:col-span-2"
                  : "border-slate-200 bg-white dark:border-white/10 dark:bg-[#0b0f17]"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  {group.category}
                </h3>
                <span className="text-xs font-medium tabular-nums text-slate-500 dark:text-slate-400">
                  {group.items.length}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
                      isPrimaryAI
                        ? "border-emerald-500/30 bg-white text-slate-900 dark:border-emerald-400/20 dark:bg-[#07090e] dark:text-emerald-200"
                        : "border-slate-200 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SkillsSection
