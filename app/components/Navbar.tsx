"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  const baseClass =
    "text-foreground hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors"

  return (
    <nav className="bg-card border-b border-border shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              
              <Link
                href="/"
                className={`${baseClass} ${pathname === "/" ? "active" : ""}`}
              >
                Home
              </Link>

              <Link
                href="/popular"
                className={`${baseClass} ${pathname === "/popular" ? "active" : ""}`}
              >
                Popular movies
              </Link>

              <Link
                href="/local-top-rated"
                className={`${baseClass} ${pathname === "/local-top-rated" ? "active" : ""}`}
              >
                Local Top 20
              </Link>

            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
