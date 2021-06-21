import React from 'react'
import { getSingleUser } from '../lib/api'
import { Link } from 'react-router-dom'
import { isAuthor } from '../lib/auth'

import { faEnvelope, faPlusCircle, faCameraRetro, faCodeBranch, faBriefcase, faDesktop, faDove, faPlus, faSchool, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { useParams } from 'react-router-dom'


function UserCard({ id, profileImage , username, gacohort, github, linkedin, instagram, personalsite, twitter, userId }) {

  // const { id } = useParams()



  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getSingleUser(id)
        setUser(response.data)


      } catch (error) {
        console.log(error)
      }

    }

    getData()
  }, [id])



  return (
    <>
      <div className="mainUser-card">
        <div className="user-card-container">
          <div className="user-profile-image">
            <Link to={`/profile/${userId}`}>
              <img src={user && user.profileImage || profileImage} />
            </Link>
          </div>
          <div className="user-deets-container">
            <div className="user-title">
              <h3>{user && user.username || username}</h3>
              <h4>{user && user.jobTitle }</h4>
            </div>
            <div className="user-site link">
              {/* <a href={user && user.personalsite}>{user && user.personalsite}</a> */}
            </div>
            <br />
          </div>
          <div className="btn-container">
            <button><FontAwesomeIcon icon={faPlusCircle} /> Follow</button>
            <button className="hire-btn"><FontAwesomeIcon icon={faEnvelope} /> Hire Me</button>
            <Link to="/projects/new">

              {isAuthor(user && user.id) ?
                <button className="addProject"><FontAwesomeIcon icon={faPlus} /> Add Project</button>
                :
                <div />
              }
            </Link>
            <Link to={`/auth/profile/${id}/edit/`}>
              {isAuthor(user && user.id) ?
                <button className="editProfile" ><FontAwesomeIcon icon={faEdit}/> Edit Profile
                </button>
                :
                <div/>
              }
            </Link>
          </div>
          <br />
          <hr />
          <br />
          <div className="user-site-link">
            <p><FontAwesomeIcon icon={faSchool} /> Cohort : <a href={`http://${user && user.github}`} target="_blank" rel="noopener noreferrer"> <span>{user && user.gacohort || gacohort}</span></a></p>
            <p><FontAwesomeIcon icon={faCodeBranch} /> GitHub : <a href={`http://${user && user.github}`} target="_blank" rel="noopener noreferrer"><span> { user && user.github || github }</span></a></p>
            <p><FontAwesomeIcon icon={faBriefcase} /> LinkedIn : <a href={`http://${user && user.linkedin}`} target="_blank" rel="noopener noreferrer"> <span>{user && user.linkedin || linkedin}</span></a></p>
            <p><FontAwesomeIcon icon={faDesktop} /> My Site : <a href={`http://${user && user.personalsite}`} target="_blank" rel="noopener noreferrer"> <span>{user && user.personalsite || personalsite}</span></a></p>
            <p><FontAwesomeIcon icon={faDove} /> Twitter : <a href={`http://${user && user.twitter}`} target="_blank" rel="noopener noreferrer"><span>{user && user.twitter || twitter }</span></a></p>
            <p><FontAwesomeIcon icon={faCameraRetro} /> Instagram :<a href={`http://${user && user.instagram}`} target="_blank" rel="noopener noreferrer"> <span>{user && user.instagram || instagram}</span></a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserCard