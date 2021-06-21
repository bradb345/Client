import React from 'react'
import UserCard from '../users/UserCard.js'
import { getAllUsers } from '../lib/api'

function UserIndex({ searchTerm }) {

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
  }, [searchTerm])

  const filterUsers = () => {
    return (
      users.filter(user => {
        return (
          (user.username.toLowerCase().includes(searchTerm))
        )
      }))
  }

  return (

    <div className="ProjectIndex-Container">
      { users &&
        filterUsers().map((user) => (

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