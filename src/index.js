import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { AdminProvider } from "./context/adminContext";
import { DarkModeProvider } from "./context/darkModeContext";

ReactDOM.render(
  <React.StrictMode>
    <DarkModeProvider>
      <AdminProvider>
        <App />
      </AdminProvider>
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
