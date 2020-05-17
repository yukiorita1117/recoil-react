import React from "react";
import TaskList from "./components/Task";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <TaskList />
    </RecoilRoot>
  );
}

export default App;
