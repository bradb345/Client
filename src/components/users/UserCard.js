import { faEnvelope, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function UserCard() {

  return (
    <>
      <div className="user-card-container">
        <div className="user-profile-image">
          <img src= "https://lh3.googleusercontent.com/proxy/Glk_2PWJL-eKp62U0-DaJLlpoYwgiZ2qDRYbJgDSpd0j-TqQ_5RQv5EcLkxl7P8x0HlEvDZNV4iNA3QeZbSzBKV1WCXmqzfM0HOCeMFU8SVNq6p-GIXAsxDBB2l4cEr9skNcFzieVbkMZBfbflEcGPKTr0Dnen4FmXx1"/>
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