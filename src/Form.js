import React from "react"
import colorNames from 'colornames'
import'./Form.css'

function Form({colorValue,setColorValue,setHexa,isToggle,setIsToggle}) 
{
// const[color,setColor]=useState('')
  return (
    <form id="form" onSubmit={(e)=>e.preventDefault()}>
    <label style={{display:"flex",position:"absolute",left:"-999999999%",margin:"10px"}}>colorNames</label>
    <input 
    autoFocus
    type="text"
    placeholder="color Name" 
    required 
    value={colorValue} 
    onChange={(e)=>{
      setColorValue(e.target.value);
      // console.log(e.target.value)
      setHexa(colorNames(e.target.value));
        //  console.log(c)
    }}
    />
  <button type="button" id="formBtn"   style={{ width:"220px",
      height:"50px",
      fontSize:"20px",
    borderRadius:"10px"}}
  onClick={()=>setIsToggle(!isToggle)}>TextColor-Toggle</button>
    </form>
  )
}

export default Form