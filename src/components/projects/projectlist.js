import React from 'react'
import Projectsummary from './projectsummary'

const projectlist = ({projects, users}) => {
    return (
      <div className="project-list section">
        { projects && projects.map(project => {
          return (
            <div>
            <Projectsummary project={project} users={users} key={project.id} /></div>
          )
        })}  
      </div>
    )
  }
  
  export default projectlist