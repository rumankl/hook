//How do I handle complex state objects with useState?
import React, { useState } from 'react';

const ComplexStateComponent = () => {
  const [state, setState] = useState({
    count: 0,
    name: 'Alice'
  });

  const incrementCount = () => {
    setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1
    }));
  };

  const updateName = (e) => {
    setState((prevState) => ({
      ...prevState,
      name: e.target.value
    }));
  };

  return (
    <div className='m-10'>
      <h1 className='bg-yellow-300'>Count: {state.count}</h1><br />
      <button className='bg-red-200' onClick={incrementCount}>Increment Count</button>
      <br />
      
      <input 
      className='px-4 border-2 border-red-400 '
        type="text"
        value={state.name}
        onChange={updateName}
        placeholder="Enter your name"
      />
      <br />
      <p className='bg-pink-300'>Hello, {state.name}!</p>
      
    </div>
  );
};

export default ComplexStateComponent;
