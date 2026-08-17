import React from "react";

const Landing = () => {
  return (
    <section className="w-full">
      <div className="w-full h-svh relative overflow-hidden">
        {/* hero image */}
        <img
          src="/hero.webp"
          alt="thumbgen hero image"
          className="w-full h-[120svh] object-center object-cover absolute top-0 left-0"
        />

        <h1 className="absolute text-9xl text-white top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl mx-auto z-10 mix-blend-difference text-center font-black leading-[0.75] tracking-tighter">
          <span className="text-2xl tracking-tight font-black">
            Ai Thumbnail
          </span>{" "}
          <br />
          GENERATOR
        </h1>

        {/* overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-[linear-gradient(to_bottom,transparent_30%,var(--bg-main)_100%)]"></div>
      </div>
    </section>
  );
};

export default Landing;
