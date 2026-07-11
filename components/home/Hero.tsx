"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Title moves up and fades out
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 1]);
  
  // Laptop scales down and moves up to center
  const laptopScale = useTransform(scrollYProgress, [0, 1], [2.5, 1.2]);
  const laptopY = useTransform(scrollYProgress, [0, 1], ["80%", "-50%"]);

  return (
    <section
      ref={containerRef}
      className="w-full h-[200vh] relative"
    >
      <div 
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 0% 0%, #049E9F 0%, transparent 35%), radial-gradient(circle at 100% 0%, #049E9F 0%, transparent 35%), linear-gradient(to bottom, #049E9F 0%, transparent 40%), white'
        }}
      >
        
        {/* Title & Button Container */}
        <motion.div 
          style={{ y: titleY, x: "-50%", opacity: titleOpacity }}
          className="max-w-3xl w-full text-center space-y-4 absolute top-[22%] left-1/2 z-20 px-4"
        >
          <h1 className="text-5xl font-thin tracking-tight text-gray-900 sm:text-6xl">
            An ultra effiecient<br />xxx for your Business
          </h1>
          <p className="text-lg leading-8 text-gray-600 font-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius.
          </p>
          <div className="mt-6 flex items-center justify-center">
            <button className="rounded-full bg-[#049E9F] px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-[#037d7e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#049E9F] transition-all">
              Discover More
            </button>
          </div>
        </motion.div>

        {/* Laptop Image Container */}
        <motion.div 
          style={{ 
            scale: laptopScale, 
            y: laptopY,
            x: "-50%" 
          }}
          className="absolute z-10 w-full max-w-5xl px-4 left-1/2 top-[60%] sm:top-1/2 mt-20 sm:mt-12 flex flex-col items-center"
        >
          <div className="w-[80%] sm:w-full flex flex-col items-center">
            <Image 
              src="/images/laptop.png" 
              alt="Laptop interface" 
              width={1200} 
              height={800} 
              className="w-full h-auto drop-shadow-2xl"
              priority
            />
          </div>
          <p className="mt-6 sm:mt-8 max-w-4xl text-center text-sm sm:text-3xl font-thin text-gray-400 opacity-90 leading-snug px-4 sm:px-0">
            <span className="text-gray-900 font-extralight">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Vivamus<br className="hidden sm:block" />
            luctus eros aliquet convallis ultricies. Mauris <span className="text-gray-900 font-extralight">augue</span> massa, ultricies<br className="hidden sm:block" />
            non ligula suspendisse
          </p>
        </motion.div>

      </div>
    </section>
  );
}
