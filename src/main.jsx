import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

const root = document.getElementById("root");

function Main() {
  return (
    <>
      <div>
        <App />
      </div>
    </>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
