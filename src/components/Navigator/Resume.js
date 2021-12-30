import React from 'react';

const Resume = () => {
  const frontEndSkills = ['HTML', 'JavaScript','Bootstrap','AJAX','MySQL','jQuery', 'React']
  const backEndSkills = [ 'APIs','Node','Express','MySQL','Sequelize']
  return(
    <div className="resume">
      <div>Resume</div>
      <div>
        <h3>Front-end Skills</h3>
        <ul>
          {frontEndSkills.map(frontEnd => (
            <li className ="skills" >{frontEnd}</li>
          ))}
        </ul>
        <h3>Back-end Skills</h3>
        
        <ul>
          {backEndSkills.map(backEnd => (
          <li className = 'skills' >{backEnd}</li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default Resume;