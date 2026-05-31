import { useState } from 'react';

const Counter = () => {
  /**
   * Pattern :
   * const [state, setState] = useState(initialValue)
   */

  const [count, setCount] = useState(0);

  function tambahAngka() {
    setCount((prev) => prev + 1);
  }

  const kurangAngka = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <h1>Materi 2 - State</h1>
      <p>{count}</p>
      <button onClick={tambahAngka}>+</button>
      <button onClick={kurangAngka}>-</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
};

export default Counter;
