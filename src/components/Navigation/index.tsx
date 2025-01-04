import Link from "next/link";
import styles from "./style.module.css";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/categories">カテゴリ一覧</Link>
        </li>
      </ul>
    </nav>
  );
}
