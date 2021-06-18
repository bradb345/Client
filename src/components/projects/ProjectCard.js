import React from 'react'
import { Link, useHistory } from 'react-router-dom'


import { faUser, faThumbsUp, faDesktop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { isAuthenticated, getCurrentUserId, isAuthor } from '../lib/auth'
import { likeProject, deleteSingleProject } from '../lib/api'


function ProjectCard({ projectName, url, owner, handleUpdateProjects, projectId, likedByArray }) {

  const [likeText, setLikeText] = React.useState('Like')
  const history = useHistory()

  // React.useEffect(() => {
  //   likedByArray.includes(getCurrentUserId()) ? setLikeText('Unlike') : setLikeText('Like')
  //   const getData = async () => {
  //     try {
  //       await setLikedNames(await Promise.all(likedByArray.map(async (user) => {
  //         const res = await getSingleUser(user)
  //         return res.data.username
  //       })))
  //     } catch (err) {
  //       console.warn('Failed to fetch Author')
  //     }
  //   }
  //   getData()
  // }, [likedByArray])

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
                  <li><a href="#"><FontAwesomeIcon icon={faUser} /> Project Name: {projectName} </a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faDesktop} /> Project Type: Game</a></li>
                </ul>
                <br />
                <a onClick={handleLike} className="like" href="#"><FontAwesomeIcon icon={faThumbsUp} /> {likeText} {likedByArray && likedByArray.length}</a>

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