## Task Management Application using ReactJS

## Task Management Application Features:

1. Creating Tasks:
   Users can create new tasks by providing a title, description, due date,
   and priority level. Upon submission, tasks are added to the task list.
2. Updating Task Status:
   Tasks have different statuses like "To Do," "In Progress," and
   "Completed." Users can easily update the status of tasks by dragging
   and dropping them between different columns.
3. Adding Notes:
   Users can add notes to tasks to provide additional details or
   reminders. Notes can be edited or deleted as needed.
4. Adding Subtasks:
   Tasks can have subtasks for breaking down large tasks into
   manageable parts. Users can create, edit, and delete subtasks
   associated with a task.
5. Task Details View:
   Clicking on a task reveals its details, including description, due date,
   status, notes, and subtasks. Users can view and manage all aspects
   of a task from this detailed view.
6. Search and Filtering:
   The app provides search and filtering capabilities to easily find tasks
   based on title, status, or due date. Users can quickly locate specific
   tasks or filter tasks based on criteria.

## Setting up the project locally:

1. Install Node.js v20.12.0 and npm 10.5.0.
2. Clone the Project Repository:
   - If the ReactJS project is hosted on a version control platform like GitHub, you'll need to clone the repository to your local machine.
   - Open your terminal or command prompt.
   - Navigate to the directory where you want to store the project(use `cd` shell command).
   - Use the following command to clone the repository: `git clone <repository-url>`.
3. Navigate to the Project Directory:
   - After cloning the repository, navigate to the project directory using the `cd project-directory` command.
4. Install Dependencies:
   - Once you're inside the project directory, you need to install the project dependencies.
   - Run the following command: `npm install`.
   - This command will download and install all the dependencies listed in the package.json file.
5. Run the Development Server:

   - After installing dependencies, use the following command to start the development server: `npm start`.
   - This command will start the development server and open your default web browser to view the React app.
   - You can also access the React app by opening a web browser and navigating to `http://localhost:3000`.

## Project Folder Structure:

- **public/**: Contains the index.html file as the entry point for the React application. Also includes other static assets like favicon.ico, custom-favicon.ico.
- **src/**: This is where the main source code of the application resides.
  - **components/**: Contains reusable React components used throughout the application.
  - **helpers/**: Contains utility functions and modules that assist in various tasks throughout the application. These helpers are designed to encapsulate common functionality and promote code reusability.
  - **App.js**: The main component that acts as the entry point for the React application.
  - **App.css**: Contains CSS styles specifically tailored for the top-level component App.js and other components of this React application.
  - **index.js**: The entry point for the React application, where ReactDOM.render() is called to render the root component into the DOM.
  - **index.css**: Contains styles for creating a visually appealing background effect with animated bubbles and gradient colors. It sets up a full-screen background gradient with moving bubbles scattered across it. Additionally, it includes styles for a centered title with a gradient animation effect to give it a dynamic appearance.
- **node_modules/**: Contains all the npm packages that your project depends on. This folder is created and managed automatically by npm.
- **package.json**: Defines metadata about the project and lists all the dependencies required by the project.
- **README.md**: This file, which you are currently reading, provides information about the project, including its folder structure, setup instructions, and other relevant details.

## Libraries Used:

The following libraries were used in the development of this project:

- React: A JavaScript library for building user interfaces.
- useEffect: It's a React Hook for handling side effects in functional components.
- useState: Another React Hook used for managing state in functional components.
- react-beautiful-dnd: A library for implementing drag and drop functionality in React applications.

## Components Overview

- **App.js**:
  It serves as the main entry point for a task management application. It imports necessary modules and components from various files and libraries. Utilizes React's useState hook to manage the state of tasks and the search value entered by the user and uses useEffect hooks to handle tasks' state persistence in localStorage. It defines various event handler functions for adding, removing, updating tasks, notes, subtasks, handling drag and drop events, and updating search input value. The App component renders a main container wrapping around the task columns and search input components. It also uses the DragDropContext component from react-beautiful-dnd for managing drag and drop functionality. It passes down task-related data and event handlers to the TaskColumns component.

- **Task.js**:
  Represents a single task item. It imports necessary components (Checkbox, Notes, Subtask, SubtaskInput) and helper functions (subtaskHelpers) from other files. Utilizes React's useState hook to manage local component state, including the edit mode, visibility of notes, temporary notes, visibility of task details, and subtask input value. It defines various event handler functions for handling clicks on the task, toggling notes visibility, saving/canceling notes, handling subtask operations like adding, removing, updating subtasks. The Task component renders a task item with its name, description, due date, priority, checkboxes for marking task completion, buttons for toggling notes and deleting the task, and input fields for editing task details. It also renders subtasks and their associated input fields for adding new subtasks.

- **TaskColumns.js**:
  Represents the columns layout for displaying tasks. It imports necessary components (DragDropContext, Droppable, Draggable) from the react-beautiful-dnd library and the TaskForm and Task components from other files. The TaskColumns component renders three columns for tasks: "To Do", "In Progress", and "Completed". Each column is wrapped in a Droppable component, enabling drag-and-drop functionality. It maps over the tasks array to render individual Task components within each column. It wraps the entire columns layout with a DragDropContext component, which provides the context for drag-and-drop interactions and specifies the onDragEnd event handler to manage the outcome of drag-and-drop actions.

- **TaskForm.js**:
  Represents a form for adding a new task. It utilizes React's useState hook to manage local component state for the task name, description, due date, and priority. Defines a handleSubmit function to handle form submission. When the form is submitted, it calls the onAdd function (provided as a prop) with the task details and then resets the form fields. The TaskForm component renders a form with input fields for the task title, description, due date, and priority. It also includes a button for submitting the form. It defines event handler functions for updating the state of form fields as the user inputs data.

- **Subtask.js**:
  Represents a single subtask item. It utilizes React's useState hook to manage local component state for the edit mode of the subtask and the input value for editing the subtask name. The Subtask component renders a subtask item with a checkbox, the subtask name, and a delete button. It defines event handlers for toggling the subtask's completion status (onToggle), renaming the subtask (onRename), and deleting the subtask (onDelete).

- **SubtaskInput**:
  The SubtaskInput component renders an <input> element. It handles the onChange and onKeyPress events of the input field, allowing for dynamic updates and handling of user input.

- **SearchInput.js**:
  The SearchInput component renders a search input field along with an associated search icon. It accepts props such as value, onChange, and placeholder to customize the behavior. It handles the onChange event of the input field, allowing for dynamic updates and handling of user input for searching.

- **Notes.js**:
  The Notes component provides a user interface for adding and editing notes associated with a specific task. It uses the useState hook to manage the state of temporary notes (tempNotes). It handles the onChange event of the textarea to update the temporary notes as the user types. Additionally, it handles the onClick events of the save and cancel buttons. The component interacts with the browser's localStorage API to store and retrieve notes associated with a specific task. It utilizes the useEffect hook to perform side effects when the component mounts and when the taskId or initialNotes props change. This is used to synchronize the temporary notes with the stored notes in local storage.

- **Checkbox.js**:
  The Checkbox component renders a checkbox UI element with two states: checked and unchecked. It allows users to toggle between these states by clicking on the checkbox. Depending on the value of the checked prop, the component renders either a checked or an unchecked checkbox icon using SVG. It handles the onClick event of the checkbox by calling the function passed via the onClick prop.
