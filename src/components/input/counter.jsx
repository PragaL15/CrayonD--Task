import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import '../../styles/counter.css'; 

const Counter = () => {
  const [count, setCount] = useState(1);  

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {  
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <button className="counter-button" onClick={decrement}>
        <RemoveIcon />
      </button>
      <span className="counter-value">{count}</span>
      <button className="counter-button" onClick={increment}>
        <AddIcon />
      </button>
    </div>
  );
};

export default Counter;
