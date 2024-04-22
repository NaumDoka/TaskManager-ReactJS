import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TaskForm from "./TaskForm";
import Task from "./Task";

function TaskColumns({
  tasks,
  searchVal,
  handleDragDrop,
  addTask,
  removeTask,
  renameTasks,
  updateTaskDone,
  updateTaskDescription,
  updateTaskDueDate,
  updateTaskPriority,
  updateTaskNotes,
  onSaveNotes,
  handleCancelNotes,
  handleSubtasksChange,
}) {
  const renderColumns = (columnId, columnTitle, filterFunc) => {
    const filteredTasks = tasks.filter(filterFunc);
    const searchedTasks = searchVal
      ? filteredTasks.filter(
          (task) =>
            task.name.replace(/\s/g, "").toLowerCase().includes(searchVal) ||
            task.dueDate.toLowerCase().includes(searchVal)
        )
      : filteredTasks;
    return (
      <Droppable key={columnId} droppableId={columnId}>
        {(provided) => (
          <div
            className={`${columnId}-column`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h3>{columnTitle}</h3>
            {searchedTasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    draggable="true"
                  >
                    <Task
                      {...task}
                      key={task.id}
                      subtasks={task.subtasks}
                      index={index}
                      onRename={(newName) => renameTasks(task.id, newName)}
                      onTrash={() => removeTask(task.id)}
                      onToggle={(done) => updateTaskDone(task.id, done)}
                      onDescriptionChange={(newDescription) =>
                        updateTaskDescription(task.id, newDescription)
                      }
                      onDueDateChange={(newDueDate) =>
                        updateTaskDueDate(task.id, newDueDate)
                      }
                      onPriorityChange={(newPriority) =>
                        updateTaskPriority(task.id, newPriority)
                      }
                      onNotesChange={(newNotes) =>
                        updateTaskNotes(task.id, newNotes)
                      }
                      onSaveNotes={(newNotes) => onSaveNotes(task.id, newNotes)}
                      onCancelNotes={handleCancelNotes}
                      onSubtasksChange={(updatedSubtasks) =>
                        handleSubtasksChange(task.id, updatedSubtasks)
                      }
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  };

  return (
    <DragDropContext onDragEnd={handleDragDrop}>
      <div className="columns-container-clearfix">
        <TaskForm onAdd={addTask} />
        <div className="todo-column-container">
          {renderColumns(
            "todo",
            "To Do",
            (task) => !task.inProgress && !task.done
          )}
        </div>
        <div className="in-progress-column">
          {renderColumns(
            "inProgress",
            "In Progress",
            (task) => task.inProgress && !task.done
          )}
        </div>
        <div className="completed-column">
          {renderColumns(
            "completedTasks",
            "Completed",
            (task) => task.done && !task.inProgress
          )}
        </div>
      </div>
    </DragDropContext>
  );
}

export default TaskColumns;
