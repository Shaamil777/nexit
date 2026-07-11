export default function Statistics() {
  const LogoBlock = ({ className }: { className: string }) => (
    <div className={`absolute bg-white px-3 py-2 rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.04)] flex items-center gap-1.5 ${className}`}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-gray-900">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z" />
        <path d="M4 12C4 16.4183 7.58172 20 12 20V4C7.58172 4 4 7.58172 4 12Z" />
      </svg>
      <span className="font-bold text-xs tracking-tight text-gray-900">logo<span className="font-light">ipsum</span></span>
    </div>
  );
  return (
    <section className="w-full bg-white pb-24 pt-4 z-20 relative">
      <div className="max-w-[100rem] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-stretch gap-6 w-full h-auto md:h-[180px]">
          <div className="flex-1 bg-[#F8F8F8] rounded-2xl relative p-8 flex flex-col justify-end overflow-hidden min-h-[160px]">
            <h3 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight z-20">3000<span className="font-thin">+</span></h3>
            <p className="text-gray-400 text-xs md:text-sm mt-1 font-light z-20">happy clients</p>
            <LogoBlock className="right-8 top-4 scale-90 origin-top-right z-10" />
            <LogoBlock className="right-24 top-1/2 -translate-y-1/2 scale-75 opacity-70 origin-center z-10" />
            <LogoBlock className="right-4 bottom-4 scale-100 origin-bottom-right z-10" />
          </div>
          <div className="flex-1 rounded-2xl relative p-8 flex flex-col justify-end overflow-hidden min-h-[160px]">
            <div className="absolute inset-0 bg-gray-900/50 z-10 transition-colors hover:bg-gray-900/40 cursor-pointer"></div>
            <img 
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600" 
              alt="Active Projects" 
              className="absolute inset-0 w-full h-full object-cover z-0" 
            />
            <div className="relative z-20">
              <h3 className="text-4xl md:text-5xl font-light text-white tracking-tight">100<span className="font-thin">+</span></h3>
              <p className="text-white/80 text-xs md:text-sm mt-1 font-light">Active Projects</p>
            </div>
          </div>
          <div className="flex-1 bg-[#F8F8F8] rounded-2xl relative p-8 flex flex-col justify-end overflow-hidden min-h-[160px]">
            <h3 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight z-20">20<span className="font-thin">+</span></h3>
            <p className="text-gray-400 text-xs md:text-sm mt-1 font-light leading-snug z-20">Years<br/>Experience</p>
            <svg 
              className="absolute z-10" 
              style={{
                width: "230.25px",
                height: "230.25px",
                top: "-5px",
                right: "-50px",
                transform: "rotate(45deg) scale(0.90)"
              }}
              viewBox="0 0 100 100"
            >
              <circle 
                cx="50" 
                cy="50" 
                r="47" 
                fill="none" 
                stroke="url(#tealGradient)" 
                strokeWidth="7" 
              />
              <defs>
                <linearGradient id="tealGradient" x1="65%" y1="100%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#049E9F" />
                  <stop offset="100%" stopColor="#049E9F" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
