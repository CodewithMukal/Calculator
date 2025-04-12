import { Line } from "./components/Line";
import { NumButton } from "./components/NumButton";
import { GreyButton } from "./components/GreyButton";
import { OrangeButton } from "./components/OrangeButton";
import closeButton from "./assets/Close_Button1.png"
import closeButtonHover from "./assets/Close_Button.png"
import minButton from "./assets/Minimize_Button.png"
import minButtonHover from "./assets/Minimize_Button2.png"
import maxButton from "./assets/Maximize_Button.png"
import maxButtonHover from "./assets/Maximize_Button2.png"
import { useState, useRef } from "react";
import { Icon } from "./components/Icon";
window.firstNum = 0;
window.secNum = 0;
window.op = "";
window.Equaled = false;

function App() {
  const containerRef = useRef(null);
  const resultRef = useRef(null);
  const hisRef = useRef(null);

  const min = () => {
    containerRef.current?.classList.add("hidden");
  };
  
  const close = () => {
    containerRef.current?.classList.add("hidden");
    window.firstNum = 0;
    window.secNum = 0;
    window.op = "";
    window.Equaled = false;
    if (resultRef.current) resultRef.current.innerHTML = "0";
    if (hisRef.current) hisRef.current.innerHTML = "0";
  };
  
  const max = ()=>{
    alert("Coming Soon..")
  }
  return (
    <>
    <h1 className="text-white font-bold text-2xl text-center flex justify-center items-center lg:text-5xl">
      Project by Mukal Markanda
    </h1>
    <div className="mt-[5%] flex justify-left w-[100vw]">
      <Icon/>
    </div>
      <div ref={containerRef} className="container hidden bg-[#1C1C1C] lg:w-[553px] lg:h-[899px] rounded-[71px] mt-[50px] fixed top-[45%] left-[50%] translate-[-50%] w-[80%] h-[90%]">
        <div>
          <h1 className=' text-white font-["Inter"] text-[32px] font-bold pt-[17px] flex justify-center items-center'>
            Calculator
          </h1>
          <div className="flex gap-[15px] justify-end relative bottom-[30px] right-[23px] ">
            <button className="group" onClick={close}>
              <img src={closeButton} alt="" className="group-hover:hidden block "/>
              <img src={closeButtonHover} alt="" className="group-hover:block hidden "/>
            </button>
            <button className="group hidden lg:block" onClick={min}>
              <img src={minButton} alt="" className="group-hover:hidden block "/>
              <img src={minButtonHover} alt="" className="group-hover:block hidden w-[17px] h-[17px] "/>
            </button>
            <button className="group hidden lg:block" onClick={max}>
              <img src={maxButton} alt="" className="group-hover:hidden block "/>
              <img src={maxButtonHover} alt="" className="group-hover:block hidden"/>
            </button>
          </div>
        </div>
        <Line />
        <div className="lg:w-[553px] lg:h-[260px] w-[100%] h-[32%] flex flex-col justify-center pr-[2%]">
          <p ref={hisRef} className="history not-first-of-type:invisible text-[#FFFFFF80] font-bold text-right text-[64px] font-['Inter']">
            0
          </p>
          <p ref={resultRef} className="result text-white font-bold text-right text-[64px] font-['Inter']">
            0
          </p>
        </div>
        <Line/>
        <div className="grid grid-cols-4 mt-[20px] lg:mt-[30px] lg:ml-[50px] w-[90%] mx-auto lg:gap-[18px] gap-[10%]">
          <GreyButton add="AC" className="clear" />
          <GreyButton add="+/-" className="invert"/>
          <GreyButton add="%" className="percent" />
          <OrangeButton add="÷"/>
          <NumButton num="7"/>
          <NumButton num="8"/>
          <NumButton num="9"/>
          <OrangeButton add="x"/>
          <NumButton num="4"/>
          <NumButton num="5"/>
          <NumButton num="6"/>
          <OrangeButton add="-"/>
          <NumButton num="1"/>
          <NumButton num="2"/>
          <NumButton num="3"/>
          <OrangeButton add="+"/>
          <NumButton num="Del"/>
          <NumButton num="0"/>
          <NumButton num="."/>
          <OrangeButton add="="/>
        </div>
      </div>
    </>
  );
}
const calculate = (a,b,op)=>{
  if(op==="/" || op==="÷"){
    return a/b
  }
  else if(op==="x" || op==="*"){
    return a*b
  }
  else if(op==="+"){
    return a+b
  }
  else if(op==="-"){
    return a-b
  }
}

export default App;