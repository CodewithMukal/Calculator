import React from "react";
import icon from "../assets/apple-calculator.png";

export const Icon = () => {
  const click = () => {
    const container = document.querySelector(".container");
    container.classList.remove("hidden")
  };
  return (
    <div onDoubleClick={click} className="flex justify-center items-center flex-col hover:bg-gray-200/15 relative top-[100px] left-[-800px] ">
      <img src={icon} alt="" width={100} height={100} />
      <p className="text-white mt-[-7px] font-[600]">Calculator</p>
    </div>
  );
};
