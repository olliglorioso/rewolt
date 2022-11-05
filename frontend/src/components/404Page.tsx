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
        mt: 5,
        minWidth: 225,
        justifyContent: "center",
        gap: 3,
      }}
    >
      <Typography variant="h5">Nothing here but us chickens</Typography>
      <Box
        component="img"
        sx={{
          height: {"md": 400, "xs": 300},
          width: {"md": 350, "xs": 240},
        }}
        src={chicken}
      />
    </Box>
  );
};

export default NanPage;
