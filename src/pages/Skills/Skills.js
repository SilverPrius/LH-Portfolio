import './skills.css'

function Skills() {
  const skills = [
    { id: 1, source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "The logo icon for HTML 5", title: "HTML 5" },
    { id: 2, source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "The logo icon for CSS3", title: "CSS 3" },
    { id: 3, source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "The logo icon for React", title: "React" },
    { id: 4, source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "The logo icon for JavaScript", title: "JavaScript" },
    { id: 5, source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "The logo icon for Express", title: "Express" },
    { id: 6, source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "The logo icon for NodeJS", title: "Node JS" },
    { id: 7, source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "The logo icon for MongoDB", title: "MongoDB" },
    { id: 8, source: "https://visualpharm.com/assets/115/Rest%20Api-595b40b65ba036ed117d3b7b.svg", alt: "The logo icon for Restful API", title: "Restful API" },
    { id: 9, source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", alt: "The logo icon for Bootstrap", title: "Bootstrap" },
    { id: 10, source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", alt: "The logo icon for NPM", title: "NPM" },
    { id: 11, source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "The logo icon for Git", title: "Git" },
    { id: 12, source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", alt: "The logo icon for Visual Studio Code", title: "VSCode" },
  ];

  return (
    <div className="skills">
      <div className="skillsGrid">
        {skills.map(skill => (
          <div className='skill' key={skill.id}>
            <img src={skill.source} alt={skill.alt} title={skill.title} />
            <div className='skill-title'>{skill.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
