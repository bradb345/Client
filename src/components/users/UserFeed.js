import UserCard from './UserCard.js'
import ProjectIndex from '../projects/ProjectIndex.js'
import { useParams } from 'react-router-dom'
import { Container } from '@material-ui/core'

function UserFeed({ searchTerm }) {

  const { id } = useParams()



  return (
    <Container>
      <div className="userlay">

        <UserCard id={id} />

        <ProjectIndex searchTerm={searchTerm} id={id} />

      </div>
    </Container>
  )
}

export default UserFeed