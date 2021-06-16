import React from 'react'
import Register from './Register'
import Login from './Login'


function AuthPage({ setIsLoginForm, isLoginForm }) {

  

  return (

    <div className="outer-box">
      <div className="box">
        <p>Project Expo</p>
        <div className="color-box">
          {isLoginForm ? <Login setIsLoginForm={setIsLoginForm} /> : <Register setIsLoginForm={setIsLoginForm} />}
        </div>
      </div>
    </div>


  )
}

export default AuthPage