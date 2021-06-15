import { faEnvelope, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function UserCard() {

  return (
    <>
      <div className="user-card-container">
        <div className="user-profile-image">
          <img src= "https://i.pinimg.com/originals/24/69/64/2469640cf7511b12a1a5933219cc68b1.png"/>
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