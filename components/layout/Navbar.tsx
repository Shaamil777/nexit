import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-7xl bg-black/15 backdrop-blur-md rounded-[10px] px-6 py-5 flex items-center justify-between shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="18" r="9" stroke="white" strokeWidth="4" />
            <circle cx="22" cy="18" r="9" stroke="white" strokeWidth="4" />
          </svg>
          <span className="text-2xl font-extrabold text-white tracking-wide ml-1">LOGO</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "About Us", "Our Services", "Products", "Contact"].map((item) => (
            <Link key={item} href="#" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
              {item}
            </Link>
          ))}
        </div>

        {/* Login Button */}
        <div>
          <Link href="/login" className="bg-[#66D3CB] hover:bg-[#52c1b9] text-white text-sm font-semibold px-6 py-2 rounded-lg transition-colors shadow-sm">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
}
