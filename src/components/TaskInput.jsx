import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";


const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const addTaskHandler = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task }));
      setTask("");
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTaskHandler}>Add Task</button>
    </div>
  );
};

export default TaskInput;
