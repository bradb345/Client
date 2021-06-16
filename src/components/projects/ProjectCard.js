import { faCodeBranch, faUser, faThumbsUp, faDesktop, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function ProjectCard({ projectName, url, owner }) {
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
                <li><a href="#"><FontAwesomeIcon icon={faUser}/> Project Name: {projectName} </a></li>
                <li><a href="#"><FontAwesomeIcon icon={faDesktop}/> {owner}</a></li>
              </ul>
              <br/>
              <span className="like"><li><a href="#"><FontAwesomeIcon icon={faThumbsUp}/> Like</a></li></span>
              {/* <hr/>
              {/* <br/>
              <ul className="site-links">
                <li><a href='#'><FontAwesomeIcon icon={faLink}/> LinkedIn</a></li>
                <li><a href="#"><FontAwesomeIcon icon={faCodeBranch}/> GitHub</a></li>
                <span className="like"><li><a href="#"><FontAwesomeIcon icon={faThumbsUp}/> Like</a></li></span>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default ProjectCard