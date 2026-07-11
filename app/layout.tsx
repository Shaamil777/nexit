import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";
import SmoothScrolling from "@/components/layout/SmoothScrolling";
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const viewport = {
  themeColor: "#049E9F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Nexit | Modern IT Solutions & Services",
  description: "Nexit is a leading technology company providing innovative IT solutions, digital transformation, and professional services to elevate your business.",
  keywords: ["Nexit", "IT Solutions", "Digital Transformation", "Software Development", "Tech Startup"],
  authors: [{ name: "Nexit" }],
  openGraph: {
    title: "Nexit | Modern IT Solutions & Services",
    description: "Nexit is a leading technology company providing innovative IT solutions, digital transformation, and professional services to elevate your business.",
    url: "https://nexit.com",
    siteName: "Nexit",
    images: [
      {
        url: "/icon.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="bg-white text-black min-h-full flex flex-col">
        <SmoothScrolling>
          <LoadingScreen />
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
