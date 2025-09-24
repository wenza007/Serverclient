import Link from "next/link";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default async function PostPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 9).map((post: Post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h2 className="text-black font-semibold text-lg mb-2 line-clamp-1">
              {post.title}
            </h2>
            <p className="text-sm text-gray-600 line-clamp-3 mb-4">
              {post.body}
            </p>
            <Link
              href={`/post/${post.id}/comment`}
              className="text-blue-600 font-medium hover:underline"
            >
              ดูรายละเอียด →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
