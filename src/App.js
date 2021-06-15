import React from 'react'
import NavBar from './components/common/NavBar.js'
import UserCardFeed from './components/users/Feed.js'

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
      <UserCardFeed/>
    </>
  )
}

export default App
