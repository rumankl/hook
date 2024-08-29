import React, { useState } from 'react';
import { todos } from './Data';

const Card = () => {
  const [todoData, setTodoData] = useState(todos);

  const handleChecked = (id) => {
    setTodoData((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
    console.log(todoData);
  };

  return (
    <div>
      {todoData.map((to) => (
        <div key={to.id}>
          <input
            type="checkbox"
            checked={to.checked} // Make sure this matches your data structure
            onChange={() => handleChecked(to.id)}
          />
          <h1>{to.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Card;
