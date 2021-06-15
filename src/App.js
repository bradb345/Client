import React from 'react'
import Main from './Main.js'
import NavBar from './NavBar.js'
import SearchBar from './SearchBar.js'
import UserCard from './UserCard.js'
import UserCardFeed from './Feed.js'

function App() {
  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/endpoint') // * <-- replace with your endpoint
      const data = await res.json()
      console.log(data)
    }
    getData()
  })

  return (
    <>
      <NavBar/>
      {/* <Main/> */}
      {/* <UserCard/> */}
      <UserCardFeed/>
    </>
  )
}

export default App
