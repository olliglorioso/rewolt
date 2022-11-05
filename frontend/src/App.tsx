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
  const [token, setToken] = useState("asd");

  if (!token) {
    return <LoginPage/>;
  }

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <MenuBar />
        <Box component="main">
          <Toolbar />
          <Routes>
            <Route path="" element={<div></div>} />
            <Route path="newOrder" element={<OrderPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}
