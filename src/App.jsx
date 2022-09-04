import React, { useState, createContext } from 'react';
import './App.css';
import CreateTaskForm from './components/forms/CreateTaskForm';
import TaskCard from './components/task-card/TaskCard';
import TaskViewer from './components/task-viewer/TaskViewer';
import Modal from './components/modal/Modal';

const data = [
  {
    id : "T-1",
    status : "Todo",
    name : "Create a Design System for Enum Workspace.",
    dueDate : new Date(2022, 7, 27)
  },
  {
    id : "T-2",
    status : "In Progress",
    name : "Create a Design System for Enum Workspace.",
    dueDate : new Date(2022, 7, 27)
  },
  {
    id : "T-3",
    status : "Completed",
    name : "Create a Design System for Enum Workspace.",
    dueDate : new Date(2022, 7, 27)
  },
  {
    id : "T-4",
    status : "Pending",
    name : "Create a Design System for Enum Workspace.",
    dueDate : new Date(2022, 8, 17)
  }
];

export const TodoContext = createContext();

function App() {
  const [taskList, setTaskList] = useState(data);
  

  const onNewTaskAdd = (newTask) => {
      setTaskList((prevState) =>[...prevState, {
        ...newTask,
        dueDate: new Date(newTask.dueDate),
        id: "T-" + prevState.length + 1,
      }
    ]);
  };

 

  return (
  <div className='app-container'>
    <div className='app-content'>
      <TodoContext.Provider value={taskList}>
      <TaskViewer onNewTaskAdd={onNewTaskAdd} taskList = {taskList}/>
      </TodoContext.Provider>
        {/* <div className="side-bar-right">
          <div className="card-xl">
            <h3>Create task</h3>
            <CreateTaskForm addNewTask={onNewTaskAdd}/>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
