import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import "./success.scss"
import { useLocation } from "react-router-dom";

const SuccessOrderPage = () => {
  const navigate = useNavigate();
  const trackingUrl = useParams().trackingUrl;
  console.log(trackingUrl)
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
        my: 5,
        minWidth: 225,
        justifyContent: "center",
        gap: 3,
      }}
    >
      <div className="success-checkmark">
        <div className="check-icon">
          <span className="icon-line line-tip"></span>
          <span className="icon-line line-long"></span>
          <div className="icon-circle"></div>
          <div className="icon-fix"></div>
        </div>
      </div>
      <Typography variant="h5" textAlign="center">
        The order has been submitted successfully. You can track your order{" "}
        <a href={trackingUrl}>here</a>
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
