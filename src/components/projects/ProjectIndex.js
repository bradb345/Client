import React from 'react'

import ProjectCard from './ProjectCard.js'
import { getAllProjects } from '../lib/api.js'

function ProjectIndex({ searchTerm }) {

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

  const handleUpdateProjects = (updatedProject) => {
    
    const updatedProjects = projects.map((project) => {
      if (updatedProjects.id !== project.id) {
        return project
      } else if (!updatedProject) {
        location.reload()
      }
      return updatedProject

    })
    
    setProjects(updatedProjects)
  }

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
      <div className="ProjectIndex-Container">
        {projects &&
          filterProjects(projects).map((project) => (
            <ProjectCard
              key={project.id}
              url={project.url}
              projectName={project.projectName}
              owner={project.owner.username}
              handleUpdateProjects={handleUpdateProjects}
              projectId={project.id}
              likedByArray={project.favoritedBy}
            />

          ))}

      </div>
    </>
  )

}

export default ProjectIndex

