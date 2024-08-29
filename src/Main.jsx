import React, { useState } from 'react'


 const Main =() =>{
  const [count, setCount] = useState(0);


    const incre = () => {
      setCount (count+1);
    }
    const decr=()=>{
      setCount(count-1);
    }
//si/ const result = count%2===0? true:false;

 const result = count%2===0 ? "even":"odd";


  // console.log('render');
  return (
    <div><div className='p-3'>

    <h1 className='text-2xl'>{count}</h1>

    <button onClick={incre} className='bg-black text-white px-7 py-2'>Add</button>
    <button onClick={decr} className='bg-black text-white px-7 py-2'>Subtract</button>
    {/* si <h2>{result?"even": "odd"}</h2> */}
    <h1 >{result}
      
    </h1>
<>

</>



  </div></div>
  )
}

export default Main


 