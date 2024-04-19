import React from "react";

function SubtaskInput({ value, onChange, onKeyPress, placeholder }) {
  return (
    <input
      type="text"
      className="subtask-input"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onKeyPress={onKeyPress}
    />
  );
}

export default SubtaskInput;
