import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getSingleUser } from '../lib/api.js'

import { faUser, faThumbsUp, faDesktop  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { isAuthenticated, getCurrentUserId } from '../lib/auth'
import { likeProject } from '../lib/api'

import React from 'react'


function ProjectCard({ projectName, url, owner, handleUpdateProject, projectId, likedByArray }) {

  const [likeText, setLikeText] = React.useState('Like')

  const handleLike = async (event) => {
    event.stopPropagation()

    if (!isAuthenticated()) {
      history.push('/auth')
    }

    likedByArray.includes(getCurrentUserId()) ? setLikeText('Unlike') : setLikeText('Like')

    try {
      const res = await likeProject(projectId)
      handleUpdateProject(res.data)

    } catch (err) {
      console.warn(err)
    }

  }



function ProjectCard({ projectName, url }) {

  const { id } = useParams()
  const [owner, setOwner] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      const res = await getSingleUser(id)
      setOwner(res.data.project.owner.id)
      console.log(res.data)
      console.log(res.data.project.owner)
    }
    getData()
  }, [id])



  return (
    <>
      <Link to={`/profile/${id}`}>
        <div className="project-body">
          <div className="project-container">
            <div className="project-display">
              <iframe
                src={url}
                width="300px"
                height="300px"
                title="Project Name"
                scrolling="no"
              />

              <div className="project-info">
                <ul className="user-links">
                  <li><a href="#"><FontAwesomeIcon icon={faUser}/> Project Name: {projectName} </a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faDesktop}/> Project Type: Game</a></li>
                </ul>
                <br/>
                <span className="like"><li><FontAwesomeIcon icon={faThumbsUp}/> Like</li></span>
              
                {/* <hr/>

  return (
    <>
      <div className="project-body">
        <div className="project-container">
          <div className="project-display">
            <iframe
              src={url}
              width="300px"
              height="300px"
              title="Project Name"
              scrolling="no"
            />

            <div className="project-info">
              <ul className="user-links">
                <li><a href="#"><FontAwesomeIcon icon={faUser} /> Project Name: {projectName} </a></li>
                <li><a href="#"><FontAwesomeIcon icon={faDesktop} /> {owner}</a></li>
              </ul>
              <br />
              <span onClick={handleLike} className="like"><li><a href="#"><FontAwesomeIcon icon={faThumbsUp} /> {likeText} {likedByArray.length}</a></li></span>
              {/* <hr/>
              {/* <br/>
              <br/>

              <ul className="site-links">
                <li><a href='#'><FontAwesomeIcon icon={faLink}/> LinkedIn</a></li>
                <li><a href="#"><FontAwesomeIcon icon={faCodeBranch}/> GitHub</a></li>
                <span className="like"><li><a href="#"><FontAwesomeIcon icon={faThumbsUp}/> Like</a></li></span>
              </ul> */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ProjectCard