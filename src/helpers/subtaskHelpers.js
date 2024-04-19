export function handleSubtasksChange(tasks, setTasks, taskID, updatedSubtasks) {
  setTasks((prevTasks) => {
    const updatedTasks = prevTasks.map((task) => {
      if (task.id === taskID) {
        return { ...task, subtasks: updatedSubtasks };
      }
      return task;
    });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    return updatedTasks;
  });
}

export function addSubtask(
  subtasks,
  onSubtasksChange,
  setSubtaskInput,
  subtaskName
) {
  const newSubtask = {
    id: Date.now(),
    subtaskName,
    isDone: false,
  };
  const updatedSubtasks = Array.isArray(subtasks)
    ? [...subtasks, newSubtask]
    : [newSubtask];
  onSubtasksChange(updatedSubtasks);
  setSubtaskInput("");
}

export function deleteSubtask(subtasks, onSubtasksChange, subtaskId) {
  const updatedSubtasks = subtasks.filter(
    (subtask) => subtask.id !== subtaskId
  );
  onSubtasksChange(updatedSubtasks);
}

export function updateSubtask(subtasks, onSubtasksChange, subtaskId, newName) {
  const updatedSubtasks = subtasks.map((subtask) =>
    subtask.id === subtaskId ? { ...subtask, subtaskName: newName } : subtask
  );
  onSubtasksChange(updatedSubtasks);
}

export function toggleSubtask(subtasks, onSubtasksChange, subtaskId) {
  const updatedSubtasks = subtasks.map((subtask) =>
    subtask.id === subtaskId ? { ...subtask, isDone: !subtask.isDone } : subtask
  );
  onSubtasksChange(updatedSubtasks);
}
