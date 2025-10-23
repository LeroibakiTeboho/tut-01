"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { use } from "react";

const GsapTimeline = () => {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });

  useGSAP(() => {
    timeline.to("#yellow-box", {
      x: 250,
      rotation: 360,
      borderRadius: "100%",
      duration: 3,
      ease: "bounce.inOut",
    });
    timeline.to("#yellow-box", {
      y: -250,
      scale: 1,
      rotation: 360,
      borderRadius: "8px",
      duration: 2,
      ease: "bounce.inOut",
    });
    timeline.to("#yellow-box", {
      x: 0,
      scale: 2,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "bounce.inOut",
    });
    timeline.to("#yellow-box", {
      y: 0,
      scale: 1,
      rotation: 360,
      borderRadius: "8px",
      duration: 2,
      ease: "bounce.inOut",
    });
  });
  return (
    <>
      <h2 className="mt-10 text-3xl font-bold">Timeline:</h2>

      <button
      className="py-4 px-6 bg-blue-500 mt-5 rounded-3xl text-white active:scale-[0.95] transition-all duration-150 shadow-md shadow-gray-500"
        onClick={() => {
          if (timeline.isActive()) {
            timeline.pause();
          } else {
            timeline.play();
          }
        }}
      >
        Play/Pause
      </button>

      <div className="mt-20">
        <div
          id="yellow-box"
          className="w-20 h-20 bg-yellow-500 rounded-lg flex justify-center items-center text-white font-bold"
        >
          Timeline
        </div>
      </div>
    </>
  );
};

export default GsapTimeline;
