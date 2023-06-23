import React from "react"
import colorNames from "colornames"
import'./Hexaconverter.css'


function Hexaconverter({hexa,colorValue,setColorValue,setHexa}) {
  
  function Copy(e){
    e.preventDefault();
    const Text= document.getElementById('txt');
    // const textValue=Text.value;
Text.select();
document.execCommand('copy');
// textValue.remove();
    console.log("Copied");
alert("copied")
Text.value=""

  }
  function Copy1(e){
    e.preventDefault();
    const Text= document.getElementById('hexa');
    console.log(Text.value)
    Text.select();
    document.execCommand('copy');
        console.log("Copied");
        alert("copied")
        Text.value=""
    
  }
  return (
    <section className="hexa">
      <h1>ColorName</h1>
      <div className="div1">
      <textarea id="txt"value={colorValue} onChange={(e)=>setColorValue(e.target.value)} required></textarea>
      <button id="btn" type="button"onClick={Copy}>Copy</button></div>
      <div className="div1">
      <h1>HexaValue</h1>
      <textarea id="hexa"type="text"value={hexa}onChange={(e)=>setHexa(colorNames(e.target.value))} required></textarea>
      <button id="btn" type="button"onClick={Copy1}>Copy</button>
      </div>
    </section>
  )
}


export default Hexaconverter