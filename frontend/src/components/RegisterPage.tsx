import { Button, TextField, Typography, Box } from "@mui/material";
import React from "react";

const RegisterPage = () => {
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
      <Typography variant="caption" align="right">Make the future better now</Typography>
      <div>
        <Typography variant="body1">Email</Typography>
        <TextField variant="outlined" label="Email" fullWidth/>
      </div>
      <div>
        <Typography variant="body1">Password</Typography>
        <TextField variant="outlined" label="Username" fullWidth/>
      </div>
      <Button variant="contained" color="info">Register now</Button>
    </Box>
  </Box>
}

export default RegisterPage