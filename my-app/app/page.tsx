import Header from '@/components/Header';
import BlogCard from '@/components/BlogCard';

// Fetch dữ liệu từ API
async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main>
      <Header />
      {/* Chúng ta sẽ render danh sách bài viết ở bước tiếp theo */}
    </main>
  );
}
