import React from "react";
import icon from "../assets/apple-calculator.png";

export const Icon = () => {
  const click = () => {
    const container = document.querySelector(".container");
    container.classList.remove("hidden")
  };
  return (
    <div onDoubleClick={click} className="flex flex-col justify-center items-center hover:bg-gray-200/15 w-[120px] h-[120px] ">
        <img src={icon} alt="" width={100} height={100} />
        <p className="text-white font-[600]">Calculator</p>
    </div>
  );
};
