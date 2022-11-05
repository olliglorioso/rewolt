import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
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
  let token = useSelector((state: StateT) => state.token)
  if (!token || token === "") {
    token = localStorage.getItem("token") ? localStorage.getItem("token") : ""
  }

  const tokenExists = token !== "" && token !== undefined 

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
            <Route path="/order" element={tokenExists ? <OrderPage /> : <LoginPage />} />
            <Route path="/register" element={tokenExists ? <RegisterPage /> : <LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<div></div>} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}
