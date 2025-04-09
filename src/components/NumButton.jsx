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
        <button onClick={update} className='bg-[#505050] buttons'>
            {props.num}
        </button>
  )
}
