import { atom } from "recoil";

export interface Task {
  title: string;
  completed: boolean;
}

const initialTasks: Task[] = [];

// Recoilでは、グローバルな（複数コンポーネントで共有される）ステートはAtom(データストア)と呼ぶ。
// keyを設定しない場合、もしくは被ったらランタイムエラー。しかし許容範囲と見れる。
export const taskState = atom({
  key: "task",
  default: initialTasks,
});
