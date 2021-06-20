import UserCard from './UserCard.js'
import ProjectIndex from '../projects/ProjectIndex.js'
import React from 'react'


function UserFeed() {

  // const [projects, setProjects] = React.useState(null)
  
  console.log(ProjectIndex)

  return (
    <div className="main-user-feed-container"> 
      <div className="userpage-container">
        <div className="userprofile">
          <UserCard/>
        </div>
        <div className="userfeed">   
          <ProjectIndex/>
        </div>
      </div>
    </div>
  )
}

export default UserFeed