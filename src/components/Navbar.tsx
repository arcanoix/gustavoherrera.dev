import { Languages } from "lucide-react"
import { ModeToggle } from "./ModeToggle"
import { useTranslations } from "@/i18n/utils"
import type { Lang } from "@/i18n/ui"

interface NavbarProps {
  lang: Lang
}

const Navbar = ({ lang }: NavbarProps) => {
  const t = useTranslations(lang)
  const altLangHref = lang === "en" ? "/es/" : "/"
  const altLangLabel = lang === "en" ? "ES" : "EN"

  const navLinks = [
    { href: "#projects", label: t("nav.projects") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#about", label: t("nav.about") },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <nav
        aria-label="Primary navigation"
        className="nav-glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-2.5 backdrop-blur-xl dark:border-white/10 dark:bg-[#0b0f17]/80"
      >
        <a
          href="#"
          className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          <img
            src="https://avatars.githubusercontent.com/u/6331999?v=4"
            alt="Gustavo Herrera"
            width={30}
            height={30}
            className="h-7 w-7 rounded-full border border-slate-300 dark:border-white/20"
          />
          <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            Gustavo Herrera
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3.5 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={altLangHref}
            aria-label={t("nav.switchTo")}
            className="inline-flex h-9 items-center gap-1.5 rounded-xl border border-slate-200 px-2.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
          >
            <Languages className="h-3.5 w-3.5" />
            <span>{altLangLabel}</span>
          </a>
          <ModeToggle />
          <a
            href="#contact"
            className="hidden h-9 items-center rounded-xl bg-emerald-600 px-4 text-sm font-medium text-white transition-colors hover:bg-emerald-500 sm:inline-flex"
          >
            {t("hero.hireMe")}
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
