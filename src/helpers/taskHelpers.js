import { v4 as uuidv4 } from "uuid";

export function addTask(
  tasks,
  setTasks,
  name,
  description,
  dueDate,
  priority,
  subtasks
) {
  const clampedPriority = priorityInterval(priority);
  const newTask = {
    id: uuidv4(),
    name,
    description,
    dueDate,
    priority: clampedPriority,
    done: false,
    notes: "",
    subtasks: [],
    inProgress: false,
  };

  const updatedTasks = [...tasks, newTask];
  setTasks(updatedTasks);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

export function removeTask(tasks, setTasks, taskID) {
  const updatedTasks = tasks.filter((task) => task.id !== taskID);
  setTasks(updatedTasks);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

export function updateTaskDone(tasks, setTasks, taskID, newDone) {
  const newTasks = tasks.map((task) => {
    if (task.id === taskID) {
      if (task.inProgress && newDone) {
        return {
          ...task,
          done: true,
          inProgress: false,
        };
      } else {
        return {
          ...task,
          done: newDone,
          inProgress: !newDone ? false : task.inProgress,
        };
      }
    }
    return task;
  });

  setTasks(newTasks);
}

export function renameTask(tasks, setTasks, taskID, newName) {
  const newTasks = tasks.map((task) => {
    if (task.id === taskID) {
      return { ...task, name: newName };
    }
    return task;
  });

  setTasks(newTasks);
}

export function updateTaskDescription(tasks, setTasks, taskID, newDescription) {
  const newTasks = tasks.map((task) => {
    if (task.id === taskID) {
      return { ...task, description: newDescription };
    }
    return task;
  });

  setTasks(newTasks);
}

export function updateTaskDueDate(tasks, setTasks, taskID, newDueDate) {
  const newTasks = tasks.map((task) => {
    if (task.id === taskID) {
      return { ...task, dueDate: newDueDate };
    }
    return task;
  });

  setTasks(newTasks);
}

export function updateTaskPriority(tasks, setTasks, taskID, newPriority) {
  const newTasks = tasks.map((task) => {
    if (task.id === taskID) {
      return { ...task, priority: newPriority };
    }
    return task;
  });

  setTasks(newTasks);
}

export function updateTaskNotes(tasks, setTasks, taskID, newNotes) {
  const newTasks = tasks.map((task) => {
    if (task.id === taskID) {
      return { ...task, notes: newNotes };
    }
    return task;
  });

  setTasks(newTasks);
}

function priorityInterval(newPriority) {
  const parsedPriority = parseInt(newPriority);
  return Math.min(Math.max(parsedPriority, 1), 3);
}
