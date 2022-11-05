import { Box, Typography } from "@mui/material";
import React from "react";

const OrderPage = () => {
  return (
    <Box sx={{
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
        <Typography>Hello</Typography>
      </Box>
    </Box>
  )
}

export default OrderPage