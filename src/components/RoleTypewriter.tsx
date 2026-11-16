import { useEffect, useState } from "react"

const ROLES = [
  "AI Engineer.",
  "FullStack Developer.",
  "Backend Developer.",
  "Frontend Developer.",
  "Mobile Developer.",
]

const RoleTypewriter = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState(ROLES[0])
  const [isDeleting, setIsDeleting] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(media.matches)
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])

  useEffect(() => {
    if (reducedMotion) {
      setDisplayText(ROLES[0])
      return
    }

    const currentRole = ROLES[roleIndex]
    let timeoutId: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText === currentRole) {
      timeoutId = setTimeout(() => setIsDeleting(true), 1800)
    } else if (isDeleting && displayText === "") {
      timeoutId = setTimeout(() => {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % ROLES.length)
      }, 280)
    } else {
      const nextLength = isDeleting
        ? displayText.length - 1
        : displayText.length + 1
      const speed = isDeleting ? 38 : 68

      timeoutId = setTimeout(() => {
        setDisplayText(currentRole.slice(0, nextLength))
      }, speed)
    }

    return () => clearTimeout(timeoutId)
  }, [displayText, isDeleting, roleIndex, reducedMotion])

  return (
    <span className="inline-flex items-baseline">
      <span className="sr-only">AI Engineer</span>
      <span aria-hidden="true">{displayText}</span>
      {!reducedMotion && (
        <span
          aria-hidden="true"
          className="ml-1 inline-block h-[0.82em] w-[0.07em] translate-y-[0.05em] bg-emerald-500 dark:bg-emerald-400 animate-[pulse_1s_steps(2,start)_infinite]"
        />
      )}
    </span>
  )
}

export default RoleTypewriter
