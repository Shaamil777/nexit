export default function Clients() {
  return (
    <section className="w-full bg-white relative z-20 pb-12 overflow-hidden">
      <div className="w-full">
        <div className="relative w-full flex flex-col">
          
          {/* Logo Bar */}
          <div className="w-full h-24 bg-gradient-to-r from-gray-100/50 to-white flex items-center relative">
            
            {/* Skewed "Our clients" container */}
            <div className="absolute left-[-25%] top-0 h-full w-[50%] md:w-[48%] lg:w-[45%] bg-white z-10 shadow-[8px_0_15px_rgba(0,0,0,0.06)] -skew-x-[25deg] rounded-br-[2.5rem]">
              <div className="skew-x-[25deg] h-full w-full flex items-center justify-end pr-8 sm:pr-12 md:pr-16 lg:pr-20 xl:pr-24">
                <h2 className="text-4xl md:text-5xl font-thin text-[#049E9F] whitespace-nowrap">Our clients</h2>
              </div>
            </div>

            {/* Logos */}
            <div className="w-full h-full flex items-center pl-[48%] md:pl-[46%] lg:pl-[43%] z-0">
              <div className="flex w-max items-center animate-marquee hover:[animation-play-state:paused]">
                {/* First set of logos */}
                <div className="flex items-center gap-12 whitespace-nowrap pr-12">
                  {[...Array(8)].map((_, i) => (
                    <div key={`first-${i}`} className="flex items-center gap-2 text-gray-800 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z" />
                        <path d="M4 12C4 16.4183 7.58172 20 12 20V4C7.58172 4 4 7.58172 4 12Z" />
                      </svg>
                      <span className="font-bold text-lg tracking-tight">logo<span className="font-light">ipsum</span></span>
                    </div>
                  ))}
                </div>
                {/* Second set for seamless looping */}
                <div className="flex items-center gap-12 whitespace-nowrap pr-12" aria-hidden="true">
                  {[...Array(8)].map((_, i) => (
                    <div key={`second-${i}`} className="flex items-center gap-2 text-gray-800 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z" />
                        <path d="M4 12C4 16.4183 7.58172 20 12 20V4C7.58172 4 4 7.58172 4 12Z" />
                      </svg>
                      <span className="font-bold text-lg tracking-tight">logo<span className="font-light">ipsum</span></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </div>

          {/* Dotted line and paragraph */}
          <div className="mt-8 relative">
            
            <div className="pt-">
              <p className="text-center text-[13px] font-light text-gray-400/80 max-w-5xl mx-auto leading-relaxed px-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing equa. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
