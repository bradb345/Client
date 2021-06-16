import React from 'react'

import ProjectCard from './ProjectCard.js'
// import NavBar from '../common/NavBar.js'
import { getAllProjects } from '../lib/api.js'

function ProjectIndex({ searchTerm }) {

  // const [searchTerm, setSearchTerm] = React.useState('')
  const [projects, setProjects] = React.useState(null)
  const [isError, setIsError] = React.useState(false)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllProjects()
        setProjects(response.data)
        console.log(response.data)
        console.log(response.data.map(project => project.projectName))
      } catch (error) {
        setIsError(true)
      }
    }
    getData()
  }, [searchTerm])

  const filterProjects = (projects) => {
    return (
      projects.filter(project => {
        if (projects) {
          return (
            project.projectName.toLowerCase().includes(searchTerm)
          )
        }
      })
    )
  }

  return (
    <>
      {/* <NavBar setSearchTerm={setSearchTerm}/> */}
      <div className="ProjectIndex-Container">
        {projects &&
          filterProjects(projects).map((project) => (
            <ProjectCard
              key={project.id}
              url={project.url}
              projectName={project.projectName}
            />

          ))}

      </div>
    </>
  )

}

export default ProjectIndex