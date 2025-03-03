import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/styles/global.css"; // global css to all components


const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);