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
        bgcolor: "info.main",
        borderRadius: 5,
        p: 10,
        justifyContent: "center",
        gap: 3
      }
    }>
      <Typography variant="h3">Register here</Typography>
      <Typography variant="caption">Make the future better</Typography>
      <div>
        <Typography variant="body1">Username</Typography>
        <TextField variant="outlined" label="Username" fullWidth/>
      </div>
      <div>
        <Typography variant="body1">Password</Typography>
        <TextField variant="outlined" label="Username" fullWidth/>
      </div>
      <Button variant="contained">Register now</Button>
    </Box>
  </Box>
}

export default RegisterPage