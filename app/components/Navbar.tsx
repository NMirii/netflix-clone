export default function Navbar() {
  return (
    <div className="hidden md:flex items-center gap-6 text-lg py-0">
      <a
        href="#hero"
        className="text-white hover:text-netflix-lightGray transition"
      >
        Home
      </a>
      <a
        href="#content"
        className="text-white hover:text-netflix-lightGray transition"
      >
        Popular
      </a>
      <a
        href="#content"
        className="text-white hover:text-netflix-lightGray transition"
      >
        Local Top 20
      </a>
    </div>
  );
}
