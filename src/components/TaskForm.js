import React, { useState } from "react";

function TaskForm({ onAdd }) {
  const [taskName, setTaskName] = useState(""),
    [taskDescription, setTaskDescription] = useState(""),
    [taskDueDate, setTaskDueDate] = useState(""),
    [taskPriority, setTaskPriority] = useState("");

  function handleSubmit(ev) {
    ev.preventDefault();
    onAdd(taskName, taskDescription, taskDueDate, taskPriority, false);
    setTaskName("");
    setTaskDescription("");
    setTaskDueDate("");
    setTaskPriority("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button>+ Next Task</button>
      <input
        type="text"
        value={taskName}
        onChange={(ev) => setTaskName(ev.target.value)}
        placeholder="Task Title"
      />
      <input
        type="text"
        value={taskDescription}
        onChange={(ev) => setTaskDescription(ev.target.value)}
        placeholder="Task Description"
      />
      <input
        type="date"
        value={taskDueDate}
        min="1990-01-01"
        onChange={(ev) => setTaskDueDate(ev.target.value)}
      />
      <input
        type="number"
        value={taskPriority}
        onChange={(ev) => setTaskPriority(ev.target.value)}
        placeholder="Task Priority"
      />
    </form>
  );
}

export default TaskForm;
