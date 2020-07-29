import React, { useState, useEffect } from "react";
import "./App.css";

function CommonButton({ value, onClick }) {
  console.log("value", { value });
  return (
    <div>
      <button className="btn" onClick={onClick}>
        {value}
      </button>
    </div>
  );
}

export default CommonButton;
