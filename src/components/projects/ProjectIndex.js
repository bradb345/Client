import React from 'react'

import ProjectCard from './ProjectCard.js'
import { getAllProjects } from '../lib/api.js'
import Error from '../common/Error.js'

import Loader from 'react-loader-spinner'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({


  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  root: {
    flexGrow: 1,
  },


}))

function ProjectIndex({ searchTerm, id }) {

  const classes = useStyles()

  const [projects, setProjects] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !projects && !isError

  const idToNum = Number(id)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllProjects()
        setProjects(response.data.reverse())
      } catch (error) {
        setIsError(true)
      }
    }
    getData()
  }, [searchTerm])

  const handleUpdateProjects = (updatedProject) => {

    const updatedProjects = projects.map((project) => {
      if (updatedProject.id !== project.id) {
        return project
      } else if (!updatedProject) {
        location.reload()
      }
      return updatedProject

    })

    setProjects(updatedProjects)
  }

  const filterProjects = (id) => {
    return (
      projects.filter(project => {
        if (id) {
          return (
            (project.projectName.toLowerCase().includes(searchTerm)) &&
            (project.owner.id === id)
          )
        }
        return (
          (project.projectName.toLowerCase().includes(searchTerm) ||
            project.owner.username.toLowerCase().includes(searchTerm))
        )
      })
    )
  }



  return (
    <>
      <Container className={classes.cardGrid} maxWidth="lg">
        {isError && <Error />}
        {isLoading && <Loader
          type="TailSpin"
          color="#F70C0C"
          height={80}
          width={80} //3 secs
        />}

        <Grid container spacing={2}>
          {projects &&
            filterProjects(idToNum).map((project) => (
              <ProjectCard
                key={project.id}
                url={project.url}
                projectName={project.projectName}
                username={project.owner.username}
                owner={project.owner.id}
                handleUpdateProjects={handleUpdateProjects}
                projectId={project.id}
                likedByArray={project.favoritedBy}
              />

            ))}
        </Grid>
      </Container>
    </>
  )

}

export default ProjectIndex

