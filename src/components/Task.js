import React, { useState } from "react";
import Checkbox from "./Checkbox";
import Notes from "./Notes";
import Subtask from "./Subtask";
import SubtaskInput from "./SubtaskInput";
import * as subtaskHelpers from "../helpers/subtaskHelpers";

function Task({
  id,
  name,
  description,
  dueDate,
  priority,
  done,
  inProgress,
  notes,
  subtasks,
  onToggle,
  onTrash,
  onRename,
  onDescriptionChange,
  onDueDateChange,
  onPriorityChange,
  onSubtasksChange,
}) {
  const [editMode, setEditMode] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [tempNotes, setTempNotes] = useState(notes);
  const [isVisible, setVisible] = useState(true);
  const [subtaskInput, setSubtaskInput] = useState("");

  const handleClick = (ev) => {
    const isInputField = ev.target.tagName.toLowerCase() === "input";
    const isCheckbox = ev.target.type === "checkbox";
    if (isInputField && !isCheckbox && !editMode) {
      setEditMode(editMode);
    } else {
      if (!isInputField && editMode) {
        setEditMode(!editMode);
      }
    }
  };

  // Handling notes
  const toggleNotes = () => {
    setShowNotes((prev) => !prev);
  };

  const handleSaveNotes = (newNotes) => {
    setTempNotes(newNotes);
    toggleNotes();
  };

  const handleCancelNotes = () => {
    toggleNotes();
  };

  return (
    <div className={"task " + (done ? "done" : "")} onClick={handleClick}>
      <Checkbox
        checked={done}
        onClick={() => (!inProgress ? onToggle(!done) : onToggle(true))}
      />
      {!editMode && (
        <div>
          <div
            className="task-name"
            onClick={() => setEditMode((prev) => !prev)}
          >
            <span>{name}</span>
          </div>
          <button
            className="hide-show-button"
            onClick={() => setVisible(!isVisible)}
          >
            {isVisible ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
              </svg>
            )}
          </button>
          {!isVisible ? (
            <div className="task-section-container">
              <div
                className="task-description"
                onClick={() => setEditMode((prev) => !prev)}
              >
                <span>{description}</span>
              </div>
              <div
                className="task-due-date"
                onClick={() => setEditMode((prev) => !prev)}
              >
                <span>{dueDate}</span>
              </div>
              <div
                className="task-priority"
                onClick={() => setEditMode((prev) => !prev)}
              >
                <span>{priority}</span>
              </div>
            </div>
          ) : null}
        </div>
      )}
      {editMode && (
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            setEditMode(false);
          }}
        >
          <input
            type="text"
            value={name}
            onChange={(ev) => onRename(ev.target.value)}
          />
          <input
            type="text"
            value={description}
            onChange={(ev) => onDescriptionChange(ev.target.value)}
          />
          <input
            type="date"
            value={dueDate}
            min="1990-01-01"
            max="2099-01-01"
            onChange={(ev) => onDueDateChange(ev.target.value)}
          />
          <input
            type="number"
            value={priority}
            min={1}
            max={3}
            onChange={(ev) => onPriorityChange(ev.target.value)}
          />
        </form>
      )}
      <br />
      <div className="subtasks">
        <div className="subtask-container">
          <SubtaskInput
            value={subtaskInput}
            onChange={(e) => setSubtaskInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter")
                subtaskHelpers.addSubtask(
                  subtasks,
                  onSubtasksChange,
                  setSubtaskInput,
                  subtaskInput
                );
            }}
            placeholder="Add subtask..."
          />
          <div className="subtask-list">
            {subtasks &&
              subtasks.map((subtask) => (
                <Subtask
                  key={subtask.id}
                  id={subtask.id}
                  subtaskName={subtask.subtaskName}
                  isDone={subtask.isDone}
                  onRename={(newName) =>
                    subtaskHelpers.updateSubtask(
                      subtasks,
                      onSubtasksChange,
                      subtask.id,
                      newName
                    )
                  }
                  onDelete={() =>
                    subtaskHelpers.deleteSubtask(
                      subtasks,
                      onSubtasksChange,
                      subtask.id
                    )
                  }
                  onToggle={() =>
                    subtaskHelpers.toggleSubtask(
                      subtasks,
                      onSubtasksChange,
                      subtask.id
                    )
                  }
                />
              ))}
          </div>
        </div>
      </div>
      <button className="notes-icon" onClick={toggleNotes}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H288V352c0-17.7 14.3-32 32-32h80V96c0-8.8-7.2-16-16-16H64zM288 480H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V320v5.5c0 17-6.7 33.3-18.7 45.3l-90.5 90.5c-12 12-28.3 18.7-45.3 18.7H288z" />
        </svg>
      </button>
      {showNotes && (
        <Notes
          taskId={id}
          notes={tempNotes}
          onSave={handleSaveNotes}
          onCancel={handleCancelNotes}
        />
      )}
      <button className="trash-icon" onClick={onTrash}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
        </svg>
      </button>
    </div>
  );
}

export default Task;
