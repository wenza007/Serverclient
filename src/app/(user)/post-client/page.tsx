// src/app/(user)/post-client/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostClientPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data: Post[] = await res.json();
      setPosts(data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">กำลังโหลดโพสต์...</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Posts (Client)</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 9).map((post) => (
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