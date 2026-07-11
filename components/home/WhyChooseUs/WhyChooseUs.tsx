"use client";
import { motion } from "framer-motion";
import FeatureCard, { Reason } from "./FeatureCard";
const reasons: Reason[] = [
  {
    id: 1,
    text: "We are proud to say that a majority share of Kerala's top 10 trading business leaders of each industry that we serve has choose Invaccs and has been travelling with us for years.",
    col: "left",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80"
  },
  {
    id: 2,
    text: "Completely customizable industry specific ERP software tailor-made for your business needs.",
    col: "right",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80"
  },
  {
    id: 3,
    text: "We don't just provide software, we also do the accounts & auditing.",
    col: "left",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80"
  },
  {
    id: 4,
    text: "Over 95% retention rate due to our strong after-sales support.",
    col: "right",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80"
  },
  {
    id: 5,
    text: "Beginner-friendly UI/UX. Quick & Simple to learn no higher education or software course required to use the software efficiently.",
    col: "left",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80"
  },
  {
    id: 6,
    text: "Multiple personal training session for every employee in regional language.",
    col: "right",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80"
  },
  {
    id: 7,
    text: "No hidden costs, Transparency is the key for our long run.",
    col: "right",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80"
  },
];
export default function WhyChooseUs() {
  const leftReasons = reasons.filter((r) => r.col === "left");
  const rightReasons = reasons.filter((r) => r.col === "right");
  return (
    <section className="w-full bg-[#0A0A0A] pt-24 md:pt-32 pb-32 md:pb-48 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-10 right-4 md:right-10 text-white/[0.02] font-black text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] tracking-tighter leading-none select-none"
        >
          INVACCS
        </motion.div>
        <div className="absolute top-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-cyan-900/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] translate-y-1/3 translate-x-1/4"></div>
      </div>
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20 md:mb-28"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white">
            Why big players choose{" "}
            <span className="font-normal bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Invaccs ?
            </span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
          <div className="flex flex-col gap-6 md:gap-8 md:mt-16 lg:mt-24">
            {leftReasons.map((reason, index) => (
              <FeatureCard key={reason.id} reason={reason} index={index} />
            ))}
          </div>
          <div className="flex flex-col gap-6 md:gap-8">
            {rightReasons.map((reason, index) => (
              <FeatureCard key={reason.id} reason={reason} index={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-[80px] md:h-[160px] block">
          <path fill="#ffffff" d="M0,128L60,144C120,160,240,192,360,186.7C480,181,600,139,720,133.3C840,128,960,160,1080,170.7C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
