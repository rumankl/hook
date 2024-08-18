import React, { useState, useEffect } from 'react';

const Effect = () => {
  const [result, setResult] = useState('');
  const [count, setCount] = useState(0);

  const incre = () => {
    setCount(count + 1);
  };

  const decr = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    if (count % 2 === 0) {
      setResult('even');
    } else {
      setResult('odd');
    }
  }, [count]); // The effect will runs whenever `count` changes

  return (
    <div className='p-3'>
      <h1 className='text-2xl'>{count}</h1>
      <button onClick={incre} className='bg-black text-white px-7 py-2'>Add</button>
      <button onClick={decr} className='bg-black text-white px-7 py-2'>Subtract</button>
      <h1>{result}</h1> {/* Display the result directly */}
    </div>
  );
};

export default Effect;




// import React, { useState, useEffect } from 'react';

// const Effect = () => {
//   const [count, setCount] = useState(0);
//   const [result, setResult] = useState('');

//   // Update the result whenever count changes
//   useEffect(() => {
//     if (count % 2 === 0) {
//       setResult('even');
//     } else {
//       setResult('odd');
//     }
//   }, [count]);

//   // Handle change in the input field
 

//   return (
//     <div className='p-3'>
//       <h1 className='text-2xl'>{count}</h1>
//       <input 
//         type='number' 
//         value={count} 
//         onChange={handleChange} 
//         className='border px-4 py-2' 
//       />
//       <h1>{result}</h1>
//     </div>
//   );
// };

// export default Effect;
