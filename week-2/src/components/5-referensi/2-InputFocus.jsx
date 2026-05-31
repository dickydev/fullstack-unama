import { useRef } from "react";

const InputFocus = () => {
  const refInput = useRef(null);

  const handleFocus = () => {
    refInput.current.focus();
  };

  return (
    <div>
      <input type="text" ref={refInput} />
      <button
        style={{
          position: "fixed",
          bottom: 0,
          right: 10,
          width: 100,
          height: 100,
        }}
        onClick={handleFocus}
      >
        Focus Ke Input
      </button>
    </div>
  );
};

export default InputFocus;
