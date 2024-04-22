import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import TaskColumns from "./components/TaskColumns";
import SearchInput from "./components/SearchInput";
import CookieConsent from "./components/CookieConsent";
import Dashboard from "./components/Dashboard";
import { DragDropContext } from "react-beautiful-dnd";
import * as taskHelpers from "./helpers/taskHelpers";
import * as noteHelpers from "./helpers/noteHelpers";
import { handleSubtasksChange } from "./helpers/subtaskHelpers";

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks && Array.isArray(storedTasks)) {
      setTasks(storedTasks);
    }
  }, []);

  const handleAddTask = (name, description, dueDate, priority, subtasks) => {
    taskHelpers.addTask(
      tasks,
      setTasks,
      name,
      description,
      dueDate,
      priority,
      subtasks
    );
  };

  const handleRemoveTask = (taskID) => {
    taskHelpers.removeTask(tasks, setTasks, taskID);
  };

  const handleUpdateTaskDone = (taskID, newDone) => {
    taskHelpers.updateTaskDone(tasks, setTasks, taskID, newDone);
  };

  const onSaveNotes = (taskID, newNotes) => {
    noteHelpers.onSaveNotes(tasks, setTasks, taskID, newNotes);
  };

  const handleCancelNotes = (taskID) => {
    noteHelpers.handleCancelNotes(tasks, setTasks, taskID);
  };

  const handleSubtasksChangeWrapper = (taskID, updatedSubtasks) => {
    handleSubtasksChange(tasks, setTasks, taskID, updatedSubtasks);
  };

  function getMessage() {
    const percentage =
      (tasks.filter((t) => t.done).length / tasks.length) * 100;
    if (percentage === 0) {
      return "Get started!😄";
    }

    if (percentage === 100) {
      return "Congratulations!🥳";
    }
    return "Keep going!💪🏻";
  }

  const handleRenameTasks = (taskID, newName) => {
    taskHelpers.renameTask(tasks, setTasks, taskID, newName);
  };

  const handleUpdateTaskDescription = (taskID, newDescription) => {
    taskHelpers.updateTaskDescription(tasks, setTasks, taskID, newDescription);
  };

  const handleUpdateTaskDueDate = (taskID, newDueDate) => {
    taskHelpers.updateTaskDueDate(tasks, setTasks, taskID, newDueDate);
  };

  const handleUpdateTaskPriority = (taskID, newPriority) => {
    taskHelpers.updateTaskPriority(tasks, setTasks, taskID, newPriority);
  };

  const handleUpdateTaskNotes = (taskID, newNotes) => {
    noteHelpers.updateTaskNotes(tasks, setTasks, taskID, newNotes);
  };

  const handleSearchChange = (e) => {
    setSearchVal(e.target.value);
  };

  const handleDragDrop = (result) => {
    const { source, destination, draggableId } = result;
    const { droppableId } = destination;
    if (!destination) {
      return;
    }
    const updatedTasks = Array.from(tasks);
    const [draggedTask] = updatedTasks.splice(source.index, 1);
    updatedTasks.splice(destination.index, 0, draggedTask);
    setTasks((prev) => {
      return (prev || [])?.map((el) => {
        if (draggableId === el?.id) {
          if (droppableId === "todo")
            return {
              ...el,
              done: false,
              inProgress: false,
              // status: ''
            };
          if (droppableId === "inProgress")
            return {
              ...el,
              done: false,
              inProgress: true,
              // status: ''
            };
          if (droppableId === "completedTasks")
            return {
              ...el,
              done: true,
              inProgress: false,
              // status: ''
            };
        }

        return el;
      });
    });
    // setTasks(updatedTasks);
  };

  return (
    <main>
      <DragDropContext onDragEnd={handleDragDrop}>
        <div className="card">
          <h1>
            {tasks.filter((t) => t.done).length}/{tasks.length} Completed
          </h1>
          <Dashboard tasks={tasks} />
          <h2>{getMessage()}</h2>
          <SearchInput
            value={searchVal}
            onChange={handleSearchChange}
            placeholder="Search tasks by name or due date..."
          />
          <CookieConsent />
        </div>
        <TaskColumns
          tasks={tasks}
          searchVal={searchVal}
          handleDragDrop={handleDragDrop}
          addTask={handleAddTask}
          removeTask={handleRemoveTask}
          renameTasks={handleRenameTasks}
          updateTaskDone={handleUpdateTaskDone}
          updateTaskDescription={handleUpdateTaskDescription}
          updateTaskDueDate={handleUpdateTaskDueDate}
          updateTaskPriority={handleUpdateTaskPriority}
          updateTaskNotes={handleUpdateTaskNotes}
          onSaveNotes={onSaveNotes}
          handleCancelNotes={handleCancelNotes}
          handleSubtasksChange={handleSubtasksChangeWrapper}
        />
      </DragDropContext>
    </main>
  );
}

export default App;
