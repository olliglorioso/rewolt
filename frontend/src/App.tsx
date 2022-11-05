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
<<<<<<< Updated upstream
  let token: any = useSelector((state: StateT) => state.token)
  if (!token || token === "") {
    token = localStorage.getItem("token") ? localStorage.getItem("token") : ""
  }

  const tokenExists = token !== "" && token !== undefined 

=======
  const token = "undefined"
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            <Route path="/" element={<div></div>} />
=======
            <Route path="" element={token ? <div>Nothing here but us chickens</div> : <LoginPage />} />
>>>>>>> Stashed changes
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}
