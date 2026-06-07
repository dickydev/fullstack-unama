import { useState } from 'react';

const ExpensiveCalculation = () => {
  const [count, setCount] = useState(0);

  const expensive = () => {
    console.log('Hitung ulang...');

    return count * 1000;
  };

  return (
    <div>
      <h1>{expensive()}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default ExpensiveCalculation;
