import UserCard from './UserCard.js'
import ProjectIndex from '../projects/ProjectIndex.js'
import { useParams } from 'react-router-dom'

function UserFeed({ searchTerm }) {

  const { id } = useParams()

  

  return (
    <div className="userpage-container">
      <div className="userprofile">
        <UserCard id={id} />
      </div>
      <div className="userfeed-projects">
        <ProjectIndex searchTerm={searchTerm} id={id} />
      </div>
    </div>
  )
}

export default UserFeed