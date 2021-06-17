import UserCard from './UserCard.js'
import ProjectIndex from '../projects/ProjectCard.js'

function UserFeed() {

  

  return (
    <div className="userpage-container">
      <div className="userprofile">
        <UserCard/>
      </div>
      <div className="userfeed">
        {/* <ProjectIndex /> */}
      </div>
    </div>
  )
}

export default UserFeed