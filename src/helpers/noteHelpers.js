export function onSaveNotes(tasks, setTasks, taskID, newNotes) {
  const updatedTasks = tasks.map((task) => {
    if (task.id === taskID) {
      return { ...task, notes: newNotes };
    }
    return task;
  });
  setTasks(updatedTasks);
}

export function handleCancelNotes(tasks, setTasks, taskID) {
  const updatedTasks = tasks.map((task) => {
    if (task.id === taskID) {
      return { ...task, notes: "" };
    }
    return task;
  });
  setTasks(updatedTasks);
}

export function updateTaskNotes(tasks, setTasks, taskID, newNotes) {
  setTasks((prev) => {
    const newTasks = prev.map((task) => {
      if (task.id === taskID) {
        return { ...task, notes: newNotes };
      }
      return task;
    });
    return newTasks;
  });
}
