import UserCard from './UserCard.js'
import ProjectCard from '../projects/ProjectCard.js'

function UserCardFeed() {

  return (
    <div className="userpage-container">
      <div className="userprofile">
        <UserCard/>
      </div>
      <div className="userfeed">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </div>
  )
}

export default UserCardFeed