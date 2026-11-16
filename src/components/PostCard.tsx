import { ArrowUpRight } from "lucide-react"
import { useTranslations } from "@/i18n/utils"
import type { Lang } from "@/i18n/ui"

interface PostCardProps {
  title: string
  description: string
  date: string
  tags: string[]
  url: string
  lang: Lang
}

const PostCard = ({ title, description, date, tags, url, lang }: PostCardProps) => {
  const t = useTranslations(lang)

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-emerald-500/50 dark:border-white/10 dark:bg-[#0b0f17] dark:hover:border-emerald-400/40"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {date}
          </span>
          <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-500 dark:group-hover:text-emerald-400" />
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          {t("post.readMore")}
        </span>
      </div>
    </a>
  )
}

export default PostCard
