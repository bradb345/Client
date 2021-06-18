import UserCard from './UserCard.js'
import ProjectIndex from '../projects/ProjectIndex.js'

function UserFeed({ searchTerm }) {



  return (
    <div className="userpage-container">
      <div className="userprofile">
        <UserCard />
      </div>
      <div >
        <ProjectIndex searchTerm={searchTerm} />
      </div>
    </div>
  )
}

export default UserFeed