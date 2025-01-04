import ReturnButton from "@/components/Button/ReturnButton";

type Props = {
  params: { photoId: string };
};

export default function Page({ params }: Props) {
  return (
    <div>
      <ReturnButton />
      <h1>写真ID: {params.photoId}</h1>
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
