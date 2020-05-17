import React, { useState, FC } from "react";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { Task, taskState } from "../atoms/Task";

interface TaskItemProps {
  task: Task;
  index: number;
}

const removeTasksAtIndex = (tasks: Task[], index: number) => {
  return [...tasks.slice(0, index), ...tasks.slice(index + 1)];
};

const replaceTasksAtIndex = (tasks: Task[], index: number, newTask: Task) => {
  return [...tasks.slice(0, index), newTask, ...tasks.slice(index + 1)];
};

const TaskItem: FC<TaskItemProps> = ({ task, index }) => {
  const [tasks, setTasks] = useRecoilState(taskState);

  const handleChange = () => {
    const newTasks = replaceTasksAtIndex(tasks, index, {
      ...task,
      completed: !task.completed,
    });
    setTasks(newTasks);
  };

  const handleClick = () => {
    const newTasks = removeTasksAtIndex(tasks, index);
    setTasks(newTasks);
  };

  return (
    <li key={index}>
      <input type="checkbox" checked={task.completed} onChange={handleChange} />
      {task.title}
      <button onClick={handleClick}>削除</button>
    </li>
  );
};

export default TaskItem;
