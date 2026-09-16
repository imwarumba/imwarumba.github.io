import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import CVPage from "./CVPage";

const redirect = sessionStorage.getItem("redirect");

if (redirect) {
  sessionStorage.removeItem("redirect");

  if (
    redirect !== "/" &&
    redirect !== window.location.pathname + window.location.search + window.location.hash
  ) {
    window.history.replaceState(null, "", redirect);
  }
}

const path = window.location.pathname.replace(/\/+$/, "") || "/";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {path === "/cv" ? <CVPage /> : <App />}
  </StrictMode>,
);