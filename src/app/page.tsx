import styles from "./page.module.css";
import Actions from "./components/actions";

export default function Home() {
  return (
    <main className={styles.main}>
      <Actions />
    </main>
  );
}
