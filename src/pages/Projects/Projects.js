import '../Projects/projects.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { projects } from '../../components/data'
import { useState } from 'react'
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
                <div key={index} className='project-container'>
                    <h2 className="project-title">{project.title}</h2><br></br>
                    <hr></hr>
                    <br></br><h3 className="project-subtitle">{project.subtitle}</h3>
                    <br></br><p className="project-description">{project.description}</p>
                    <br></br><img src={project.image} alt={project.title} onError={(e) => console.log(e.target.error)} className='project-image' />
                    <div className="logo">
                        <a href={project.link} >
                            <FontAwesomeIcon className="external-link-logo" icon={faExternalLinkAlt} />
                        </a>
                        <a href={project.github} >
                            <FontAwesomeIcon className="github-logo" icon={faGithub} />
                        </a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Projects