import React from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { deleteSingleProject, getSingleProject, getSingleUser } from '../lib/api.js'

import { faUser, faThumbsUp, faDesktop  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { isAuthenticated, getCurrentUserId, isAuthor } from '../lib/auth'
import { likeProject } from '../lib/api'


function ProjectCard({ projectName, url, owner, handleUpdateProject, projectId, likedByArray }) {

  const [likeText, setLikeText] = React.useState('Like')
  const history = useHistory()


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

  const handleDelete = async () => {
    await deleteSingleProject(projectId)
    history.push('/')
  }

  // console.log(setProject)
  // console.log(project.owner)
  return (
    <>
      <Link to={`/profile/${owner}`}>

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
                <span onClick={handleLike} className="like"><li><a href="#"><FontAwesomeIcon icon={faThumbsUp} /> {likeText} {likedByArray && likedByArray.length}</a></li></span>

                <div>
                  {isAuthor(owner) && (
                    <div>
                      <div>
                        <Link to={`/projects/${projectId}/edit/`}>
              Edit your Project
                        </Link>
                      </div>
                      <div>
                        <button onClick={handleDelete}>
              Delete you Project!
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>


            </div>
          </div>
        </div>

      </Link>
    </>
  )
}

export default ProjectCard