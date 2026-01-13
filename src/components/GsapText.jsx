"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";

const GsapText = () => {
  useGSAP(() => {
    gsap.to("#text", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });

    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        // stagger: 0.1,
        stagger: {
          amount: 2,
          grid: [2, 2],
            axis: "y",
            ease: "power1.inOut",
            from: "center",
        }
      }
    );
  }, []);

  return (
    <main className=" w-full">
      <h1 id="text" className="opacity-0 translate-y-10 text-4xl font-bold">
        GsapText:
      </h1>
      {/* <div className="h-screen"></div> */}

      <div className="mt-5 text-gray-500 para space-y-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          dolorem explicabo quae asperiores illo perferendis quos distinctio
          facere error corrupti magnam deleniti adipisci nobis, enim saepe
          natus, quasi necessitatibus.
        </p>
        <p>
          Temporibus. Tempore, animi ea! Eum praesentium nobis quaerat. Facere,
          vitae exercitationem nemo impedit eum id aliquid enim nobis, cum
          tenetur maxime a quasi inventore nihil facilis labore quas! Dolores,
          omnis facilis.
        </p>
      </div>
    </main>
  );
};

export default GsapText;
