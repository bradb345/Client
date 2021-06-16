import { faCodeBranch, faUser, faThumbsUp, faDesktop, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function ProjectCard() {
  
  return (
    <>
      <div className="project-body">
        <div className="project-container">
          <div className="project-display">
            <iframe
              src="https://www.stonesthrow.com/"
              width="300px"
              height="300px"
              title="Project Name"
              scrolling="no"
            />

            <div className="project-info">
              <ul className="user-links">
                <li><a href="#"><FontAwesomeIcon icon={faUser}/> UserName: {}</a></li>
                <li><a href="#"><FontAwesomeIcon icon={faDesktop}/> Project Type</a></li>
              </ul>
              <br/>
              <hr/>
              <br/>
              <ul className="site-links">
                <li><a href='#'><FontAwesomeIcon icon={faLink}/> LinkedIn</a></li>
                <li><a href="#"><FontAwesomeIcon icon={faCodeBranch}/> GitHub</a></li>
                <span className="like"><li><a href="#"><FontAwesomeIcon icon={faThumbsUp}/> Like</a></li></span>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default ProjectCard