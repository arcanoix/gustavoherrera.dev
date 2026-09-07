import { useEffect, useRef, useState } from "react"
import { Loader2 } from "lucide-react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

interface ProjectLink {
  name: string
  url: string
  icon: any
}

interface ProjectCardProps {
  image: string
  imageWidth: number
  imageHeight: number
  title: string
  description: string
  tags: string[]
  links: ProjectLink[]
}

const ProjectCard = ({
  image,
  imageWidth,
  imageHeight,
  title,
  description,
  tags,
  links,
}: ProjectCardProps) => {
  const projectRef = useRef(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const [threshold, setThreshold] = useState(0.5)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  // Cached images can finish loading before hydration, so onLoad never fires.
  useEffect(() => {
    if (imageRef.current?.complete && imageRef.current.naturalWidth > 0) {
      setImageLoaded(true)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            entry.target.classList.remove("opacity-0")
            entry.target.classList.remove("animate-fade-out-down")
            setThreshold(0.3)
          } else {
            entry.target.classList.remove("animate-fade-in-up")
            entry.target.classList.add("animate-fade-out-down")
            entry.target.classList.add("opacity-0")

            setThreshold(0.5)
          }
        })
      },
      {
        threshold: threshold,
        rootMargin: "0px",
      }
    )

    if (projectRef.current) {
      observer.observe(projectRef.current)
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current)
      }
    }
  }, [threshold])

  return (
    <article className="flex flex-col gap-8 w-full opacity-0" ref={projectRef}>
      <div
        className="relative md:w-[800px] w-full overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800"
        style={{ aspectRatio: `${imageWidth} / ${imageHeight}` }}
        aria-busy={!imageLoaded && !imageError}
      >
        {!imageLoaded && !imageError && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 bg-[length:200%_100%] animate-shimmer"
            aria-hidden="true"
          >
            <Loader2 className="h-8 w-8 animate-spin text-slate-400 dark:text-slate-500" />
          </div>
        )}
        <img
          ref={imageRef}
          src={image}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          loading="lazy"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="flex flex-col justify-between gap-4">
        <h3 className="font-bold text-2xl">{title}</h3>
        <div className="flex flex-wrap gap-4">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              className="bg-slate-800 text-slate-200 dark:text-slate-800 dark:bg-slate-200"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <p className="max-w-[800px] text-lg">{description}</p>
        <div className="flex flex-wrap gap-4">
          {links.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noreferrer">
              <Button variant="secondary">
                <link.icon />
                {link.name}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
