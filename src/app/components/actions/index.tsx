"use client";

import React, { useState, useTransition } from "react";
import styles from "./actions.module.css";
import { useRouter } from "next/navigation";

export default function Actions() {
  const [value, setValue] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const router = useRouter();

  async function add() {
    setIsFetching(true);
    const response = await fetch("https://modern-todolist.onrender.com/add", {
      body: JSON.stringify({ content: value }),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    const message = await response.text();
    setIsFetching(false);
    startTransition(() => {
      router.refresh();
    });

    alert(message);
  }

  const isMutating = isFetching || isPending;

  return (
    <div>
      <input
        className={styles.input}
        placeholder="Escreva sua proxima tarefa..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className={styles.button} onClick={add} disabled={isMutating}>
        Adicionar
      </button>
    </div>
  );
}
