"use client";

import React, { useState } from "react";
import styles from "./actions.module.css";

export default function Actions() {
  const [value, setValue] = useState<string>("");

  async function add() {
    const response = await fetch(backend_url, {
      body: JSON.stringify({ task: value }),
      method: "POST",
    });

    const json = response.json();
    console.log(json);
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
