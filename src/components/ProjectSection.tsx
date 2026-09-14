import { PROJECTS } from "@/content/projects"
import type { Lang } from "@/i18n/ui"
import ProjectCard from "./ProjectCard"

interface ProjectSectionProps {
  lang: Lang
}

const ProjectSection = ({ lang }: ProjectSectionProps) => {
  const projects = PROJECTS[lang]

  return (
    <div className="flex flex-col justify-center items-center gap-14">
      {projects.map(
        ({
          image,
          imageWidth,
          imageHeight,
          title,
          description,
          tags,
          links,
        }) => (
          <ProjectCard
            key={title}
            image={image}
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            title={title}
            description={description}
            tags={tags}
            links={links}
          />
        )
      )}
    </div>
  )
}

export default ProjectSection
