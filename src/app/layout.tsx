/**
 * 大本のレイアウトを定義する
 * このレイアウトはrootおよびlayout.tsxを持たない子ディレクトリのページに適用される
 */

import "@/style/global.css";
import styles from "./layout.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div className={styles.container}>
          <Header />
          <div className={styles.content}>
            <Navigation />
            <div className={styles.main}>{children}</div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
