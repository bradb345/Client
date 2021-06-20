import React from 'react'
import UserCard from '../users/UserCard.js'
import { getAllUsers } from '../lib/api'

function UserIndex() {

  const [users, setUsers] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllUsers()
        setUsers(response.data)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (

    <div className="ProjectIndex-Container">
      { users && 
        users.map((user) => (

          <UserCard
            key={user.id}
            profileImage={user.profileImage}
            username={user.username}
            gacohort={user.gacohort}
            github={user.github}
            linkedin={user.linkedin}
            personalsite={user.personalsite}
            twitter={user.twitter}
            instagram={user.instagram}
          />
        ))
      }
    </div>
  )
}

export default UserIndex