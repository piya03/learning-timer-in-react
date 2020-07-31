import React, { useState, useEffect } from "react";
import "./App.css";

function CommonButton({ value, onClick, btnStyle = {} }) {
  return (
    <div>
      <button style={btnStyle} className="btn" onClick={onClick}>
        {value}
      </button>
    </div>
  );
}

export default CommonButton;
