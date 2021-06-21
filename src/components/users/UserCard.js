import React from 'react'
import { getSingleUser } from '../lib/api'
import { Link } from 'react-router-dom'
import { isAuthor } from '../lib/auth'

import { faEnvelope, faPlusCircle, faCameraRetro, faCodeBranch, faBriefcase, faDesktop, faDove, faPlus, faSchool, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { useParams } from 'react-router-dom'


function UserCard({ id, profileImage , username, gacohort, github, linkedin, instagram, personalsite, twitter }) {

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

            <img src={user && user.profileImage || profileImage} />
          </div>
          <div className="user-deets-container">
            <div className="user-title">
              <p>{user && user.username || username}</p>
              <p>Junior Software Developer</p>
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
            <Link to={`/profile/${id}/edit/`}>
              {isAuthor(user && user.id) ?
                <button className="editProfile" ><FontAwesomeIcon icon={faEdit}/> Edit
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
            <p><FontAwesomeIcon icon={faSchool} /> Cohort : <span>{user && user.gacohort || gacohort }</span></p>
            <p><FontAwesomeIcon icon={faCodeBranch} /> GitHub : <span>{user && user.github || github }</span></p>
            <p><FontAwesomeIcon icon={faBriefcase} /> LinkedIn : <span>{user && user.linkedin || linkedin}</span></p>
            <p><FontAwesomeIcon icon={faDesktop} /> My Site : <span>{user && user.personalsite || personalsite}</span></p>
            <p><FontAwesomeIcon icon={faDove} /> Twitter : <span>{user && user.twitter || twitter }</span></p>
            <p><FontAwesomeIcon icon={faCameraRetro} /> Instagram : <span>{user && user.instagram || instagram}</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserCard