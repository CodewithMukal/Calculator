import React from 'react'

export const GreyButton = (props) => {
  const update = ()=>{
    const result = document.querySelector(".result")
    const hist = document.querySelector(".history")
    if(props.add === "AC"){
      result.innerHTML = "0"
      hist.innerHTML = "0"
    }
    if(props.add === "%"){
      result.innerHTML = `${Number(result.innerHTML)/100}`
    }
    if(props.add === "+/-"){
      if(result.innerHTML[0] != "-"){
        result.innerHTML = "-"+result.innerHTML
      }
      else{
        result.innerHTML = result.innerHTML.slice(1,)
      }
    }
  }
  return (
    <button onClick={update} className='buttons bg-[#D4D4D2] '>
        {props.add}
    </button>
  )
}
