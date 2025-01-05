import Link from "next/link";
import ReturnButton from "@/components/Button/ReturnButton";
import getCategories from "@/api/getCategories";

export default async function Page() {
  const categories = await getCategories();
  return (
    <div>
      <ReturnButton />
      <h1>カテゴリ一覧画面</h1>
      <ul>
        {categories.map(({ id, label, name }) => (
          <li key={id}>
            <Link href={`/categories/${name}`}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
