import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Posts",
  description: "Demo with posts and comments",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {/* ✅ Navbar */}
        <nav className="fixed top-0 left-0 right-0 bg-black shadow-md z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600">💬 Posts/Comments</h1>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-blue-600 transition">
                Home
              </Link>
              <Link href="/post" className="hover:text-blue-600 transition">
                Posts (Server)
              </Link>
              <Link href="/post-client" className="hover:text-blue-600 transition">
                Posts (Client)
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content with padding for navbar */}
        <main className="pt-20 max-w-6xl mx-auto px-6">{children}</main>
      </body>
    </html>
  );
}
