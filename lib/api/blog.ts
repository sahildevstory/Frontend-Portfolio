export async function getBlogs() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch blogs");

  return res.json();
}

export async function getBlog(id: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch blog");

  return res.json();
}