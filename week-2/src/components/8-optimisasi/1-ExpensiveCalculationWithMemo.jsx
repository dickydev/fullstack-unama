import { useState, useMemo } from 'react';

const ExpensiveCalculationMemo = () => {
  const [count, setCount] = useState(0);

  const expensive = useMemo(() => {
    return count * 1000;
  }, [count]);

  return (
    <div>
      <h1>{expensive}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default ExpensiveCalculationMemo;
