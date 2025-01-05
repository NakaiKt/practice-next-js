import ReturnButton from "@/components/Button/ReturnButton";

type Props = {
  params: { photoIds?: string[] };
};

// Optional Catch-all Segmentを使用したルーティング
// 例: /photos/1/2/3 のように複数のSegmentを持つパスを受け取る
// 例: /photos のようにSegmentが存在しない場合も受け取る
// ただし、上記2つはどちらもより具体性が高い/photos/page.tsxおよび/photos/[photoId]/page.tsx, /photos/[...photoIds]/page.tsxにマッチする
// なので、今回の場合このファイルが実行されることはない

export default async function Page({ params }: Props) {
  const { photoIds } = await params;
  return (
    <div>
      <ReturnButton />
      <h1>写真ID: {photoIds?.join(", ")}</h1>
      <table>
        <tbody>
          <tr>
            <th>概要</th>
            <td>概要テキスト</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
