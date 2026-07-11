import { LogoIpsumIcon } from "../icons";

export default function Clients() {
  return (
    <section className="w-full bg-white relative z-20 pb-12 overflow-hidden">
      <div className="w-full">
        <div className="relative w-full flex flex-col">
          <div className="w-full h-auto md:h-24 bg-gradient-to-r from-gray-100/50 to-white flex flex-col md:flex-row items-center relative pb-6 md:pb-0">
            <div className="relative md:absolute md:left-[-25%] top-0 h-auto md:h-full w-full md:w-[48%] lg:w-[45%] bg-white z-10 shadow-sm md:shadow-[8px_0_15px_rgba(0,0,0,0.06)] skew-x-0 md:-skew-x-[25deg] rounded-none md:rounded-br-[2.5rem] py-6 md:py-0 mb-4 md:mb-0">
              <div className="skew-x-0 md:skew-x-[25deg] h-full w-full flex items-center justify-center md:justify-end pr-0 md:pr-16 lg:pr-20 xl:pr-24">
                <h2 className="text-3xl md:text-5xl font-thin text-[#049E9F] whitespace-nowrap">Our clients</h2>
              </div>
            </div>
            <div className="w-full h-12 md:h-full flex items-center pl-0 md:pl-[48%] lg:pl-[43%] z-0 overflow-hidden">
              <div className="flex w-max items-center animate-marquee hover:[animation-play-state:paused]">
                <div className="flex items-center gap-12 whitespace-nowrap pr-12">
                  {[...Array(8)].map((_, i) => (
                    <div key={`first-${i}`} className="flex items-center gap-2 text-gray-800 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                      <LogoIpsumIcon />
                      <span className="font-bold text-lg tracking-tight">logo<span className="font-light">ipsum</span></span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-12 whitespace-nowrap pr-12" aria-hidden="true">
                  {[...Array(8)].map((_, i) => (
                    <div key={`second-${i}`} className="flex items-center gap-2 text-gray-800 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                      <LogoIpsumIcon />
                      <span className="font-bold text-lg tracking-tight">logo<span className="font-light">ipsum</span></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
