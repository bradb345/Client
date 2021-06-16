import { faCodeBranch, faUser, faThumbsUp, faDesktop, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import { getAllProjects } from '../lib/api.js'

function ProjectCard() {

  const [projects, setProjects] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const res = await getAllProjects()
      setProjects(res.data)
      console.log(res.data)
    }
    getData()
  }, [])

  return (
    <>
      <div className="project-body">
        <div className="project-container">
          <div className="project-display">
            {projects.map(project => (
              <div key={project.id}>
                <iframe
                  src={project.url}
                  width="300px"
                  height="300px"
                  title="Project Name"
                  scrolling="no"
                />

                <div className="project-info">
                  <ul className="user-links">
                    <li><a href="#"><FontAwesomeIcon icon={faUser}/> UserName: {project.username}</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faDesktop}/> Project Type: {project.projectType}</a></li>
                  </ul>
                  <br/>
                  <hr/>
                  <br/>
                  <ul className="site-links">
                    <li><a href={project.owner.LinkedIn}><FontAwesomeIcon icon={faLink}/> LinkedIn</a></li>
                    <li><a href={project.owner.GitHub}><FontAwesomeIcon icon={faCodeBranch}/> GitHub</a></li>
                    <span className="like"><li><a href="#"><FontAwesomeIcon icon={faThumbsUp}/> Like</a></li></span>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard