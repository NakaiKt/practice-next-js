import Link from "next/link";
import styles from "./style.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>
        <Link href="/company-info">運営企業</Link>
        {" | "}@ {currentYear} Photo Share
      </p>
    </footer>
  );
}
