import '../Projects/projects.css'
import React from 'react'
import { projects } from '../../components/data'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'


const Projects = () => {
  return (
    <div className='projects-main'>
      <div className='projects-inner'>
        <div className='projects-title'>MY PROJECTS<hr></hr></div>
        <div className='projects'>
          {projects.map((project, index) => (
            <div key={index} className={`project-container ${index === 1 ? 'reverse' : ''}`}>
              <img src={project.image} alt={project.title} onError={(e) => console.log(e.target.error)} className='project-image' />
              <div className="project-info">
                <h2 className="project-title">{project.title}</h2>
                <br /><h3 className="project-subtitle">{project.subtitle}</h3>
                <h3>LIVE DEMO</h3><div className="logo">
                  <a href={project.link} >
                    <FontAwesomeIcon className="external-link-logo" icon={faExternalLinkAlt} title="Live Demo" />
                  </a>
                  <a href={project.github} >
                    <FontAwesomeIcon className="github-logo" icon={faGithub} title="Repository" />
                  </a>
                </div>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects 
