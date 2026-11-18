import { EXPERIENCES } from "@/content/experiences"
import { useTranslations } from "@/i18n/utils"
import type { Lang } from "@/i18n/ui"

interface TimelineProps {
  lang: Lang
}

const Timeline = ({ lang }: TimelineProps) => {
  const experiences = EXPERIENCES[lang]
  const t = useTranslations(lang)

  return (
    <div className="flex flex-col gap-8">
      {experiences.map((experience, index) => (
        <article
          key={index}
          className="glass-panel grid grid-cols-1 gap-6 rounded-2xl p-6 md:grid-cols-12 md:gap-10 md:p-8"
        >
          <div className="flex flex-col gap-1.5 md:col-span-4">
            <div className="flex items-center gap-2">
              {index === 0 && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-700 dark:bg-violet-400/10 dark:text-violet-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                  {t("experience.current")}
                </span>
              )}
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {experience.date}
              </p>
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {experience.jobTitle}
            </h3>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
              {experience.company}
            </p>
          </div>

          <div className="md:col-span-8">
            <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg">
              {experience.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Timeline
