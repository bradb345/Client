import React from 'react'
import { Link, useHistory } from 'react-router-dom'


import { faUser, faThumbsUp, faDesktop, faEdit, faRemoveFormat } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { isAuthenticated, getCurrentUserId, isAuthor } from '../lib/auth'
import { likeProject, deleteSingleProject } from '../lib/api'


function ProjectCard({ projectName, url, owner, handleUpdateProjects, projectId, likedByArray, username }) {
  
  const [likeText, setLikeText] = React.useState('Like')
  const history = useHistory()

  React.useEffect(() => {
    likedByArray.some(like => like.id === getCurrentUserId()) ? setLikeText('Unlike') : setLikeText('Like')
  }, [likedByArray])

  const handleLike = async (event) => {
    event.stopPropagation()
    console.log()
    if (!isAuthenticated()) {
      history.push('/auth')
    }
    if (likedByArray.includes(getCurrentUserId())) {
      setLikeText('Unlike')
    } else {
      setLikeText('Like')
    } 
    console.log(likedByArray)
    try {
      const res = await likeProject(projectId)
      handleUpdateProjects(res.data)
      
    } catch (err) {
      console.log(err)
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
                  <li><a href="#"><FontAwesomeIcon icon={faDesktop} /> Project Name: {projectName} </a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faUser} /> User: {username} </a></li>
                </ul>
                <br />
                <hr/>
                <br/>
                <a onClick={handleLike} className="like" href="#"><FontAwesomeIcon icon={faThumbsUp} /> {likeText} {likedByArray && likedByArray.length}</a>

                <div>
                  {isAuthor(owner) && (
                    <div>
                      <div>
                        <Link to={`/projects/${projectId}/edit/`}>
                          <a><FontAwesomeIcon icon={faEdit}/> Edit</a>
                        </Link>
                      </div>
                      <div>
                        <a className="delete-project" onClick={handleDelete}><a><FontAwesomeIcon icon={faRemoveFormat}/> Delete</a>
                        </a>
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