import { Button, TextField, Typography, Box, Link } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../requests/post";


const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await loginUser(email, password, navigate, dispatch);
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
        <TextField type="password" variant="outlined" label="Password" fullWidth onChange={e => setPassword(e.target.value)}/>
      </div>
      <Button onClick={handleSubmit} variant="contained" color="info">Login</Button>
      <div>Not registered yet? <Link href="/register" >Sign up</Link></div>
    </Box>
  </Box>
}

export default LoginPage