import ReturnButton from "@/components/Button/ReturnButton";
type Props = {
  params: { categoryName: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Page({ params, searchParams }: Props) {
  const page =
    typeof searchParams.page === "string" ? parseInt(searchParams.page, 10) : 1;

  return (
    <div>
      <ReturnButton />
      <h1>カテゴリ一覧画面</h1>
      <h2>カテゴリ: {params.categoryName}</h2>
      <p>ページ番号: {page}</p>
    </div>
  );
}
