import ReturnButton from "@/components/Button/ReturnButton";

type Props = {
  params: { photoIds: string[] };
};

// Catch-all Segmentを使用したルーティング
// 例: /photos/1/2/3 のように複数のSegmentを持つパスを受け取る
// 例: /photos/1 のようにSegmentが1つの場合、より具体性が高いDynamicRoute Segmentが使用される
export default async function Page({ params }: Props) {
  const { photoIds } = await params;
  return (
    <div>
      <ReturnButton />
      <h1>複数枚対応: 写真ID: {photoIds.join(", ")}</h1>
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
