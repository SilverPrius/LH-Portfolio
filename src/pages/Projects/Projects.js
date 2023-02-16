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
                <p className="project-description">{project.description}</p>

                <br /><div className="project-btns">


                  <a href={project.link} ><button className='btn'>Website

                    <FontAwesomeIcon className="external-link-logo" icon={faExternalLinkAlt} />
                  </button></a>

                  

                  <a href={project.github} ><button className='btn'>Repository
                    <FontAwesomeIcon className="github-logo" icon={faGithub} />
                    </button></a>
                </div>

              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects 
