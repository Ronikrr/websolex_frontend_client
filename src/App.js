
import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import WOW from "wow.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "animate.css";
import "./App.css";
import AppRoutes from "./router";
import { Analytics } from "@vercel/analytics/react"

function App() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <Router>
      <AppRoutes />
      <Analytics />
    </Router>
  );
}

export default App;

