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
  return (
    <DragDropContext onDragEnd={handleDragDrop}>
      <div className="columns-container-clearfix">
        <TaskForm onAdd={addTask} />
        <Droppable droppableId="todo">
          {(provided) => (
            <div
              className="todo-column"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h3>To Do</h3>
              {tasks
                .filter((task) => !task.inProgress && !task.done)
                .filter(
                  (task) =>
                    task.name
                      .replace(/\s/g, "")
                      .toLowerCase()
                      .includes(searchVal) ||
                    task.dueDate.toLowerCase().includes(searchVal)
                )
                .map((task, index) => (
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
                          onSaveNotes={(newNotes) =>
                            onSaveNotes(task.id, newNotes)
                          }
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
        <Droppable droppableId="inProgress">
          {(provided) => (
            <div
              className="in-progress-column"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h3>In Progress</h3>
              {tasks
                .filter((task) => task.inProgress && !task.done)
                .filter(
                  (task) =>
                    task.name
                      .replace(/\s/g, "")
                      .toLowerCase()
                      .includes(searchVal) ||
                    task.dueDate.toLowerCase().includes(searchVal)
                )
                .map((task, index) => (
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
                          onSaveNotes={(newNotes) =>
                            onSaveNotes(task.id, newNotes)
                          }
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
        <Droppable droppableId="completedTasks">
          {(provided) => (
            <div
              className="completed-column"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h3>Completed</h3>
              {tasks
                .filter((task) => task.done && !task.inProgress)
                .filter(
                  (task) =>
                    task.name
                      .replace(/\s/g, "")
                      .toLowerCase()
                      .includes(searchVal) ||
                    task.dueDate.toLowerCase().includes(searchVal)
                )
                .map((task, index) => (
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
                          onSaveNotes={(newNotes) =>
                            onSaveNotes(task.id, newNotes)
                          }
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
      </div>
    </DragDropContext>
  );
}

export default TaskColumns;
