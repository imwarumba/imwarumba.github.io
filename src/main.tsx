import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CVPage from "./CVPage.tsx";

const path = window.location.pathname.replace(/\/+$/, "") || "/";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {path === "/cv" ? <CVPage /> : <App />}
  </StrictMode>,
);