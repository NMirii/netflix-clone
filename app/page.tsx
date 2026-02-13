import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <Header />
      </header>

      <main className="flex-1 pt-20">{/* page content */}</main>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h3 className="text-2xl font-bold text-red-600">NETFLIX</h3>

          <p className="text-gray-400 text-sm">
            Powered by TMDB API • React Server Components
          </p>

          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span>© 2026 Netflix Clone</span>
            <span>•</span>
            <span>Educational Project</span>
            <span>•</span>
            <span>TMDB Integration</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
