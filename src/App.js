import React from 'react';
import './App.css';
import Box from './Box';
import Form from './Form';
import {useState} from 'react';
import Hexaconverter from './Hexaconverter';
function App() {
  const [colorValue,setColorValue]=useState('')
  const [hexa,setHexa]=useState('')
  const [isDarkText,setIsDarkText]=useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Name to Hexa converter</h1>
        <Box
        colorValue={colorValue}
        hexa={hexa}
        isToggle={isDarkText}
        />
        <Form 
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexa={setHexa}
        isToggle={isDarkText}
        setIsToggle={setIsDarkText}
        />
     </header>
   
      <Hexaconverter
       colorValue={colorValue}
       hexa={hexa}
       />
  </div>
  );
}

export default App;
