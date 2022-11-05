import { Button, TextField, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../requests/post";
import { useDispatch } from "react-redux";

const RegisterPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await registerUser(email, password, navigate, dispatch);
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
      <Typography variant="h3">Register here</Typography>
      <Typography variant="caption" align="right">Make a rewoltution with us.</Typography>
      <div>
        <TextField variant="outlined" label="Email" onChange={e => setEmail(e.target.value)} fullWidth/>
      </div>
      <div>
        <TextField variant="outlined" type="password" onChange={e => setPassword(e.target.value)} label="Password" fullWidth/>
      </div>
      <Button onClick={handleSubmit} variant="contained" color="info">Register now</Button>
    </Box>
  </Box>
}

export default RegisterPage