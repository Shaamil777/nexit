import Image from 'next/image';
import MicrosoftStoreButton from './MicrosoftStoreButton';
export default function DesktopAppPreview() {
  return (
    <div className="w-full lg:w-1/2 bg-[#009C95] rounded-[32px] flex flex-col justify-between relative group shadow-sm min-h-[400px] sm:min-h-[480px] lg:min-h-[620px] overflow-hidden lg:overflow-visible">
      <div className="px-8 lg:px-12 pt-8 lg:pt-10 z-10 w-full text-right">
        <h2 className="text-xl lg:text-2xl xl:text-3xl font-light text-white leading-[1.2] mb-2 italic">
          Nulla tristique <br className="hidden sm:block" />
          efficitur nisi, at Nulla <br className="hidden sm:block" />
          tristique
        </h2>
      </div>
      <div className="flex-grow relative w-full top-[15px] sm:top-[30px] lg:top-[50] min-h-[220px] z-50 scale-[1.15] sm:scale-[1.4] lg:scale-[1.8] origin-bottom">
        <Image
          src="/images/mac_preview.png"
          alt="Desktop App Preview"
          fill
          className="object-contain object-bottom px-6 lg:px-10"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="w-full bg-[#00958f] h-[80px] flex items-center justify-center gap-4 relative z-20 rounded-b-[32px]">
        <MicrosoftStoreButton />
      </div>
    </div>
  );
}
