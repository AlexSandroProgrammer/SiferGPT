import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SiferGpt } from "./SiferGpt";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SiferGpt />
  </StrictMode>
);
