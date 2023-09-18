import React, {useState} from "react";

function Counter() {
  const [bundle, setBundle] = useState({"hidden": false, "counter": 0});

  return (
    <React.Fragment>
    {bundle.hidden ? <h1>Count Hidden</h1> : <h1>{bundle.counter}</h1>} 

    <button onClick={() => setBundle({...bundle, "counter": bundle.counter +1})}>Count!</button>
    <button onClick={() => setBundle({...bundle, "hidden": !bundle.hidden})}>Hide/Show</button>
  </React.Fragment>
  );
}

export default Counter;
