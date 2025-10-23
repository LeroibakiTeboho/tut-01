"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  const scrollRef = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(scrollRef.current.children);

      boxes.forEach((box) => {
        gsap.to(box, {
          x: 150 * (boxes.indexOf(box) + 2),
          rotation: 360,
          borderRadius: "100%",
          scale: 2,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 40%",
            scrub: true,
          },
          ease: "power1.inOut",
        });
      });
    },
    { scope: scrollRef }
  );

  return (
    <main className=" w-full">
      <h2 className="mt-10 text-3xl font-bold">GsapScrollTrigger:</h2>
      <div className="h-screen"></div>
      <div className="mt-20 h-screen" ref={scrollRef}>
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
        ></div>

        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
        ></div>
      </div>
    </main>
  );
};

export default GsapScrollTrigger;
