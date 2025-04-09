import React from 'react'

export const OrangeButton = (props) => {
  const click = ()=>{
    window.Equaled = false
    const result = document.querySelector(".result")
    const his = document.querySelector(".history")
    if(props.add != "="){
      window.firstNum = Number(result.innerHTML)
      window.op = props.add
      result.innerHTML = "0"
      his.innerHTML = firstNum+op
    }
    if(props.add === "="){
      let ans = null
      window.secNum = Number(result.innerHTML)
      Equaled = true
      switch(op){
        case "+":
          ans = firstNum+secNum
          break
        case "-":
          ans =firstNum-secNum
          break
        case "÷":
            ans = Number((firstNum/secNum).toFixed(10))
            break
        case "x":
          ans = firstNum * secNum
          break
        }
        if(his.innerHTML !== "0"){
          his.innerHTML += secNum
        }
        result.innerHTML = `${ans}`
    }
  }
  return (
      <button onClick={click} className='lg:w-[80px] lg:h-[80px] w-[68px] h-[68px] text-3xl bg-[#FF9500] hover:brightness-80 rounded-[100%] text-white lg:text-[40px] font-bold font-["Inter] '>
      {props.add}
    </button>
  )
}
