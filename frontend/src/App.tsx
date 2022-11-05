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
  const token = useSelector((state: StateT) => state.token)
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
            <Route path="/order" element={token ? <OrderPage /> : <LoginPage />} />
            <Route path="/register" element={token ? <RegisterPage /> : <LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="" element={<div></div>} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}
