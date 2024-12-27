import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import StateExample from "./lec2612/stateexmp1";
// import StateMerge from "./lec2612/statemerge";
import PropExample from "./lec2712/propexmp1";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PropExample />
  </StrictMode>
);
