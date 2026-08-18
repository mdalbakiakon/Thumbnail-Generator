import React, { useContext } from "react";
import planContext from "../context/plan/planContext";

const Pricing = () => {
  const { plan, togglePlanYear, togglePlanMonth } = useContext(planContext);
  return (
    <section className="w-full flex flex-col justify-center items-center relative bg-[#151515] gap-5">
      <h2 className="text-center text-3xl leading-[0.85] relative z-10">
        Plans that work best for your <br /> Business
      </h2>

      <div className="bg-(--txt-main) p-0.5 rounded-full tracking-tighter flex justify-center items-center relative">
        <span
          className={`w-25 h-[calc(100%-4px)] rounded-full bg-[#151515] absolute top-0.5 transition-all duration-700 ease-out ${
            plan === "monthly"
              ? "left-0.5"
              : "left-[calc(100%-102px)]"
          }`}
        ></span>

        <button
          onClick={togglePlanMonth}
          className={`w-25 text-white mix-blend-difference py-1.5 rounded-full relative z-10 cursor-pointer`}
        >
          Monthly
        </button>

        <button
          onClick={togglePlanYear}
          className={`w-25 text-white mix-blend-difference py-1.5 rounded-full relative z-10 cursor-pointer`}
        >
          Yearly
        </button>
      </div>
    </section>
  );
};

export default Pricing;
