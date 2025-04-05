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
    <Icon/>
      <div ref={containerRef} className="container hidden bg-[#1C1C1C] w-[553px] h-[899px] rounded-[71px] mt-[50px] fixed top-[45%] left-[50%] translate-[-50%]">
        <div>
          <h1 className=' text-white text-center font-["Inter"] text-[32px] font-bold pt-[17px] '>
            Calculator
          </h1>
          <div className="flex gap-[15px] justify-end relative bottom-[30px] right-[23px] ">
            <button className="group" onClick={close}>
              <img src={closeButton} alt="" className="group-hover:hidden block "/>
              <img src={closeButtonHover} alt="" className="group-hover:block hidden "/>
            </button>
            <button className="group" onClick={min}>
              <img src={minButton} alt="" className="group-hover:hidden block "/>
              <img src={minButtonHover} alt="" className="group-hover:block hidden w-[17px] h-[17px] "/>
            </button>
            <button className="group" onClick={max}>
              <img src={maxButton} alt="" className="group-hover:hidden block "/>
              <img src={maxButtonHover} alt="" className="group-hover:block hidden"/>
            </button>
          </div>
        </div>
        <Line />
        <div className="w-[553px] h-[260px] ">
          <p ref={hisRef} className="history not-first-of-type:invisible relative text-[#FFFFFF80] font-bold text-right text-[64px] font-['Inter'] right-[21px] top-[76px] ">
            0
          </p>
          <p ref={resultRef} className="result relative text-white font-bold text-right text-[64px] font-['Inter'] right-[21px] top-[56px] ">
            0
          </p>
        </div>
        <Line/>
        <div className="grid grid-cols-4 mt-[30px] ml-[30px] gap-[18px] ">
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