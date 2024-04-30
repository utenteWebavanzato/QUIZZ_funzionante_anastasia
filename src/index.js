import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Navbar"
import Quiz from "./Quiz"
import Dashboard from "./Dashboard"
import Layout from "./Layout"

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />}/>
          <Route path="quiz" element={<Quiz />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);