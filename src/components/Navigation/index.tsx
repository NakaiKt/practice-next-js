import Link from "next/link";
import styles from "./style.module.css";
import LinkText from "./LinkText";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <LinkText link="/" text="ホーム" />
        </li>
        <li>
          <LinkText link="/categories" text="カテゴリ一覧" />
        </li>
      </ul>
    </nav>
  );
}
