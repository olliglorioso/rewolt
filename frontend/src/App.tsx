// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  redirect,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import React, { useEffect, useState } from "react";
import MenuBar from "./components/MenuBar";
import OrderPage from "./components/OrderPage";
import {
  Box,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Toolbar,
} from "@mui/material";
import RegisterPage from "./components/RegisterPage";
import { useDispatch, useSelector } from "react-redux";
import NanPage from "./components/404Page";
import SuccessOrderPage from "./components/SuccesOrder";
import { setEmail, setToken } from "./redux/store";
import UserPage from "./components/UserPage";
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import ListingPage from "./components/ListingPage";
import SuccessListingPage from "./components/SuccessListing";

interface StateT {
  token: string;
  email: string;
}

export default function App() {
  const theme = responsiveFontSizes(createTheme());
  let token: any = useSelector((state: StateT) => state.token);
  let email: any = useSelector((state: StateT) => state.email)
  const dispatch = useDispatch();
  if (!token || token === "") {
    token = localStorage.getItem("token") ? localStorage.getItem("token") : "";
  }
  if (!email || email === "") {
    email = localStorage.getItem("email") ? localStorage.getItem("email") : "";
  }
  useEffect(() => {
    dispatch(setToken(token));
    dispatch(setEmail(email))
  }, [token, dispatch]);

  const tokenExists = token !== "" && token !== undefined;
  return (
    <ThemeProvider theme={theme}>
      <ReactNotifications />
      <Router>
        <Box sx={{ minHeight: "100vh", bgcolor: "lightblue" }}>
          {tokenExists ? <MenuBar /> : <div></div>}
          <Box
            component="main"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "full",
              height: "screen",
              justifyContent: "center",
            }}
          >
            {" "}
            <Toolbar />
            <Routes>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/order"
                element={tokenExists ? <OrderPage /> : <LoginPage />}
              />
              <Route
                path="/successOrder/:trackingUrl"
                element={tokenExists ? <SuccessOrderPage /> : <LoginPage />}
              />
              <Route
                path="/successListing"
                element={tokenExists ? <SuccessListingPage /> : <LoginPage />}
              />
              <Route
                path="/userInfo"
                element={tokenExists ? <UserPage /> : <LoginPage />} 
              />
              <Route path="/listing" element={token ? <ListingPage /> : <LoginPage />} />
              <Route path="" element={token ? <NanPage /> : <LoginPage />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}
