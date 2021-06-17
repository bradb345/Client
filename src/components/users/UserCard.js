import React from 'react'
import { getAllProjects } from '../lib/api.js'

import { faEnvelope, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function UserCard() {

  const [projects, setProjects] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllProjects()
        setProjects(response.data)
        console.log(response.data)
        console.log(response.data.map(project=>project.owner.id))
      } catch (error) {
        setIsError(true)
      }
    }
    getData()
  }, [])


  return (
    <>
      <div className="user-card-container">
        <div className="user-profile-image">

          <img src= "https://uploads-ssl.webflow.com/6030077fdbd53858ff7c4765/603c1ac00b9e8a080528b4ae_SalonBrillareGenericProfileAvi.jpg"/>
        </div>
        <div className="user-deets-container">
          <div className="user-title">
            <p>MF Doom</p>
            <p>Junior Software Developer</p>
          </div>
          <div className="user-site link">
            <a href="https://gasdrawls.com/">www.gasdrawls.com</a>
          </div>
          <br/>
        </div>
        <div className="btn-container">
          <button><FontAwesomeIcon icon={faPlusCircle}/> Follow</button>
          <button className="hire-btn"><FontAwesomeIcon icon={faEnvelope}/> Hire Me</button>
        </div>
      </div>


    </>
  )
}

export default UserCard