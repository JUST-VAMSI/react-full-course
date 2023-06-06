import React from 'react';
import useCounter from './useFirstCounter';

const SecondCounter = () => {
    const [count,increment,decrement,reset]=useCounter(10);
    return (
      <div>
          <h1>count-{count}</h1>
          <button onClick={increment}>increment</button>
          <button onClick={decrement}>decrement</button>
          <button onClick={reset}>reset</button>
      </div>
    )
}

export default SecondCounter