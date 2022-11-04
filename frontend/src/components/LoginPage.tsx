import { Button, TextField, Typography, Box } from "@mui/material";
import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  console.log(email, password);

  return <Box sx={{
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
        borderRadius: 5,
        boxShadow: 3,
        py: 10,
        px: 5,
        minWidth: 300,
        justifyContent: "center",
        gap: 3
      }
    }>
      <Typography variant="h3" align="center">Login</Typography>
      <div>
        <TextField variant="outlined" label="Email" fullWidth onChange={e => setEmail(e.target.value)}/>
      </div>
      <div>
        <TextField variant="outlined" label="Password" fullWidth onChange={e => setPassword(e.target.value)}/>
      </div>
      <Button variant="contained" color="info">Login</Button>
    </Box>
  </Box>
}

export default LoginPage