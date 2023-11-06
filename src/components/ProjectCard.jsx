import { Github, PlusCircle } from '../assets/icons/Icons'
import './css/ProjectCard.css'

export const ProjectCard = ({ project }) => {
  const { id, title, description, tags, source, visit } = project

  return (
    <article className='project-card' data-id={id} data-tags={tags?.join(',')}>
      <div className='project-info'>
        <h3 className='project-title'>{title}</h3>
        <p className='project-description'>{description}</p>
        <div className='project-tags'>
          {tags?.map((tag, index) => (
            <span key={index} className='project-tag'>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className='project-links'>
        <a
          href={source}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`GitHub link for ${title}`}
        >
          <Github
            className='social-icon'
            width='2rem'
            height='2rem'
            alt={`GitHub icon for ${title}`}
          />
        </a>
        <a
          href={visit}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`Visit link for ${title}`}
        >
          <PlusCircle
            className='social-icon'
            width='2rem'
            height='2rem'
            alt={`Visit icon for ${title}`}
          />
        </a>
      </div>
    </article>
  )
}
