import { faker } from '@faker-js/faker';
import React, { useState } from 'react'

const Face= () => {
  // const ns = ['lio', 'jio'];
  // console.log([...ns, 'kio']);
  const [data, setData] = useState([]);

  const addSome = () => {
    const obj = {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.urlLoremFlickr(),
    };
    setData((prev) => [...prev, obj]);
  }

  return (
    <div className='p-4'>
      <button onClick={addSome} className='bg-green-700 text-white px-4 py-1 rounded-sm hover:ring-2'>CLick Me</button>

      <div className='space-y-4 grid grid-cols-4 gap-7'>


        {data.map((pesron) => {
          return <div key={pesron.userId}>
            <img src={pesron.avatar} alt="" className='h-[100px] w-[100px] rounded-full' />
            <h1>{pesron.username}</h1>
            <h1>{pesron.email}</h1>
            <button className='my-2 bg-slate-400 px-2'>Delete This</button>
          </div>
        })}



      </div>
    </div>
  )
}

export default Face