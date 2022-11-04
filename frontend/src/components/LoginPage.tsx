import React from 'react';
import TextField from '@mui/material/TextField';

const LoginPage = () => {
  return (
    <div>
      <h1>Login page</h1>
      <div>
        <p>Username</p>
        <TextField label="Username" variant='outlined'/>
      </div>
      <div>
        <p>Password</p>
        <TextField label="Password" variant="outlined"/>
      </div>
    </div>
  )
}

export default LoginPage