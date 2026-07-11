"use client";
import { motion } from "framer-motion";
export default function Experience() {
  return (
    <section className="w-full bg-white pb-16 overflow-hidden">
      <div className="pt-12 md:pt-20 w-full relative">
        <div className="w-full bg-[#0FA0A0] relative z-10 pb-16 md:pb-32">
          <div className="absolute bottom-[99%] left-0 w-full overflow-hidden leading-[0]">
            <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-[80px] md:h-[160px] block">
              <path fill="#0FA0A0" d="M0,128L60,144C120,160,240,192,360,186.7C480,181,600,139,720,133.3C840,128,960,160,1080,170.7C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
          </div>
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-0 left-4 md:left-20 text-white/[0.05] font-black text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] tracking-tighter leading-none select-none -translate-y-1/4"
            >
              EXPERIENCE
            </motion.div>
            <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-white/[0.04] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
          </div>
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-48 md:pb-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-5/12"
            >
              <div className="relative w-full aspect-[3/4] max-w-md mx-auto lg:max-w-none shadow-2xl rounded-xl overflow-hidden group">
                <motion.div 
                  className="absolute inset-0 bg-teal-500/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"
                ></motion.div>
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                  alt="Office interior" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-7/12 text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-2xl md:text-3xl font-light mb-1">Celebrating</h3>
                <div className="text-4xl md:text-5xl lg:text-6xl mb-6 flex items-baseline gap-3 flex-wrap drop-shadow-md">
                  <span className="font-extrabold italic text-white tracking-tight text-5xl md:text-6xl lg:text-7xl">29Years</span>
                  <span className="font-light text-2xl md:text-3xl">of Excellence</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4 text-white/90 text-sm md:text-base leading-relaxed font-light backdrop-blur-sm bg-white/[0.02] p-6 rounded-2xl border border-white/10 shadow-xl"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula suspendisse et varius sem. Maecenas vel magna sodales, scelerisque eros ut, finibus velit.
                </p>
                <p>
                  Nulla tristique efficitur nisi, at scelerisque nisl iaculis id. Quisque aliquet, sem at scelerisque convallis, risus nisl tincidunt neque, vitae sodales purus erat sit amet eros. Mauris condimentum leo sit amet tellus eleifend tincidunt.
                </p>
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute top-[99%] left-0 w-full overflow-hidden leading-[0] rotate-180">
            <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
              <path fill="#0FA0A0" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
