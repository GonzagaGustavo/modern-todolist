import styles from "./page.module.css";
import Actions from "./components/actions";
import List from "./components/list";

export default function Home() {
  return (
    <main className={styles.main}>
      <Actions />
      {/* @ts-expect-error Async Server Component */}
      <List />
    </main>
  );
}
