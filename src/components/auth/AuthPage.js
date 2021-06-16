import React from 'react'
import Register from './Register'
import Login from './Login'


function AuthPage() {

  const [isLogin, setIsLogin] = React.useState(true)

  return (

    <div className="outer-box">
      <div className="box">
        <p>Project Expo</p>
        <div className="color-box">
          { isLogin ? <Login setIsLogin={setIsLogin} /> : <Register setIsLogin={setIsLogin} />}
          
          
        </div>
      </div>
    </div>


  )
}

export default AuthPage