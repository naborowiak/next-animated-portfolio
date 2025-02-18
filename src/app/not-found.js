export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600">Page not found</p>
        <a href="/" className="mt-8 inline-block text-blue-600 hover:text-blue-800">
          Return Home
        </a>
      </div>
    </div>
  );
} 