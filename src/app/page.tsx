import Link from "next/link";
import getPhotos from "@/api/getPhotos";

export default async function Page() {
  const photos = await getPhotos();
  return (
    <div>
      <h1>トップ画面</h1>
      <ul>
        {photos.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/photos/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
