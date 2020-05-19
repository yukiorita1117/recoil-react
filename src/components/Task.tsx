import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { taskState } from "../atoms/Task";
import TaskItem from "./TaskItem";

const TaskInput = () => {
  const [title, setTitle] = useState("");

  // useStateと同じように使えるが、globalなstateの書き換えになる。
  // stateに書き込まない場合はuseRecoilValueが推奨されている。
  const setTasks = useSetRecoilState(taskState);
  console.log("atom/Taskのlog", taskState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleClick = () => {
    setTasks((t) => {
      return [...t, { title, completed: false }];
    });
    setTitle("");
  };
  return (
    <div>
      <label>
        {"TODOタスク"}
        <input type="text" value={title} onChange={onChange} />
      </label>
      <button onClick={handleClick}>登録</button>
    </div>
  );
};

export const TaskList = () => {
  const tasks = useRecoilValue(taskState);
  return (
    <>
      <TaskInput />
      <ul>
        {tasks.map((t, index) => {
          return <TaskItem task={t} index={index} key={index} />;
        })}
      </ul>
    </>
  );
};

export default TaskList;
