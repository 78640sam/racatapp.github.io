import { useState } from "react";


export const Counter = () => {
  const [counter, setCounter] = useState(1); 
 

  const clickFun = (val) => {
    setCounter(counter + val);
  };
  const clickFun1 = (val) => {
    setCounter(counter *2);
  };

 
  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={() => clickFun(1)}>Add 1</button>
      <button onClick={() => clickFun(-1)}>Dec 1</button>
      <button onClick={() => clickFun1(counter * 2)}>double</button>
    </div>
  );
};
