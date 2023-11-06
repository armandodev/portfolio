import json from './../mocks/projects.json'
import { ProjectCard } from './ProjectCard'
import './css/ProjectsContainer.css'

export const ProjectsContainer = () => {
  const projects = json.projects

  return (
    <section id='m-projects'>
      {projects?.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  )
}
