"use client";

import React from "react";
import { ListType } from "..";
import { useRouter } from "next/navigation";

type Props = {
  task: ListType;
};

export default function Item({ task }: Props) {
  const router = useRouter();

  async function deleteTask(id: number) {
    await fetch(`https://modern-todolist.onrender.com/list/${id}`, {
      method: "DELETE",
    });
    router.refresh();
  }

  return (
    <p key={task.id} onClick={() => deleteTask(task.id)}>
      {task.content}
    </p>
  );
}
