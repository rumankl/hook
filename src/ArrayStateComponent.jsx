//How can I use useState with arrays?
import React, { useState } from 'react';

const ArrayStateComponent = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayStateComponent;
