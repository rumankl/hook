import React from 'react'

const Obj = () => {

  const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  };
  return (
    <div className="text-white flex justify-around gap-10 px-4 py-4 mx-auto w-1/3 h-full border-none rounded-md shadow-lg shadow-black bg-gradient-to-r from-blue-600 to-violet-600 items-center">
      <div className="flex flex-col gap-5 justify-start">
        <div className="flex flex-col">
        <h2 className="text-2xl font-bold">{user.username}</h2>
        <h1 className="text-xl
        ">{user.name}</h1>
        <p>{user.email}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-lg">{user.address.suite}, {user.address.street}</p>
          <p>{user.address.city}, {user.address.zipcode}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <p>{user.phone}</p>
          <p>{user.website}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p>{user.company.name}</p>
          <p>{user.company.catchPhrase}</p>
          <p>{user.company.bs}</p>
        </div>
      </div>
    </div>
  )
}

export default Obj