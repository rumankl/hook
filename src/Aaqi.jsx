//How can I set the state based on the previous state using useState?
import React, {useState }from 'react'

const Aaqi = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    // Update state based on previous state value
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
export default Aaqi
