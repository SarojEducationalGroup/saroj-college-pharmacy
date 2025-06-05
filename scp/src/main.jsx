import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollTop from "./components/scrollTop";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <Router>
      <ScrollTop />
      <App/>
    </Router>
  </StrictMode>
);
