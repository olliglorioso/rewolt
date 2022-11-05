import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getOrders } from "../requests/post";

const UserPage = () => {
  const token = useSelector((state: any) => state.token);
  const [orders, setOrders] = useState([])
  useEffect(() => {
    const temp = async () => await getOrders("samu2@test.fi", token)
    temp().then(x => setOrders(x.map((y: { title: any; }) => y.title)))
  }, [])
  console.log(orders)
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
        my: 5,
        minWidth: 225,
        justifyContent: "center",
        gap: 3,
      }}
    >
      <Typography variant="h3" textAlign="center">Welcome to your profile!</Typography>
      <Divider light />
      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <Typography variant="h4">History</Typography>
        <Box sx={{maxHeight: 400, overflow: "auto"}}>
          {orders.map(order => <Typography textAlign="center">{order}</Typography>)}
        </Box>
      </Box>
    </Box>
  )
}

export default UserPage