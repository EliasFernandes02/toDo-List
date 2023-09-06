import React, { useState } from 'react';

function TodoList() {
    const [items, setItems] = useState([]); 
    const [inputValue, setInputValue] = useState(''); 
  
    const addItem = () => {
      if (inputValue.trim() !== '') { //remove the blank space
        setItems([...items, inputValue]);
        setInputValue(''); 
      }
    };
  
    const removeItem = (index) => {
      const newItems = [...items];
      newItems.splice(index, 1); // indice de qual quer iniciar a lista e o numero de elementos a ser alterado
      setItems(newItems);
    };
  
    return (
      <div>
        <h1>To do list</h1>
        <div>
          <input
            type="text"
            placeholder="Adicionar uma task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={addItem}>Add</button>
        </div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => removeItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TodoList;