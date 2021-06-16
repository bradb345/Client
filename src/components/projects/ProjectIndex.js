import React from 'react'

import ProjectCard from './ProjectCard.js'
import NavBar from '../common/NavBar.js'
import { getAllProjects } from '../lib/api.js'

function ProjectIndex() {

  const [searchTerm, setSearchTerm] = React.useState('')
  const [projects, setProjects] = React.useState(null)
  const [isError, setIsError] = React.useState(false)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllProjects()
        setProjects(response.data)
        console.log(response.data)
        console.log(response.data.map(project=> project.projectName))
      } catch (error) {
        setIsError(true)
      }
    }
    getData()
  }, [searchTerm])

  // const filterProjects = projects.filter(project => {
  //   return (
  //     project.projectName.toLowerCase().includes(searchTerm)
  //   )
  // })



  return (
    <>
      <NavBar setSearchTerm={setSearchTerm}/>

      { projects && 
        projects.map((project) => (
          <ProjectCard
            key={project.id}
            url={project.url}
            projectName={project.projectName}

          />

        ))}
  
    </>
  )

}

export default ProjectIndex