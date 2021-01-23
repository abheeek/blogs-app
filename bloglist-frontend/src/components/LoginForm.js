import React from 'react'

const LoginForm = ({
  handleLogin,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password
}) => (
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

export default LoginForm