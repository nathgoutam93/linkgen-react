import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { AdminProvider } from "./context/adminContext";

ReactDOM.render(
  <React.StrictMode>
    <AdminProvider>
      <App />
    </AdminProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
