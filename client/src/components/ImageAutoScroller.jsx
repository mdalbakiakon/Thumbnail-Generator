import React from "react";

const images = [
  "/img1.webp",
  "/img2.webp",
  "/img3.webp",
  "/img4.webp",
  "/img5.webp",
  "/img6.webp",
  "/img7.webp",
  "/img8.webp",
  "/img9.webp",
  "/img10.webp",
];

const ImageAutoScroller = () => {
  return (
    <div
      className="w-full flex flex-col gap-4 p-2.5 mask-[linear-gradient(to_right,transparent_2.5%,rgba(255,0,0,0.5),transparent_97.5%)] -rotate-z-2 will-change-transform"
    >

      {/* row 0 — scrolls right */}
      <div className="w-full overflow-hidden relative group">
        <div className="flex w-max animate-marquee-reverse group-hover:[animation-play-state:paused]">
          {images.map((src, i) => (
            <img
              key={`c-${i}`}
              src={src}
              alt={`slide-rev-${i}`}
              className="h-48 aspect-video object-center object-cover mx-2 rounded-xl shrink-0"
            />
          ))}
          {images.map((src, i) => (
            <img
              key={`d-${i}`}
              src={src}
              alt={`slide-rev-dup-${i}`}
              className="h-48 aspect-video object-center object-cover mx-2 rounded-xl shrink-0"
            />
          ))}
        </div>
      </div>

      {/* row 1 — scrolls left */}
      <div className="w-full overflow-hidden relative group">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused">
          {images.map((src, i) => (
            <img
              key={`a-${i}`}
              src={src}
              alt={`slide-${i}`}
              className="h-48 aspect-video object-center object-cover mx-2 rounded-xl shrink-0"
            />
          ))}
          {images.map((src, i) => (
            <img
              key={`b-${i}`}
              src={src}
              alt={`slide-dup-${i}`}
              className="h-48 aspect-video object-center object-cover mx-2 rounded-xl shrink-0"
            />
          ))}
        </div>
      </div>

      {/* row 2 — scrolls right */}
      <div className="w-full overflow-hidden relative group">
        <div className="flex w-max animate-marquee-reverse group-hover:[animation-play-state:paused]">
          {images.map((src, i) => (
            <img
              key={`c-${i}`}
              src={src}
              alt={`slide-rev-${i}`}
              className="h-48 aspect-video object-center object-cover mx-2 rounded-xl shrink-0"
            />
          ))}
          {images.map((src, i) => (
            <img
              key={`d-${i}`}
              src={src}
              alt={`slide-rev-dup-${i}`}
              className="h-48 aspect-video object-center object-cover mx-2 rounded-xl shrink-0"
            />
          ))}
        </div>
      </div>



      {/* row 3 — scrolls left */}
      <div className="w-full overflow-hidden relative group">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused">
          {images.map((src, i) => (
            <img
              key={`a-${i}`}
              src={src}
              alt={`slide-${i}`}
              className="h-48 aspect-video object-center object-cover mx-2 rounded-xl shrink-0"
            />
          ))}
          {images.map((src, i) => (
            <img
              key={`b-${i}`}
              src={src}
              alt={`slide-dup-${i}`}
              className="h-48 aspect-video object-center object-cover mx-2 rounded-xl shrink-0"
            />
          ))}
        </div>
      </div>


      {/* row 4 — scrolls right */}
      <div className="w-full overflow-hidden relative group">
        <div className="flex w-max animate-marquee-reverse group-hover:[animation-play-state:paused]">
          {images.map((src, i) => (
            <img
              key={`c-${i}`}
              src={src}
              alt={`slide-rev-${i}`}
              className="h-48 aspect-video object-center object-cover mx-2 rounded-xl shrink-0"
            />
          ))}
          {images.map((src, i) => (
            <img
              key={`d-${i}`}
              src={src}
              alt={`slide-rev-dup-${i}`}
              className="h-48 aspect-video object-center object-cover mx-2 rounded-xl shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageAutoScroller;
