import { Button, TextField, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { loginUser } from "../requests/post";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await loginUser(email, password);
    return
  };

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
        p: 10,
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
      <Button onClick={handleSubmit} variant="contained" color="info">Login</Button>
    </Box>
  </Box>
}

export default LoginPage