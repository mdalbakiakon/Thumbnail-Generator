import React, { useState } from "react";
import planContext from "./planContext";

const PlanProvider = ({ children }) => {
  const [plan, setPlan] = useState("monthly");

  const togglePlanYear = () => {
    setPlan("yearly");
  };

  const togglePlanMonth = () => {
    setPlan("monthly");
  };

  return (
    <planContext.Provider value={{ plan, togglePlanYear, togglePlanMonth }}>
      {children}
    </planContext.Provider>
  );
};

export default PlanProvider;