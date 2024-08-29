//How can I initialize state with a function if the initial state requires complex computation?
import React, { useState } from 'react';

const ExpensiveComputationComponent = () => {
  const computeInitialValue = () => {
    // Simulate an expensive computation
    return 100;
  };

  const [value, setValue] = useState(computeInitialValue);

  return (
    <div>
      <h1>Value: {value}</h1>
      <button onClick={() => setValue(value + 10)}>Increase Value</button>
    </div>
  );
};

export default ExpensiveComputationComponent;
