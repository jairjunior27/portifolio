import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProviderMenu } from "./provider/providerMenu.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProviderMenu>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ProviderMenu>
  </React.StrictMode>
);
