import Link from "next/link";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const BASE_APLI_URL = "https://jsonplaceholder.typicode.com";

const getPosts = async (): Promise<Post[]> => {
  const data = await fetch(`${BASE_APLI_URL}/posts`);
  return data.json();
};

export default async function PetCare() {
  const posts = await getPosts();
  return (
    <main>
      <h1>Pet Care Index Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`PetCare/${post.id}`}>
              <span>Post {post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
