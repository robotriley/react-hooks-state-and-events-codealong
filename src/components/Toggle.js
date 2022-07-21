import React, { useState } from "react"


const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  let handleClick = () => {
    setIsOn((isOn) => !isOn)
  }

  let color = isOn ? "red" : "white"
  return(

  <button style={{background: color}} onClick={handleClick} >{isOn ? "ON" : "OFF"}</button>
  );
}

export default Toggle;
