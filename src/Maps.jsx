import React from 'react'

const Maps = () => {
  const todos = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": true
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    }];
  return (
    <div>
      {todos.Map((items,index)=>{
        return(
        <div key={index}>
          <h1>{items.id}</h1>
          <h1>{items.title}</h1>
          <input type='checkbox' value={items.completed} /> 
        </div>)
      })}
    </div>
  )
}

export default Maps


// import React from 'react'

// const Maps = () => {
//   const movies = [
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//     },
//     {
//       "Title": "I Am Legend",
//       "Year": "2007",
//       "Rated": "PG-13",
//     }
//   ];
//   return (
//     <div className='p-3'>
//     {movies.map((mov,i) => {
//       return 
//             <div key={i}>
// //         <h1>{`${mov.Title}  ${mov.Year} ${mov.Rated}`}</h1>

// //       </div>
//     })}



//   </div>
// )
// }


// export default Maps
//////hu///////////////////////////////////////////////////

// import React, { useState } from "react";

// const App = () => {

//   const [todos, setTodos] = useState([]);
//   const [todo, setTodo] = useState("");

//   const handleTodoAdd = () => {
//     setTodos([...todos, todo]); // Create a new array with the added todo
//     setTodo(""); // Clear the input field
//   };

//   return (
//     <div>
//       <div><h1>Simple Todo app</h1></div>
//         <div>
//           {todos.map((item, index) => (
//             <ul key={index}>
//               <li>{item}</li>
//             </ul>
//           ))}
//         </div>
//       <div>
//         <input
//           type="text"
//           value={todo}
//           onChange={(e) => setTodo(e.target.value)}
//         />
//         <button onClick={handleTodoAdd}>Add</button>
//       </div>
//     </div>
//   );
// };

// export default App;
