import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Main from "./pages/Main";
import SinglePage from "./components/SinglePage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route exact path="search" element={<Main />} />
        <Route path="single/:vacancyID" element={<SinglePage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
