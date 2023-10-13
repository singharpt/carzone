import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "picocss/pico.min.css";
import { MyContextProvider } from "./components/ContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </MyContextProvider>
);
