import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import StateExample from "./lec2612/stateexmp1";
import StateMerge from "./lec2612/statemerge";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateMerge />
  </StrictMode>
);
