import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/global.css";
import App from "./App.tsx";
import { CRMProvider } from "./CRMContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CRMProvider>
      <App />
    </CRMProvider>
  </StrictMode>,
);
