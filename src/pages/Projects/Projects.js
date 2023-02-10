import '../Projects/projects.css'

const Projects = () => {
  return (
    <div className='projects-main'>
      <div className='projects-inner'>
        <div className='projects-title'>MY PROJECTS<hr></hr></div>
        
        <div className='all-projects'>
          <section>
            <div className='project-1'>
              <div className='image'>
                <a href='https://fit-journal-frontend.onrender.com/'>
                  <img src='../images/project-1.png' alt='Fitness-tracker-app.img' />
                </a></div>
            </div>
          </section>
          <section>
            <div className='project-2'><div className='image'>
              <a href='https://lo-fi-cafe.onrender.com/'>
                <img src='../images/project-2.png' alt='Lo-fi-cafe.img' />
              </a></div></div>
          </section>
          <section>
            <div className='project-3'><a href='https://silverprius.github.io/'>
              <img src='../images/project-3.png' alt='Connect-4.img' />
            </a></div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Projects