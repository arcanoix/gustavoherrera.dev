import { FaDev, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { Languages } from "lucide-react"
import { ModeToggle } from "./ModeToggle"
import { useTranslations } from "@/i18n/utils"
import type { Lang } from "@/i18n/ui"

const socials = [
  {
    name: "Github",
    url: "https://github.com/arcanoix",
    icon: FaGithub,
  },
  {
    name: "DEV",
    url: "https://dev.to/arcanoix",
    icon: FaDev,
  },
  {
    name: "Twitter",
    url: "https://x.com/arcanoix_",
    icon: FaXTwitter,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/thavoo/",
    icon: FaLinkedin,
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/+584121367894",
    icon: FaWhatsapp,
  },
]

interface NavbarProps {
  lang: Lang
}

const Navbar = ({ lang }: NavbarProps) => {
  const t = useTranslations(lang)
  const altLangHref = lang === "en" ? "/es/" : "/"
  const altLangLabel = lang === "en" ? "ES" : "EN"

  return (
    <nav className="z-40 fixed top-5 left-0 right-0 my-0 mx-auto max-w-max px-5 py-2 border border-slate-200 dark:border-slate-700 rounded-full bg-slate-50/30 dark:bg-slate-900/30 backdrop-blur-md">
      <ul className="flex items-center justify-center gap-6 text-slate-700 dark:text-slate-300 text-xl">
        <li className="flex items-center gap-2">
          <img
            src="https://avatars.githubusercontent.com/u/6331999?v=4"
            alt="Gustavo Herrera"
            className="w-7 h-7 rounded-full border border-slate-300 dark:border-slate-600"
          />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300 hidden sm:block">
            Gustavo Herrera
          </span>
        </li>
        <li className="w-px h-5 bg-slate-200 dark:bg-slate-700"></li>
        {socials.map((social, index) => (
          <li key={index} className="hover:scale-90 duration-150">
            <a href={social.url} target="_blank" rel="noreferrer">
              <social.icon />
            </a>
          </li>
        ))}
        <li>
          <a
            href={altLangHref}
            aria-label={t("nav.switchTo")}
            className="flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-300 hover:scale-90 duration-150"
          >
            <Languages className="w-4 h-4" />
            {altLangLabel}
          </a>
        </li>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
