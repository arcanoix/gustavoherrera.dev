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
        className="nav-glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-2.5 backdrop-blur-xl dark:border-white/10 dark:bg-[#13101f]/80"
      >
        <a
          href="#"
          className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
        >
          <span aria-hidden="true" className="brand-mark">
            GH
          </span>
          <span className="max-w-[7rem] text-sm font-semibold leading-tight tracking-tight text-slate-900 dark:text-slate-100 sm:max-w-none">
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
            className="primary-action hidden min-h-10 items-center rounded-xl px-4 py-2 text-sm font-medium sm:inline-flex"
          >
            {t("hero.hireMe")}
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
