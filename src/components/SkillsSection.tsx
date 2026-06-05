import { SKILLS } from "@/content/skills"

const SkillsSection = () => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-[800px]">
      {SKILLS.map((group, i) => (
        <div key={i} className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((skill, j) => (
              <span
                key={j}
                className="px-3 py-1 text-sm rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-500 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SkillsSection
