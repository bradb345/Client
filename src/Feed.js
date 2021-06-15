import UserCard from './UserCard.js'
import ProjectCard from './ProjectCard.js'

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
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </div>
  )
}

export default UserCardFeed