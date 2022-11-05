import { Box, Icon, Typography } from "@mui/material";
import chicken from "../../public/chicken.jpeg";
import React from "react";

const NanPage = () => {
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
      <Typography variant="h5">Nothing here but us chickens</Typography>
      <Box
        component="img"
        sx={{
          height: 400,
          width: 350,
        }}
        src={chicken}
      />
    </Box>
  );
};

export default NanPage;