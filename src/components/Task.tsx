import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { taskState } from "../atoms/Task";

const TaskInput = () => {
  const [title, setTitle] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onClick = () => {};
  return (
    <div>
      <label>
        TODOタスク
        <input type="text" value={title} onChange={onChange} />
      </label>
      <button onClick={onClick}>登録</button>
    </div>
  );
};

export const TaskList = () => {
  return (
    <>
      <TaskInput />
    </>
  );
};

export default TaskList;
