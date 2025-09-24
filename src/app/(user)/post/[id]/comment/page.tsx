import React from "react";
import BackButton from "@/components/BackButton";

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

async function getComments(postId: string): Promise<Comment[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  if (!res.ok) throw new Error("Failed to fetch comments");
  return res.json();
}

export default async function CommentPage({ params }: { params: { id: string } }) {
  const comments = await getComments(params.id);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        💬 Comments for Post ID: {params.id}
      </h1>

      <BackButton />

      <div className="space-y-6">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-black font-semibold text-lg">{comment.name}</h2>
            <p className="text-sm text-gray-500 mb-2">{comment.email}</p>
            <p className="text-gray-700">{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
