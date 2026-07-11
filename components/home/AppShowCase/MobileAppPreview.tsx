import Image from 'next/image';
import GooglePlayButton from './GooglePlayButton';
import AppStoreButton from './AppStoreButton';
export default function MobileAppPreview() {
  return (
    <div className="w-full lg:w-1/2 bg-[#f4f4f4] rounded-[32px] flex flex-col justify-between relative group border border-gray-100 shadow-sm min-h-[400px] sm:min-h-[480px] lg:min-h-[620px] overflow-hidden lg:overflow-visible">
      <div className="flex flex-row items-start flex-grow relative">
        <div className="pl-8 lg:pl-10 pt-8 lg:pt-10 z-10 flex-shrink-0 max-w-[55%]">
          <h2 className="text-xl lg:text-2xl xl:text-3xl font-light text-gray-900 leading-[1.2]">
            Nulla tristique <br className="hidden sm:block" />
            efficitur nisi, at Nulla <br className="hidden sm:block" />
            tristique
          </h2>
        </div>
        <div className="absolute right-[40px] sm:right-[10px] lg:right-[-260px] -bottom-[1px] w-[70%] sm:w-[60%] lg:w-[55%] h-[85%] lg:h-[90%] z-50 scale-[1.3] sm:scale-[1.6] lg:scale-[2.7] origin-bottom-right">
          <Image
            src="/images/Phone_Preview.png"
            alt="Mobile App Preview"
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 768px) 45vw, 25vw"
          />
        </div>
      </div>
      <div className="w-full bg-white h-[80px] flex items-center justify-center gap-4 lg:gap-6 relative z-20 border-t border-gray-200 rounded-b-[32px]">
        <GooglePlayButton />
        <AppStoreButton />
      </div>
    </div>
  );
}
