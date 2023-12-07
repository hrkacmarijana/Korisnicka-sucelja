import Link from "next/link";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const BASE_API_URL = "https://jsonplaceholder.typicode.com";

const getPosts = async (): Promise<Post[]> => {
  const data = await fetch(`${BASE_API_URL}/posts`);
  return data.json();
};

export default async function Blog() {
  const posts = await getPosts();
  return (
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
      <h1 className="text-5xl font-bold pt-32 pb-16 ">BLOG</h1>
      <ul className="flex flex-col gap-8">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`blog/${post.id}`}>
              <span className="text-2xl text-blue-600 underline ">
                Post {post.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
