import Link from "next/link";

const SocialIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "facebook":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "instagram":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case "twitter":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "youtube":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#049E9F] to-[#1B1F1F] text-white pt-20 pb-8 mt-auto font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Call to Action Section */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-light mb-4 leading-tight">
            Let's Build the Future of Your<br className="hidden md:block" />Business — Together.
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl font-light text-sm md:text-base">
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          </p>
          <Link href="/discover" className="inline-block bg-white text-[#049E9F] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg shadow-black/10">
            Discover More
          </Link>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          
          {/* Logo & About (Takes up more space) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              {/* Logo SVG */}
              <div className="flex items-center">
                 <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                    <circle cx="14" cy="20" r="10" stroke="white" strokeWidth="4" />
                    <circle cx="26" cy="20" r="10" stroke="white" strokeWidth="4" />
                 </svg>
                 <span className="text-3xl font-extrabold tracking-widest">LOGO</span>
              </div>
            </div>
            <p className="text-gray-300 font-light mb-8 max-w-md leading-relaxed text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { type: "facebook", href: "#" },
                { type: "instagram", href: "#" },
                { type: "twitter", href: "#" },
                { type: "linkedin", href: "#" },
                { type: "youtube", href: "#" }
              ].map((social, idx) => (
                <Link key={idx} href={social.href} className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#049E9F] hover:border-white transition-all duration-300">
                  <SocialIcon type={social.type} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="text-base font-bold mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-4">
              {["Home", "Who We Are", "Products", "Our Location", "Contact Us"].map((link, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-gray-300 hover:text-white font-light text-sm transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="md:col-span-3">
            <h3 className="text-base font-bold mb-6 tracking-wide">Contacts</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@xxx.com" className="text-gray-300 hover:text-white font-light text-sm transition-colors">
                  info@xxx.com
                </a>
              </li>
              <li>
                <a href="tel:+9198461xxxxxx" className="text-gray-300 hover:text-white font-light text-sm transition-colors">
                  +91 98461 xxxxxx
                </a>
              </li>
              <li>
                <p className="text-gray-300 font-light text-sm leading-relaxed mt-2">
                  2nd Floor, Tihama Centre, Near Ernakulam Medical Centre, NH 66, Palarivattom, Kochi - 682028
                </p>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-300 font-light">
          <p>© copyright 2020 by xxxx.com</p>
          
          <div className="flex items-center gap-1">
            <span className="text-[10px]">Powered by</span>
            <span className="font-bold text-white text-sm tracking-wider">NEXIT</span>
          </div>
          
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Content Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
