import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-2.5 w-full z-50 px-2.5">
      <div className="w-full max-w-5xl mx-auto h-12.5 p-1.5 relative flex justify-between items-center bg-(--bg-main) rounded-full shadow-xl">
        {/* thumbgen logo */}
        <img
          src="/favicon.svg"
          alt="thumbgen logo"
          className="h-2/3 select-none ml-2.5"
        />

        {/* nav */}
        <nav className="h-full py-2.5 w-fit absolute left-1/2 -translate-x-1/2 flex justify-center items-center gap-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/generate">Generate</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
        </nav>

        {/* cta btn */}
        <button className="h-full px-2.5 rounded-full bg-(--txt-main) tracking-tight text-(--bg-main) cursor-pointer">Get Started</button>
      </div>
    </header>
  );
};

export default Navbar;
