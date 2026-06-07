import { useCounter } from '../hooks/useCounter';

const CounterByCustom = () => {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <div>
      <h1>Counter by Custom Hook</h1>

      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default CounterByCustom;
