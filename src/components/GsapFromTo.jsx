"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFromTo = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#red-box",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        x: 250,
        repeat: -1,
        yoyo: true,
        borderRadius: "100%",
        rotation: 360,
        duration: 3,
        ease: "bounce.Out",
      }
    );
  }, []);

  return (
    <>
      <h2 className="mt-10 text-3xl font-bold">Gsap_FromTo:</h2>
      <div className="mt-20">
        <div
          id="red-box"
          className="w-20 h-20 bg-red-500 rounded-lg flex justify-center items-center text-white font-bold"
        >
          FromTo
        </div>
      </div>
    </>
  );
};

export default GsapFromTo;
