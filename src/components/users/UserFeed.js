// import UserCard from './UserCard.js'
// import ProjectCard from '../projects/ProjectCard.js'

function UserFeed({ UserCard, ProjectCard }) {

  

  return (
    <div className="userpage-container">
      <div className="userprofile">
        <UserCard/>
      </div>
      <div className="userfeed">
        <ProjectCard/>
      </div>
    </div>
  )
}

export default UserFeed