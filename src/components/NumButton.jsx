import React, { useState } from 'react'

export const NumButton = (props) => {
  const update = ()=>{
    const result = document.querySelector(".result")
    const his = document.querySelector(".history")
    if(Equaled === true || Equaled === undefined){
      firstNum = 0
      secNum = 0
      result.innerHTML = "0"
      his.innerHTML = "0"
      window.Equaled = false
    }
    if(props.num != "Del"){
      if (result.innerHTML.length >= 12) return;
      if(result.innerHTML==="0"){
        result.innerHTML = `${props.num}`
      }
      else{
        result.innerHTML += `${props.num}`
      }
    }
    else{
      result.innerHTML = result.innerHTML.slice(0,result.innerHTML.length-1)
    }
  }
  return (
        <button onClick={update} className='bg-[#505050] lg:w-[80px] lg:h-[80px] w-[68px] h-[68px] hover:brightness-80 rounded-[100%] text-white text-3xl lg:text-[40px] font-bold font-["Inter] '>
            {props.num}
        </button>
  )
}
