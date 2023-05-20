"use client";

import React, { useState } from "react";
import styles from "./actions.module.css";

export default function Actions() {
  const [value, setValue] = useState<string>("");

  async function add() {
    const response = await fetch("http://localhost:8000/add", {
      body: JSON.stringify({ content: value }),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    const message = await response.text();
    alert(message);
  }

  return (
    <div>
      <input
        className={styles.input}
        placeholder="Escreva sua proxima tarefa..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className={styles.button} onClick={add}>
        Adicionar
      </button>
    </div>
  );
}
