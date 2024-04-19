import React, { useState } from "react";
import Checkbox from "./Checkbox";

function Subtask({ id, subtaskName, isDone, onRename, onDelete, onToggle }) {
  const [editMode, setEditMode] = useState(false);
  const [subtaskInput, setSubtaskInput] = useState(subtaskName);

  return (
    <div className={"subtask " + (isDone ? "isDone" : "")}>
      <div className="subtask-checkbox">
        <Checkbox checked={isDone} onClick={() => onToggle(!isDone)} />
      </div>
      <div className="subtask-content">
        {!editMode && (
          <div
            className="subtask-name"
            onClick={() => setEditMode((prev) => !prev)}
          >
            <span>{subtaskName}</span>
          </div>
        )}

        {editMode && (
          <form
            onSubmit={(ev) => {
              ev.preventDefault();
              onRename(subtaskInput);
              setEditMode(false);
            }}
          >
            <input
              type="text"
              value={subtaskInput}
              onChange={(ev) => setSubtaskInput(ev.target.value)}
              onBlur={() => {
                onRename(subtaskInput);
                setEditMode(false);
              }}
            />
          </form>
        )}
      </div>
      <div className="subtask-trash-icon">
        <button className="trash-icon" onClick={onDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Subtask;
