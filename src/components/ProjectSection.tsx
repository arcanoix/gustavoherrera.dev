import { PROJECTS } from "@/content/projects"
import ProjectCard from "./ProjectCard"

const ProjectSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-14">
      {PROJECTS.map(
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
