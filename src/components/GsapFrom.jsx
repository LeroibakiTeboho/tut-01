"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFrom = () => {
  useGSAP(() => {
    gsap.from("#green-box", {
      x: 600,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
        ease: "bounce.inOut",
    });
  }, []);
  
  return (
    <>
      <h2 className="mt-10 text-3xl font-bold">Gsap_From:</h2>
      <div className="mt-20">
        <div
          id="green-box"
          className="w-20 h-20 bg-green-500 rounded-lg flex justify-center items-center text-white font-bold"
        >
          From
        </div>
      </div>
    </>
  );
};

export default GsapFrom;
