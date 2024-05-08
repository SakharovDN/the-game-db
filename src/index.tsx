import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

import { HelmetProvider } from "react-helmet-async";
import { setupInterceptors } from "./app/services/interceptors";

setupInterceptors();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
