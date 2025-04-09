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
      <button onClick={click} className='buttons bg-[#FF9500]'>
      {props.add}
    </button>
  )
}
