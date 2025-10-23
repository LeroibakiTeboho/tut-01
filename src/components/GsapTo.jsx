"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTo = () => {
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 600,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 3,
    });
  }, []);

  return (
    <>
      <h1 className="text-4xl font-extrabold">Gsap Tutorials</h1>

      <h2 className="mt-10 text-3xl font-bold">Gsap_To:</h2>
      <div className="mt-20">
        <div
          id="blue-box"
          className="w-20 h-20 bg-blue-500 rounded-lg  flex justify-center items-center text-white font-bold"
        >
          To
        </div>
      </div>
    </>
  );
};

export default GsapTo;
