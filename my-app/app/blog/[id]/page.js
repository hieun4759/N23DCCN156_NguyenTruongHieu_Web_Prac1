import Header from '@/components/Header';
import Link from 'next/link';

export default async function BlogDetail({ params }) {
    const { id } = await params;

    // Fetch chi tiết bài viết dựa vào ID
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();

    return (
        <main className="bg-gray-50 min-h-screen">
            <Header />
            <div className="max-w-3xl mx-auto p-6 mt-8 bg-white rounded-xl shadow-sm">
                <Link href="/" className="text-indigo-600 font-semibold mb-6 inline-block hover:underline">
                    &larr; Back to Blog
                </Link>

                <h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>
                <div className="flex items-center gap-2 mb-6">
                    <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2 py-1 rounded-full">
                        Article #{post.id}
                    </span>
                    <span className="text-gray-400 text-sm">By User {post.userId}</span>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg">
                    {post.body}
                </p>
            </div>
        </main>
    );
}