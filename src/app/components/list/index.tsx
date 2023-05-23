import React from "react";
import styles from "./list.module.css";
import Item from "./item";

export type ListType = {
  id: number;
  content: string;
  created: string;
};

export default async function List() {
  const response = await fetch("https://modern-todolist.onrender.com/list", {
    method: "GET",
    cache: "no-cache",
  });
  const list: ListType[] = await response.json();

  return (
    <div>
      {list.map((task) => (
        <Item key={task.id} task={task} />
      ))}
    </div>
  );
}
