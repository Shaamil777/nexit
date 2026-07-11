export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} My Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
