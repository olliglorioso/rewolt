import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

const SuccessOrderPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 400,
        bgcolor: "white",
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
      <Typography variant="h5" textAlign="center">
        The order has been created successfully
      </Typography>
      <Button onClick={(e) => navigate("/order")} variant="contained">
        Make another one
      </Button>
      <Button onClick={(e) => navigate("/")} variant="outlined">
        Main page
      </Button>
    </Box>
  );
};

export default SuccessOrderPage;
