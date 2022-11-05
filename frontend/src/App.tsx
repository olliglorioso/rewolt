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
import NanPage from "./components/404Page";
import SuccessOrderPage from "./components/SuccesOrder";

interface StateT {
  token: string;
}

export default function App() {
  let token: any = useSelector((state: StateT) => state.token)
  if (!token || token === "") {
    token = localStorage.getItem("token") ? localStorage.getItem("token") : ""
  }

  const tokenExists = token !== "" && token !== undefined 
  return (
    <Router>
      <Box>
          {   
            tokenExists
            ? <MenuBar />
            : <div></div>
          }
        <Box component="main" sx={{display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "full",
    height: "screen",
    justifyContent: "center"}}> <Toolbar />
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/order" element={tokenExists ? <OrderPage /> : <LoginPage />} />
            <Route path="/successfulOrder" element={tokenExists ? <SuccessOrderPage /> : <LoginPage />} />
            <Route path="" element={token ? <NanPage /> : <LoginPage />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}
