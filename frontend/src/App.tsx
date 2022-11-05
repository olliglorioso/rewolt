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

export default function App() {
  const token = undefined
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
