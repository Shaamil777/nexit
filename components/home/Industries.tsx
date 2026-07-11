"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
const cardStyles = [
  { image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=600&auto=format&fit=crop", w: "w-[150px] md:w-[180px]", h: "h-[210px] md:h-[240px]", ml: "ml-0 md:ml-[-300px]", textClip: "polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0 100%)", delayText: 0.4, delayCard: 0, hideText: false },
  { image: "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?q=80&w=600&auto=format&fit=crop", w: "w-[150px] md:w-[180px]", h: "h-[210px] md:h-[240px]", ml: "", textClip: "polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0 100%)", delayText: 0.5, delayCard: 0.1, hideText: false },
  { image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop", w: "w-[150px] md:w-[180px]", h: "h-[210px] md:h-[240px]", ml: "", textClip: "polygon(0 0, calc(100% - 20px) 0, 100% 100%, 0 100%)", delayText: 0.6, delayCard: 0.2, hideText: false },
  { image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop", w: "w-[150px] md:w-[320px]", h: "h-[210px] md:h-[440px]", ml: "", textClip: "polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0 100%)", delayText: 0.7, delayCard: 0.3, hideText: false },
  { image: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=600&auto=format&fit=crop", w: "w-[150px] md:w-[180px]", h: "h-[210px] md:h-[240px]", ml: "", textClip: "polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0 100%)", delayText: 0.8, delayCard: 0.4, hideText: false },
  { image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=600&auto=format&fit=crop", w: "w-[150px] md:w-[180px]", h: "h-[210px] md:h-[240px]", ml: "", textClip: "polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0 100%)", delayText: 0.9, delayCard: 0.5, hideText: false },
  { image: "https://images.unsplash.com/photo-1562259929-b7e181d8d007?q=80&w=600&auto=format&fit=crop", w: "w-[150px] md:w-[180px]", h: "h-[210px] md:h-[240px]", ml: "", textClip: "polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0 100%)", delayText: 1.0, delayCard: 0.6, hideText: false },
  { image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop", w: "w-[150px] md:w-[180px]", h: "h-[210px] md:h-[240px]", ml: "", textClip: "", delayText: 0, delayCard: 0.7, hideText: true },
  { image: "https://images.unsplash.com/photo-1576091160399-112ba3d25c1d?q=80&w=600&auto=format&fit=crop", w: "w-[150px] md:w-[180px]", h: "h-[210px] md:h-[240px]", ml: "", textClip: "polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0 100%)", delayText: 1.2, delayCard: 0.8, hideText: false },
];
export default function Industries() {
    const [cards, setCards] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts?_limit=9').then(r => r.json())
        ])
        .then(([posts]) => {
            const combined = posts.map((post: any, i: number) => ({
                title: post.title,
                description: post.body,
                ...cardStyles[i], // This will automatically use the high-quality Unsplash image from cardStyles
            }));
            setCards(combined);
            setLoading(false);
        })
        .catch(err => {
            setError('Failed to fetch data');
            setLoading(false);
        });
    }, []);
    return (
        <section className="w-full bg-white pt-4 md:pt-20 pb-28 md:pb-40 overflow-hidden relative">
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0 pointer-events-none">
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-[80px] md:h-[160px] block">
                    <path fill="#0A0A0A" d="M0,128L60,144C120,160,240,192,360,186.7C480,181,600,139,720,133.3C840,128,960,160,1080,170.7C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
            </div>
            <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mb-8 md:mb-[-180px]">
                    <h2 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight">
                        Industries We<br />Serve
                    </h2>
                    <div className="flex flex-col gap-8">
                        <div className="text-gray-500 text-base md:text-lg font-light space-y-1">
                            <p>
                                At Invaccs Software Technologies Pvt Ltd, we understand that every industry has its own challenges, workflows, and goals.
                            </p>
                            <p>
                                That&apos;s why our ERP systems are designed and customized individually for each sector — delivering precise functionality, real-time analytics, and seamless integration with your operations.
                            </p>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00A99D] w-5 h-5 shrink-0 mt-0.5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                <span className="text-lg md:text-xl text-gray-600 font-light">Do you trust your stock numbers 100%?</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00A99D] w-5 h-5 shrink-0 mt-0.5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                <span className="text-lg md:text-xl text-gray-600 font-light">How much money is stuck in overdue credit?</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00A99D] w-5 h-5 shrink-0 mt-0.5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                <span className="text-lg md:text-xl text-gray-600 font-light">Do sales and accounts always match?</span>
                            </li>
                        </ul>
                        <div>
                            <button className="bg-[#00A99D] hover:bg-[#008f85] text-white px-6 py-2.5 rounded text-base font-medium transition-colors shadow-sm">
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[1500px] mx-auto relative z-10 pt-10 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none pb-6 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="flex items-end gap-4 md:gap-6 w-max px-4 md:px-0 md:pl-16 lg:pl-32">
                    {loading ? (
                        <div className="flex items-center justify-center w-full min-h-[240px] text-[#00A99D] font-medium animate-pulse">
                            Loading Industries...
                        </div>
                    ) : error ? (
                        <div className="flex items-center justify-center w-full min-h-[240px] text-red-500 font-medium">
                            {error}
                        </div>
                    ) : (
                        cards.map((card, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: card.delayCard, ease: "easeOut" }}
                                viewport={{ once: true, margin: "-50px" }}
                                className={`${card.w} ${card.h} relative shrink-0 ${card.ml} snap-center transition-transform duration-200 hover:-translate-y-3 cursor-pointer`}
                            >
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover"
                                />
                                {!card.hideText && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: card.delayText, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                        className="absolute bottom-0 left-0 bg-gradient-to-r from-[#049E9F] to-black text-white px-3 py-2 md:px-4 md:py-3 w-[90%] md:w-[85%] font-medium flex flex-col justify-end gap-0.5"
                                        style={{ clipPath: card.textClip }}
                                    >
                                        <span className="text-[11px] md:text-base font-bold truncate capitalize leading-tight">{card.title}</span>
                                        <span className="text-[9px] md:text-xs font-light text-white/80 line-clamp-2 capitalize leading-snug">{card.description}</span>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
