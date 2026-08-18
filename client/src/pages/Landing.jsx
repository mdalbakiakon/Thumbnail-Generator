import React from "react";
import Pricing from "./Pricing";
import ImageAutoScroller from "../components/ImageAutoScroller";

const Landing = () => {
  return (
    <>
      {/* main landing page */}
      <section className="w-full">
        {/* img div */}
        <div className="w-full h-svh relative flex justify-center items-end overflow-hidden">
          {/* scroller image */}
          <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center z-10">
            <ImageAutoScroller />
          </div>

          {/* headers and tags */}
          <div className="w-full h-full p-2.5 text-center relative z-20 bg-[linear-gradient(to_bottom,var(--bg-main)_10%,transparent,var(--bg-main)_90%)] flex flex-col justify-end items-center">
            <h1 className="flex flex-col font-black z-10 relative mix-blend-difference tracking-tighter w-full max-w-5xl mx-auto">
              <span className="text-xl sm:text-2xl md:text-3xl text-shadow-2xs">Ai Thumbnail</span>
              <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] uppercase bg-clip-text text-transparent bg-[linear-gradient(to_right,#50a5b5,#a7f3d0)] text-shadow-2xs">
                Generator
              </span>
            </h1>

            <p className="my-2.5 w-full max-w-5xl mx-auto opacity-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              temporibus suscipit mollitia architecto corrupti totam quo
              doloremque sit fugiat numquam voluptas aliquam aut cupiditate
              dolorem, nam assumenda est repudiandae sunt. Laudantium quidem
              sunt veritatis quam, totam tempora omnis quas quos sed quia dolore
              nesciunt ipsam voluptate voluptatibus dolor fugiat pariatur.
            </p>
          </div>
        </div>
      </section>

      {/* pricing section */}
      <Pricing />
    </>
  );
};

export default Landing;
