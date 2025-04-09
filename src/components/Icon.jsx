import React, { useEffect, useRef } from "react";
import icon from "../assets/apple-calculator.png";

export const Icon = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const iconRef = useRef(null);

  useEffect(() => {
    const click = () => {
      const container = document.querySelector(".container");
      if (container) container.classList.remove("hidden");
    };

    const currentIcon = iconRef.current;
    if (currentIcon) {
      if (isMobile) {
        currentIcon.addEventListener("click", click);
      } else {
        currentIcon.addEventListener("dblclick", click);
      }
    }

    // Clean up on unmount
    return () => {
      if (currentIcon) {
        currentIcon.removeEventListener("click", click);
        currentIcon.removeEventListener("dblclick", click);
      }
    };
  }, [isMobile]);

  return (
    <div
      ref={iconRef}
      className="icon flex flex-col justify-center items-center hover:bg-gray-200/15 w-[120px] h-[120px] cursor-pointer"
    >
      <img src={icon} alt="Calculator icon" width={100} height={100} />
      <p className="text-white font-[600]">Calculator</p>
    </div>
  );
};
