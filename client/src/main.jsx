import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import "lenis/dist/lenis.css";
import PlanProvider from "./context/plan/PlanProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PlanProvider>
      <App />
    </PlanProvider>
  </BrowserRouter>,
);
