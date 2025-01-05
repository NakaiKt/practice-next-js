// 命名規約に則ったファイル
// NotFoundのときに子コンポーネント含めすべてのコンポーネントで表示される
// NOTE: ページが見つからなかった場合に表示されるほか、明示的に`notFound()` として呼び出すこともできる
export default async function NotFound() {
  return <div>Not Found</div>;
}
