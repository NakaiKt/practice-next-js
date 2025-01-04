import Link from "next/link";
import styles from "./style.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <p>
        <Link href="/">Photo Share</Link>
      </p>
    </header>
  );
}
