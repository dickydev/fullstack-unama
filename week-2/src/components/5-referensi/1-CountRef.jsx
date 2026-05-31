import { useRef } from "react";

const CountRef = () => {
  const ref = useRef(0);

  const handleClick = () => {
    ref.current += 1;
    console.log(ref.current);
  };

  return (
    <div>
      <h1>Materi Referensi</h1>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default CountRef;
