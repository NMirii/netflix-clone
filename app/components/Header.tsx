import EdgeBadge from "./Edge";
import LiveTime from "./LiveTime";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="flex items-center justify-between fixed p-4 bg-black mx-auto w-full top-0 left-0 right-0 z-50">
      <div className="flex items-center gap-6 mx-auto p-4">
        <Logo />
        <Navbar />
      </div>
      <div className="flex items-center gap-2 mx-auto p-4">
        <LiveTime />
        <EdgeBadge />
      </div>
    </div>
  );
}
