import React, { useState } from 'react';
import CounterFunc from './CounterFunc';

const ParentCounter = () => {
  console.log('ParentCounter render');
  const [count, setCount] = useState(0);

  const increment = (step) => {
    setCount(count + step);
  };

  return (
    <div>
      <h1>Counter Global</h1>
      <CounterFunc step={1} name="first" count={count} increment={increment} />
      <CounterFunc step={2} name="second" count={count} increment={increment} />
    </div>
  );
}

export default ParentCounter;
