"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur ad piscing elit?",
    answer: "Nulla tristique efficitur nisi, at scelerisque nisl iaculis id. Quisque aliquet, sem at scelerisque convallis, risus nisl tincidunt neque, vitae sodal",
  },
  {
    question: "Vivamus luctus eros aliquet convallis ultricies?",
    answer: "Nulla tristique efficitur nisi, at scelerisque nisl iaculis id. Quisque aliquet, sem at scelerisque convallis, risus nisl tincidunt neque, vitae sodal",
  },
  {
    question: "scelerisque eros ut finibus velit?",
    answer: "Nulla tristique efficitur nisi, at scelerisque nisl iaculis id. Quisque aliquet, sem at scelerisque convallis, risus nisl tincidunt neque, vitae sodal",
  },
  {
    question: "Vivamus luctus eros aliquet convallis ultricies?",
    answer: "Nulla tristique efficitur nisi, at scelerisque nisl iaculis id. Quisque aliquet, sem at scelerisque convallis, risus nisl tincidunt neque, vitae sodal",
  },
  {
    question: "ulla tristique efficitur nisi, at scelerisque nisl iaculis id?",
    answer: "Nulla tristique efficitur nisi, at scelerisque nisl iaculis id. Quisque aliquet, sem at scelerisque convallis, risus nisl tincidunt neque, vitae sodal",
  },
  {
    question: "Vivamus luctus eros aliquet convallis ultricies?",
    answer: "Nulla tristique efficitur nisi, at scelerisque nisl iaculis id. Quisque aliquet, sem at scelerisque convallis, risus nisl tincidunt neque, vitae sodal",
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white relative overflow-hidden py-24 md:py-32 flex justify-center">
      {/* Curved Background Arc */}
      <div 
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[150vw] sm:w-[120vw] bg-[#0CA7A5] z-0 shadow-[0_20px_50px_rgba(12,167,165,0.15)]"
        style={{ borderRadius: '50% / 100px' }}
      >
        {/* Subtle background decorations */}
        <div className="absolute top-1/4 right-[20%] w-96 h-96 bg-white opacity-5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-[20%] w-96 h-96 bg-[#089593] opacity-20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full text-white flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10 px-4 md:px-8">
        
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Frequently asked <br /> <span className="font-medium">Questions</span>
            </h2>
            <p className="mt-8 text-white/90 text-sm md:text-base leading-relaxed max-w-md">
              Nulla tristique efficitur nisi, at scelerisque nisl iaculis id. Quisque aliquet, sem at scelerisque convallis, risus nisl tincidunt neque, vitae sodal
            </p>
          </div>
          
          <div className="mt-12 bg-white/10 backdrop-blur-md shadow-xl rounded-2xl p-8 lg:p-10 max-w-sm">
            <h3 className="text-3xl md:text-4xl font-light mb-8 leading-snug">Still Have a<br/> question ?</h3>
            <button className="bg-white text-[#0CA7A5] px-8 py-3.5 rounded-xl font-semibold shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] hover:bg-gray-50 transition-all duration-300 transform active:scale-95">
              Sent Email
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-[1.2] flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-white/10 ${
                  isOpen ? "bg-white/15 shadow-lg" : "bg-[#13B2B0] hover:bg-[#15bbba]"
                }`}
                onClick={() => toggleFaq(index)}
              >
                <div className="p-6 flex justify-between items-center group">
                  <h4 className={`text-sm md:text-base font-medium transition-colors ${isOpen ? "text-white" : "text-white/90 group-hover:text-white"}`}>
                    {faq.question}
                  </h4>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 transition-all duration-300 ${isOpen ? "bg-white/20" : "bg-white/10 group-hover:bg-white/20"}`}>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-white transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-white transition-transform duration-300" />
                    )}
                  </div>
                </div>
                
                {/* Answer container */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-64 opacity-100 pb-6 px-6" : "max-h-0 opacity-0 px-6"
                  }`}
                >
                  <div className="h-[1px] w-full bg-white/10 mb-5"></div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
