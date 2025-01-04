import Link from "next/link";
import ReturnButton from "@/components/Button/ReturnButton";

export default function Page() {
  return (
    <div>
      <ReturnButton />
      <h1>カテゴリ一覧画面</h1>
      <ul>
        <li>
          <Link href="/categories/flower">花</Link>
        </li>
        <li>
          <Link href="/categories/animal">動物</Link>
        </li>
        <li>
          <Link href="/categories/landscape">風景</Link>
        </li>
      </ul>
    </div>
  );
}
