import React from 'react'
import { getAllProjects, getSingleUser } from '../lib/api'

import { faEnvelope, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useParams } from 'react-router-dom'


function UserCard() {

  const { id } = useParams()

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
      <div className="user-card-container">
        <div className="user-profile-image">

          <img src="https://uploads-ssl.webflow.com/6030077fdbd53858ff7c4765/603c1ac00b9e8a080528b4ae_SalonBrillareGenericProfileAvi.jpg" />
        </div>
        <div className="user-deets-container">
          <div className="user-title">
            <p>{user && user.username}</p>
            <p>Junior Software Developer</p>
          </div>
          <div className="user-site link">
            <a href="https://gasdrawls.com/">www.gasdrawls.com</a>
          </div>
          <br />
        </div>
        <div className="btn-container">
          <button><FontAwesomeIcon icon={faPlusCircle} /> Follow</button>
          <button className="hire-btn"><FontAwesomeIcon icon={faEnvelope} /> Hire Me</button>
        </div>
      </div>


    </>
  )
}

export default UserCard