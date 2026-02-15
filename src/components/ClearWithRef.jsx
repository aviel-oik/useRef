import { useRef } from "react";

function ClearWithRef() {
  const inputRef = useRef(null);

  const handleClear = () => {
    inputRef.current.value = ""; 
  };

  return (
    <div>
      <h2>Clear with useRef</h2>

      <input
        type="text"
        ref={inputRef}
      />

      <button onClick={handleClear}>
        Clear Input
      </button>
    </div>
  );
}

export default ClearWithRef;