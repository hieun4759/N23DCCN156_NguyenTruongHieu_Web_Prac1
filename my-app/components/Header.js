export default function Header() {
    return (
        <header className="flex justify-between items-center p-6 bg-white shadow-md">
            <h1 className="text-2xl font-bold text-indigo-600">MyBlog</h1>
            <nav className="space-x-6 hidden md:flex">
                <a href="/" className="text-gray-500 hover:text-indigo-600">Home</a>
                <a href="#" className="text-gray-500 hover:text-indigo-600">Articles</a>
                <a href="#" className="text-gray-500 hover:text-indigo-600">About</a>
            </nav>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
                Subscribe
            </button>
        </header>
    );
}