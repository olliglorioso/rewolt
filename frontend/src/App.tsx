import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import React, { useState } from "react";
import MenuBar from "./components/MenuBar";

export default function App() {
  const [token, setToken] = useState("asd");

  if (!token) {
    return <LoginPage/>;
  }

  return (
    <Router>
      <div>
        <MenuBar />

        <Routes>
          <Route path="" element={<div></div>} />
        </Routes>
      </div>
    </Router>
  );
}
