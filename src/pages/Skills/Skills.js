import '../Skills/skills.css'

import Skill from '../../components/Skill'

function Skills() {
    return (
        <div className="skills">
            
            <div className="skillsGrid">
            <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="The logo icon for HTML 5" title="HTML 5"/>
            <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="The logo icon for CSS3" title="CSS 3"/>  
            <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="The logo icon for React" title="React"/> 
            <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="The logo icon for JavaScript" title="JavaScriptt"/>  
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="The logo icon for Express" title="Express"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="The logo icon for NodeJS" title="Node JS"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="The logo icon for MongoDB" title="MongoDB"/>
                <Skill source="https://visualpharm.com/assets/115/Rest%20Api-595b40b65ba036ed117d3b7b.svg" alt="The logo icon for Restful API" title="Restful API"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="The logo icon for Bootstrap" title="Bootstrap"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="The logo icon for NPM" title="NPM"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="The logo icon for Git" title="Git"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="The logo icon for Visual Studio Code" title="VSCode"/>
            </div>            
        </div>
    )
}

export default Skills