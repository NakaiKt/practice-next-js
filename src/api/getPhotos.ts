type Photo = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  authorId: string;
  categoryId: string;
};

export type Response = Photo[];

export default async function getPhotos() {
  const data: { photos: Response } = await fetch(
    "http://host.docker.internal:8080/api/photos",
    { cache: "force-cache" }
  ).then((res) => res.json());
  return data.photos.map(({ id, title }) => ({ id, title }));
}
