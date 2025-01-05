import ReturnButton from "@/components/Button/ReturnButton";

type Props = {
  params: { photoId: string };
};

// DynamicRoute Segmentを使用したルーティング
export default async function Page({ params }: Props) {
  const { photoId } = await params;
  return (
    <div>
      <ReturnButton />
      <h1>写真ID: {photoId}</h1>
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
