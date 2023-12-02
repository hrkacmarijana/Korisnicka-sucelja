import Link from "next/link";

export const metadata = {
  title: "Dogs",
};

const posts = [12, 3, 56, 7, 89];

export default function Dogs() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-3xl font-bold p-10">Dogs Page</h1>
      <ul className="flex flex-col gap-8">
        {posts.map((postId) => (
          <li key={postId}>
            <Link href={`dogs/${postId}`}>Post {postId}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
