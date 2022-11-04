import React from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button, Typography } from '@mui/material';

const LoginPage = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "row",
      width: "full",
      height: "screen",
      justifyContent: "center"
    }}>
      <Box sx={
        {
          display: "flex",
          flexDirection: "column",
          maxWidth: 400,
          maxHeight: 500,
          bgcolor: "info.main",
          borderRadius: 5,
          p: 10,
          justifyContent: "center"
        }
      }>
        <Typography variant='h3'>Login</Typography>
        <div>
          <p>Username</p>
          <TextField label="Username" variant='outlined'/>
        </div>
        <div>
          <p>Password</p>
          <TextField label="Password" variant="outlined"/>
        </div>
        <Button variant='contained'>Login</Button>
      </Box>
    </Box>
  )
}

export default LoginPage