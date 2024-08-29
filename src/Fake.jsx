import { faker } from '@faker-js/faker';
import React, { useState } from 'react'

const Fake = () => {
  // const ns = ['lio', 'jio'];
  // console.log([...ns, 'kio']);
  const [data, setData] = useState([]);

  const addSome = () => {
    const obj = {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
    };
    setData((prev) => [...prev, obj]);
  }

  // console.log(data);

  return (
    <div className='p-4'>


     {data.map((to)=>{
       return <div key={to.id}>
       <h1>{to.email}</h1>
     
       
     </div>
    })}
      <button onClick={addSome} className='bg-green-700 text-white px-4 py-1 rounded-sm hover:ring-2'>CLick Me</button>




    </div>
  )
}

export default Fake