import { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import ScrollReveal from 'scrollreveal';

import { projects } from '../../components/data';

import '../Projects/projects.css';

const Projects = () => {
  useEffect(() => {
    ScrollReveal().reveal('.projects-title', { delay: 500, duration: 3000, easing: 'ease-in-out' });
    ScrollReveal().reveal('img', { delay: 500, origin: 'left', distance: '10rem', duration: 1800, easing: 'ease-in-out' });
    ScrollReveal().reveal('.project-info', { delay: 500, origin: 'right', distance: '10rem',duration: 2000, easing: 'ease-in-out' });
  }, []);

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
                <img src={project.image} alt={project.title} onError={(e) => console.log(e.target.error)} className='project-image2' />
                <p className="project-description">{project.description}</p>

                <br /><div className="project-btns">
                  <a href={project.link}>
                    <button className='btn'>
                      Website
                      <FontAwesomeIcon className="external-link-logo" icon={faExternalLinkAlt} />
                    </button>
                  </a>

                  <a href={project.github}>
                    <button className='btn'>
                      Repository
                      <FontAwesomeIcon className="github-logo" icon={faGithub} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects;
