import React, { useState, useEffect } from "react";

function Notes({ taskId, notes: initialNotes, onSave, onCancel }) {
  const [tempNotes, setTempNotes] = useState(initialNotes);

  const handleSave = () => {
    onSave(taskId, tempNotes);
    localStorage.setItem(`task_${taskId}_notes`, tempNotes);
  };

  const handleCancel = () => {
    onCancel();
  };

  useEffect(() => {
    const storedNotes = localStorage.getItem(`task_${taskId}_notes`);
    if (storedNotes !== null) {
      setTempNotes(storedNotes);
    } else {
      setTempNotes("");
    }
  }, [taskId, initialNotes]);

  return (
    <div className="notes">
      <div className="notes-content">
        <textarea
          value={tempNotes}
          onChange={(e) => setTempNotes(e.target.value)}
          placeholder="Write your notes here..."
          rows={5}
          className="notes-textarea"
        />
        <div className="notes-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancle</button>
        </div>
      </div>
    </div>
  );
}

export default Notes;
