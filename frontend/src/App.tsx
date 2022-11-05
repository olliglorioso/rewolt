import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  redirect
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import React, { useState } from "react";
import MenuBar from "./components/MenuBar";
import OrderPage from "./components/OrderPage";
import { Box, Toolbar } from "@mui/material";
import RegisterPage from "./components/RegisterPage";
import { useSelector } from "react-redux";

interface StateT {
  token: string;
}

export default function App() {
  let token: any = useSelector((state: StateT) => state.token)
  if (!token || token === "") {
    token = localStorage.getItem("token") ? localStorage.getItem("token") : ""
  }

  const tokenExists = token !== "" && token !== undefined 
  console.log(token)
  return (
    <Router>
      <Box>
          {   
            token 
            ? <MenuBar />
            : <div></div>
          }
        <Box component="main" sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}> <Toolbar />
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/order" element={tokenExists ? <OrderPage /> : <LoginPage />} />
            <Route path="" element={token ? <div>Nothing here but us chickens</div> : <LoginPage />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}
