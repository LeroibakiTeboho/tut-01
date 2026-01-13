"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapStagger = () => {
  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 100,
      rotation: 360,
      borderRadius: "100%",
      repeat: -1,
      yoyo: true,
      // stagger: 0.1,

      stagger: {
        amount: 2,
        grid: [1,1],
        axis: "y",
        ease: 'bounce.inOut',
        from: "center"
      }
    });
  }, []);
  return (
    <div className="mt-20">
      <h2 className="mt-10 text-3xl font-bold my-10">Stagger:</h2>
      <div className="flex gap-5">
        <div className="w-15 h-15 bg-indigo-200 rounded-lg stagger-box"></div>
        <div className="w-15 h-15 bg-indigo-300 rounded-lg stagger-box"></div>
        <div className="w-15 h-15 bg-indigo-400 rounded-lg stagger-box"></div>
        <div className="w-15 h-15 bg-indigo-500 rounded-lg stagger-box"></div>
        <div className="w-15 h-15 bg-indigo-600 rounded-lg stagger-box"></div>
        <div className="w-15 h-15 bg-indigo-700 rounded-lg stagger-box"></div>
        <div className="w-15 h-15 bg-indigo-800 rounded-lg stagger-box"></div>
        <div className="w-15 h-15 bg-indigo-900 rounded-lg stagger-box"></div>
      </div>
    </div>
  );
};

export default GsapStagger;
