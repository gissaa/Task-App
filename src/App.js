import React from "react";
import "./App.css";
import TaskList from "./component/Task/TaskList/TaskList";
import TaskForm from "./component/Task/TaskForm/TaskForm";
import Header from "./component/Header/Header"
import TaskListContextProvider from "./component/Task/TaskList/TaskListContext";
const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
            <Header/>
          <div className="main">
              <TaskForm/>
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;
