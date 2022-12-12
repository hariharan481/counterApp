import { useState } from 'react';

import './App.css';
function App() {
  
      

const [text, sethari]=useState(0);
const hari=(h)=>{
  if(h===1)
  {
  sethari(text+1)
}
else{
  sethari(text-1)
}
}



  return (

    <div className="App">

      <h1>counter App</h1>
  
      <div className='b1'></div>
      <button onClick={()=>hari(1)}>+</button>
      <h2>{text}</h2>
      <button onClick={()=>hari(0)}>-</button>
      


    </div>
    

   
  );
}

export default App;
