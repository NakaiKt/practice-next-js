type Category = {
  id: string;
  name: string;
  label: string;
  description: string;
  imageUrl: string;
};

type Response = Category[];

export default async function getCategories() {
  const data: { categories: Response } = await fetch(
    "http://host.docker.internal:8080/api/categories",
    { cache: "force-cache" }
  ).then((res) => res.json());
  return data.categories;
}
