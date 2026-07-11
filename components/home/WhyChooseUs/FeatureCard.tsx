"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, MouseEvent } from "react";

export type Reason = {
  id: number;
  text: string;
  col: string;
  image: string;
};

const ArrowIcon = ({ isRight }: { isRight?: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`text-cyan-400 shrink-0 mt-0.5 transition-transform duration-300 relative z-10 ${
      isRight ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'
    }`}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default function FeatureCard({ reason, index }: { reason: Reason; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const isRight = reason.col === "right";

  // Use a spring for smoother cursor following
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="w-full"
    >
      <motion.div
        variants={{
          hidden: { x: isRight ? "100vw" : "-100vw" },
          visible: { 
            x: 0,
            transition: { type: "spring", stiffness: 50, damping: 14, delay: index * 0.15 }
          }
        }}
        whileHover={{ y: -4 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className={`group relative bg-[#111111]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-6 md:p-8 flex items-start gap-5 hover:border-white/10 hover:bg-[#151515] transition-colors duration-300 ${
          isRight ? "flex-row-reverse text-right" : "flex-row text-left"
        }`}
      >
        <ArrowIcon isRight={isRight} />
        <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light relative z-10 overflow-hidden">
          {reason.text}
        </p>

        {/* Cursor Following Polaroid */}
        <motion.div
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
            rotate: isHovered ? (isRight ? -6 : 6) : 0,
          }}
          transition={{ duration: 0.2 }}
          className="absolute top-0 left-0 w-32 md:w-40 bg-white p-2 pb-10 shadow-2xl pointer-events-none z-50 origin-center hidden sm:block"
        >
          <img 
            src={reason.image} 
            alt="Preview" 
            className="w-full h-24 md:h-32 object-cover bg-gray-100"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
