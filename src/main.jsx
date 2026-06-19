import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./ui/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/tasks" element={<App />} />
        {/* <Route path="register" element={<Register />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
