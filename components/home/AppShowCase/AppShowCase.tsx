import MobileAppPreview from './MobileAppPreview';
import DesktopAppPreview from './DesktopAppPreview';

export default function AppShowCase() {
  return (
    <section className="w-full bg-white py-8 md:py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-20">
        <MobileAppPreview />
        <DesktopAppPreview />
      </div>
    </section>
  );
}
