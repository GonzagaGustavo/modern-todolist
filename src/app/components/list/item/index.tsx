"use client";

import React from "react";
import { ListType } from "..";

type Props = {
  task: ListType;
};

export default function Item({ task }: Props) {
  function deleteTask(id: number) {
    fetch(`https://modern-todolist.onrender.com/list/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <p key={task.id} onClick={() => deleteTask(task.id)}>
      {task.content}
    </p>
  );
}
