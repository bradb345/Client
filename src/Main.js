import React from 'react'

import { getAllProjects } from './components/lib/api'

function ProjectIndex() {

  const [projects, setProjects] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllProjects()
        setProjects(response.data)
        
        console.log('working')
      } catch (error) {
        console.log('something went wrong')
      }
    }
    getData()
  },[])

  return (
    <h1>Hello</h1>
  )
}

export default ProjectIndex
