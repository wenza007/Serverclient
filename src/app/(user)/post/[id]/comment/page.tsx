// src/app/(user)/post/[id]/comment/page.tsx
import BackButton from "@/components/BackButton";

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

async function getComments(postId: string): Promise<Comment[]> {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
      { cache: "no-store" }
    );
    if (!res.ok) throw new Error(`Failed to fetch comments: ${res.status}`);
    return res.json();
  } catch (err: unknown) {
    if (err instanceof Error) console.error(err.message);
    else console.error(err);
    return [];
  }
}

function CommentCard({ comment }: { comment: Comment }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <h2 className="text-black font-semibold text-lg">{comment.name}</h2>
      <p className="text-sm text-gray-500 mb-2">{comment.email}</p>
      <p className="text-gray-700">{comment.body}</p>
    </div>
  );
}

export default async function CommentPage({ params }: { params: Promise<{ id: string }> }) {
  // unwrap params
  const { id } = await params; // ✅ await Promise

  const comments = await getComments(id);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">💬 Comments for Post ID: {id}</h1>
      <BackButton />
      {comments.length === 0 ? (
        <p className="text-gray-500">ไม่สามารถโหลดความคิดเห็นได้ หรือไม่มีความคิดเห็น</p>
      ) : (
        <div className="space-y-6">
          {comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
}
