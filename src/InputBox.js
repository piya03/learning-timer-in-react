import React from "react";
import "./App.css";

function InputBox({ inputVal, setInputVal }) {
  return (
    <div>
      <div className="inputbox">
        <input
          type="number"
          placeholder="Enter seconds"
          value={inputVal}
          onChange={(e) => {
            const num = parseInt(e.target.value);
            if (num >= 0 || !num) {
              setInputVal(e.target.value);
            }
          }}
        />
        <span>Sec</span>
      </div>
    </div>
  );
}

export default InputBox;
