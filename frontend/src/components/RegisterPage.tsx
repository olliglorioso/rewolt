import { Button, TextField, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../requests/post";
import { useDispatch } from "react-redux";
import Joi from "joi"

const schema = Joi.object({
  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  phone: Joi.string()
    .pattern(new RegExp('^[0-9]{3,30}$')),
})


const RegisterPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const errors = schema.validate({ email, password, phone })
    if (errors.error && errors.error.details.length > 0) {
      if (errors.error.details[0].message.includes("email")) setError("Email is not valid.")
      else if (errors.error.details[0].message.includes("password")) setError("Password is not valid.")
      else setError("Phone is not valid.")
      return
    }
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
        mt: 5,
        minWidth: 225,
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
      { error ? <Typography variant="caption" color="error">{error}</Typography> : null }
      <Button onClick={handleSubmit} variant="contained" color="info">
        Register now
      </Button>
      <div>
        Already registered? <Link to="/login">Sign in</Link>
      </div>
    </Box>
  );
};

export default RegisterPage;
