import React, { useContext, useState,useEffect } from "react";
import { TaskListContext } from "./TaskList/TaskListContext";

const Task = ({ task }) => {
  const initialStateOfDoneTask = JSON.parse(localStorage.getItem("doneTasks"))|| false;
  const { removeTask, findItem } = useContext(TaskListContext);
  const [doneTask, setDoneTask] = useState(initialStateOfDoneTask);
  const doneTaskEvent = () => {
    {console.log(task.id)}
    if (doneTask === true) setDoneTask(false);
    else setDoneTask(true);
  };
  useEffect(() => {
    localStorage.setItem("doneTasks", JSON.stringify(doneTask));
  }, [doneTask]);
  return (
    <li className="list-item">
      <button
        onClick={() => doneTaskEvent()}
        className={doneTask ? "btn-check task-btn" : "btn-checked task-btn"}
      >
        <i class="fas fa-check-circle"></i>
      </button>
      {/* {doneTask?<span className="span-line">{task.title}</span>:<span>{task.title}</span>} */}
      {/* <span>{task.title}</span> */}
      <div className={doneTask ? "task-text-line" : "task-text"}>
        {task.title}
      </div>
      <div>
        <button
          onClick={() => removeTask(task.id)}
          className="btn-delete task-btn"
        >
          <i className="fas fa-trash-alt"></i>
        </button>
        <button onClick={() => findItem(task.id)} className="btn-edit task-btn">
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  );
};

export default Task;
