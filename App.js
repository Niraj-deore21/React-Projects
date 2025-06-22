import React, { useState } from "react";


// counter application 3 buttons increase decrease set to 0;



function App() {

  var [counter,setcounter]=useState(0);

  const increase=()=>{ setcounter(counter+1); console.log(counter)}

  const decrease=()=>{ setcounter(counter-1); console.log(counter) }

  const set_0=()=>{ setcounter(0); console.log(counter)}

  return (
    <div className="App">
      <h1> {counter} </h1>
      <button onClick={increase}> Increase </button>
      <button onClick={decrease}> Decrease </button>
      <button onClick={set_0}> Set to 0 </button>
    </div>
  );
}

export default App;
