import ReactDOM from 'react-dom';
import React, { useState, useRef, useEffect } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [json, setJson] = useState({ a: 123 });
  const counterEl = useRef();

  useEffect(() => {
    console.log(count);
    console.log(count2);
  }, [count, count2]);

  useEffect(() => {
    console.log(json);
  }, [json]);

  const increment = () => {
    setCount(count + 1);
    console.log(counterEl);
  }
  const descrement = () => {
    setCount2(count2 - 1);
    console.log("hehe");
  }
  const changeJson = () => {
    let newJson = { b: 456 };
    // setJson({ ...json, b: 456 });
    setJson({ b: 456 });
    console.log(json);
  }

  return (
    <>
      Count: <span ref={counterEl}>{count}</span>
      Count2: <span>{count2}</span>
      <button onClick={increment}>+</button>
      <button onClick={descrement}>-</button>
      <button onClick={changeJson}>Change Json</button>
    </>
  )
}

ReactDOM.render(<Counter />, document.getElementById('root'));