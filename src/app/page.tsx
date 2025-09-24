import Link from "next/link";

export default function HomePage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-800">
        Welcome to <span className="text-blue-600">Posts/Comments </span> 💬
      </h1>
      <p className="mb-8 text-gray-600">
        Explore posts and comments in both <b>Server</b> and <b>Client</b>  
      </p>

      <div className="flex justify-center gap-6">
        <Link
          href="/post"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl shadow-md hover:opacity-90 transition"
        >
          Posts (Server)
        </Link>
        <Link
          href="/post-client"
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl shadow-md hover:opacity-90 transition"
        >
          Posts (Client)
        </Link>
      </div>
    </div>
  );
}
