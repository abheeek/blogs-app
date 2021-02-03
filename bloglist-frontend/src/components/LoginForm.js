import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../actions/usersActions'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(loginUser({ username, password}))
    setUsername('')
    setPassword('')
  }

  return (
    <div>
      <h2>log in to application</h2>
      <form onSubmit={handleLogin}>
        <div>
          username
            <input
            type="text"
            value={username}
            name="Username"
            onChange={handleUsernameChange}
          />
          password
            <input
            type="password"
            value={password}
            name="Password"
            autoComplete="off"
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">login</button> 
      </form>
    </div>
  )  
}

export default LoginForm