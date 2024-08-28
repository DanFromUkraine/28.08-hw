import React, { useState } from 'react';

const CounterFunc = (props) => {
  console.log("CounterFunc " + props.name + " render");
  return (
    <article>
      <h1>COUNTER {props.name}</h1>
      <div>COUNT: {props.count}</div>
      <button onClick={() => props.increment(props.step)}>+</button>
    </article>
  );
};

export default CounterFunc;
