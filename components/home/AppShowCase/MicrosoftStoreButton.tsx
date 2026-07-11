export default function MicrosoftStoreButton() {
  return (
    <button className="flex items-center justify-center bg-black text-white px-5 rounded-[8px] hover:bg-gray-900 transition-colors gap-3 h-[50px] min-w-[150px] overflow-hidden transform scale-90 sm:scale-100 origin-center">
      <svg viewBox="0 0 23 23" width="20" height="20" className="flex-shrink-0">
        <path fill="#f35325" d="M1 1h10v10H1z"/>
        <path fill="#81bc06" d="M12 1h10v10H12z"/>
        <path fill="#05a6f0" d="M1 12h10v10H1z"/>
        <path fill="#ffba08" d="M12 12h10v10H12z"/>
      </svg>
      <div className="flex flex-col text-left justify-center">
        <span className="text-[9px] leading-[1] text-gray-300 font-medium mb-[2px]">Get it from</span>
        <span className="text-[16px] font-semibold leading-[1] tracking-tight">Microsoft</span>
      </div>
    </button>
  );
}
