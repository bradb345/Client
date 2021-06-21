import React from 'react'
import UserCard from '../users/UserCard.js'
import { getAllUsers } from '../lib/api'

import Error from '../common/Error.js'

import Loader from 'react-loader-spinner'

function UserIndex({ searchTerm }) {
  const [users, setUsers] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !users && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllUsers()
        setUsers(response.data)
        console.log(response.data)
      } catch (error) {
        setIsError(true)
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
    <>
      <div className="ProjectIndex-Container">
        {isError && <Error />}
        {isLoading && <Loader
          type="TailSpin"
          color="#F70C0C"
          height={100}
          width={100} //3 secs
        />}


        <div className="ProjectIndex-Container">
          { users &&
        filterUsers().map((user) => (

          <UserCard
            key={user.id}
            userId={user.id}
            profileImage={user.profileImage}
            username={user.username}
            gacohort={user.gacohort}
            github={user.github}
            linkedin={user.linkedin}
            personalsite={user.personalsite}
            twitter={user.twitter}
            instagram={user.instagram}
            // jobTitle={user.jobTitle}
          />

        ))
          }
        </div>
      </div>
    </>
  )
}

export default UserIndex