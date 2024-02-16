import Image from "next/image";
//import styles from "./page.module.css";
import styles from "@/styles/index.module.css"

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <a href="#">Home</a>
          <a href="#">Acerca de</a>
        </nav>

        <div>
          <h2>YOS BLANCAS</h2>
        </div>
      </div>
    </main>
  );
}