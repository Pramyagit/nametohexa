import React from "react"

function Box({colorValue,hexa,isToggle}) {
  return (
    <section className="Box" 
    style={{backgroundColor:colorValue,
    color: isToggle ?"black":"white"}} >
    <p  >
    Color:{colorValue?colorValue:"color empty"}
    </p>
    <p>Hexa:{hexa?hexa:null}</p>
  </section>
  )
}
Box.defaultProps={
  colorValue:"empty"
}

export default Box