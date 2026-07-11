"use client";
import React, { useState } from 'react';
import { ServiceIcon } from '../icons';
import { services } from '@/data/services';
import { SectionHeader } from '@/components/ui/SectionHeader';

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  return (
    <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
        <SectionHeader 
          title={<>We are the makers of <br />solutions</>}
          description="Nulla tristique efficitur nisi, at scelerisque nisl iaculis id. Quisque aliquet, sem at scelerisque"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`group relative bg-[#f4f5f7] rounded-md p-8 sm:p-10 flex-col justify-start min-h-[340px] border border-gray-100 overflow-hidden cursor-pointer z-0 ${!showAll && index >= 4 ? 'hidden sm:flex' : 'flex'}`}
            >
              <div className="absolute inset-0 bg-[#4b4b4b] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20" />
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
