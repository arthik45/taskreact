import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../redux/tasksSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}{" "}
          <button onClick={() => dispatch(removeTask(task.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
