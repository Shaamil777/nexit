"use client";
import React, { useState } from 'react';

const ServiceIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-24 h-24 mb-10 text-[#1f2937] group-hover:text-white transition-colors duration-500 relative z-10"
  >
    {/* Laptop outer screen */}
    <rect x="12" y="22" width="76" height="52" rx="4" className="stroke-current fill-[#f3f4f6] group-hover:fill-transparent transition-colors duration-500" strokeWidth="2.5" />
    
    {/* Laptop inner screen */}
    <rect x="18" y="28" width="64" height="40" rx="2" className="stroke-current fill-white group-hover:fill-transparent transition-colors duration-500" strokeWidth="2" />
    
    {/* Laptop base */}
    <path d="M6 78 h88 v2 a4 4 0 0 1 -4 4 H10 a4 4 0 0 1 -4 -4 v-2 z" className="stroke-current fill-[#f3f4f6] group-hover:fill-transparent transition-colors duration-500" strokeWidth="2.5" />
    <path d="M42 78 v2 h16 v-2" className="stroke-current" strokeWidth="2" />
    <path d="M10 74 L90 74" className="stroke-current" strokeWidth="2.5" />

    {/* Decorative code lines on the left side of the screen */}
    <path d="M22 44 h8" className="stroke-current" strokeWidth="2" strokeLinecap="round" />
    <path d="M22 50 h5" className="stroke-current" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="58" r="1.5" className="fill-current" />
    <path d="M28 58 h3" className="stroke-current" strokeWidth="2" strokeLinecap="round" />

    {/* Decorative code lines on the right side of the screen */}
    <path d="M78 44 h-8" className="stroke-current" strokeWidth="2" strokeLinecap="round" />
    <path d="M78 50 h-5" className="stroke-current" strokeWidth="2" strokeLinecap="round" />
    <circle cx="76" cy="58" r="1.5" className="fill-current" />
    <path d="M72 58 h-3" className="stroke-current" strokeWidth="2" strokeLinecap="round" />

    <g transform="translate(50, 48)">
      {/* 4 crossed rectangles for 8 teeth */}
      <rect x="-4.5" y="-22" width="9" height="44" rx="1.5" className="stroke-current fill-white group-hover:fill-transparent transition-colors duration-500" strokeWidth="2.5" />
      <rect x="-4.5" y="-22" width="9" height="44" rx="1.5" className="stroke-current fill-white group-hover:fill-transparent transition-colors duration-500" strokeWidth="2.5" transform="rotate(45)" />
      <rect x="-4.5" y="-22" width="9" height="44" rx="1.5" className="stroke-current fill-white group-hover:fill-transparent transition-colors duration-500" strokeWidth="2.5" transform="rotate(90)" />
      <rect x="-4.5" y="-22" width="9" height="44" rx="1.5" className="stroke-current fill-white group-hover:fill-transparent transition-colors duration-500" strokeWidth="2.5" transform="rotate(135)" />
      
      {/* Inner circle of gear to cut out the middle of the teeth */}
      <circle cx="0" cy="0" r="14" className="stroke-current fill-white group-hover:fill-transparent transition-colors duration-500" strokeWidth="2.5" />
      
      {/* Code inside */}
      <path d="M-4 -6 L-10 0 L-4 6" className="stroke-[#14b8a6] group-hover:stroke-white transition-colors duration-500" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 -6 L10 0 L4 6" className="stroke-[#14b8a6] group-hover:stroke-white transition-colors duration-500" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1 -9 L-1 9" className="stroke-[#14b8a6] group-hover:stroke-white transition-colors duration-500" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

const services = [
  { id: 1, title: "ERP Software development" },
  { id: 2, title: "Tax consultancy" },
  { id: 3, title: "Tax consultancy" },
  { id: 4, title: "Business consultancy" },
  { id: 5, title: "Accounting work" },
  { id: 6, title: "Tax consultancy" },
  { id: 7, title: "Business consultancy" },
  { id: 8, title: "Tax consultancy" },
];

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Decorative background ring */}
      <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-90 hidden lg:block -z-10">
        <svg viewBox="0 0 800 800" className="w-full h-full">
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M 400 50 A 350 350 0 0 1 400 750" stroke="url(#ringGrad)" strokeWidth="60" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        
        {/* Top Title Area */}
        <div className="mb-14">
          <h2 className="text-[3.25rem] sm:text-5xl lg:text-[4rem] font-[300] text-[#1f2937] leading-[1.05] mb-4 tracking-tight">
            We are the makers of <br />
            solutions
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl font-light">
            Nulla tristique efficitur nisi, at scelerisque nisl iaculis id. Quisque aliquet, sem at scelerisque
          </p>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`group relative bg-[#f4f5f7] rounded-md p-8 sm:p-10 flex-col justify-start min-h-[340px] border border-gray-100 overflow-hidden cursor-pointer z-0 ${!showAll && index >= 4 ? 'hidden sm:flex' : 'flex'}`}
            >
              {/* Dark grey background that fades in instantly on hover */}
              <div className="absolute inset-0 bg-[#4b4b4b] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20" />
              
              {/* Teal expanding circle moving up from the bottom */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[160%] aspect-square bg-[#00a896] rounded-full translate-y-0 group-hover:-translate-y-[90%] transition-transform duration-[600ms] ease-out -z-10" />

              <div className="flex-shrink-0 w-full flex justify-start">
                <ServiceIcon />
              </div>
              
              <h3 className="text-[1.5rem] text-[#1f2937] group-hover:text-white transition-colors duration-300 font-[300] leading-[1.15] mt-auto relative z-10">
                {service.title.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word}{' '}
                    {i === 0 && <br />}
                  </React.Fragment>
                ))}
              </h3>
            </div>
          ))}
        </div>

        {/* Show More Button (Mobile Only) */}
        {!showAll && (
          <div className="mt-8 flex justify-center sm:hidden">
            <button 
              onClick={() => setShowAll(true)}
              className="bg-[#00A99D] hover:bg-[#008f85] text-white px-8 py-3 rounded text-base font-medium transition-colors shadow-sm"
            >
              Show More
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
