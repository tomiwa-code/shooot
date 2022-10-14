import ReactDOM from "react-dom/client";
import React from "react"
import App from "./App"
import "./index.css"

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
const appHolder = (
    <React.StrictMode>
      <App />
    </React.StrictMode>
);
root.render(appHolder);