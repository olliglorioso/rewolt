import { Button, TextField, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../requests/post";


const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("")
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await loginUser(email, password, navigate, dispatch);
  };

  const vaidate = () => {
    if (email.length <= 3) {
      setEmailError("Required field")
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "white",
        maxWidth: 400,
        maxHeight: 500,
        borderRadius: 5,
        boxShadow: 3,
        py: 10,
        px: 5,
        mt: 5,
        minWidth: 225,
        justifyContent: "center",
        gap: 3,
      }}
    >
      <Typography variant="h3" align="center">
        Login
      </Typography>
      <div>
        <TextField
          variant="outlined"
          label="Email"
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <TextField
          type="password"
          variant="outlined"
          label="Password"
          fullWidth
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button onClick={handleSubmit} variant="contained" color="info">
        Login
      </Button>
      <div>
        Not registered yet? <Link to="/register">Sign up</Link>
      </div>
    </Box>
  );
};

export default LoginPage;
