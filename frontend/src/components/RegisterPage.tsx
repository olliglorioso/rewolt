import { Button, TextField, Typography, Box, Link } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../requests/post";
import { useDispatch } from "react-redux";

const RegisterPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await registerUser(email, password, phone, navigate, dispatch);
  };

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
        minWidth: 300,
        justifyContent: "center",
        gap: 3,
      }}
    >
      <Typography variant="h3">Register here</Typography>
      <Typography variant="caption" align="right">
        Make a rewoltution with us.
      </Typography>
      <div>
        <TextField
          variant="outlined"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
      </div>
      <div>
        <TextField
          variant="outlined"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          fullWidth
        />
      </div>
      <div>
        <TextField
          variant="outlined"
          label="Phone"
          onChange={(e) => setPhone(e.target.value)}
          fullWidth
        />
      </div>
      <Button onClick={handleSubmit} variant="contained" color="info">
        Register now
      </Button>
      <div>
        Already registered? <Link href="/login">Sign in</Link>
      </div>
    </Box>
  );
};

export default RegisterPage;
