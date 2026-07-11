"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Industries() {
    return (
        <section className="w-full bg-white py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full px-4 md:px-8">

                {/* Top Section - Title and Paragraph */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mb-[-180px]">
                    {/* Left Side - Title */}
                    <h2 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight">
                        Industries We<br />Serve
                    </h2>

                    {/* Right Side - Content */}
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

            {/* Bottom Section - Image Row */}
            <div className="w-full max-w-[1500px] mx-auto">
                <div className="flex items-end gap-4 md:gap-6 w-max pl-4 md:pl-16 lg:pl-32">

                    {/* Agriculture (Added Extra Left) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="w-[140px] md:w-[180px] h-[250px] md:h-[240px] relative shrink-0 ml-[-220px] md:ml-[-300px] transition-transform duration-200 hover:-translate-y-3 cursor-pointer"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=600&auto=format&fit=crop"
                            alt="Agriculture"
                            fill
                            className="object-cover"
                        />
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="absolute bottom-0 left-0 bg-gradient-to-r from-[#049E9F] to-black text-white px-4 py-2 w-[85%] text-sm md:text-base font-medium"
                            style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0 100%)' }}
                        >
                            Agriculture
                        </motion.div>
                    </motion.div>

                    {/* Tile (Small partial left) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="w-[140px] md:w-[180px] h-[250px] md:h-[240px] relative shrink-0 transition-transform duration-200 hover:-translate-y-3 cursor-pointer"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?q=80&w=600&auto=format&fit=crop"
                            alt="Tile"
                            fill
                            className="object-cover"
                        />
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="absolute bottom-0 left-0 bg-gradient-to-r from-[#049E9F] to-black text-white px-4 py-2 w-[85%] text-sm md:text-base font-medium"
                            style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0 100%)' }}
                        >
                            Tile
                        </motion.div>
                    </motion.div>

                    {/* Iron and Steel */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="w-[140px] md:w-[180px] h-[250px] md:h-[240px] relative shrink-0 transition-transform duration-200 hover:-translate-y-3 cursor-pointer"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
                            alt="Iron and Steel"
                            fill
                            className="object-cover"
                        />
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="absolute bottom-0 left-0 bg-gradient-to-r from-[#049E9F] to-black text-white px-4 py-2 w-[85%] text-sm md:text-base font-medium"
                            style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 100%, 0 100%)' }}
                        >
                            Iron And Steel
                        </motion.div>
                    </motion.div>

                    {/* Sanitary */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="w-[260px] md:w-[320px] h-[360px] md:h-[440px] relative shrink-0 transition-transform duration-200 hover:-translate-y-3 cursor-pointer"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop"
                            alt="Sanitary"
                            fill
                            className="object-cover"
                        />
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="absolute bottom-0 left-0 bg-gradient-to-r from-[#049E9F] to-black text-white px-4 py-2 w-[85%] text-sm md:text-base font-medium"
                            style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0 100%)' }}
                        >
                            Sanitary
                        </motion.div>
                    </motion.div>

                    {/* Lifestyle */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="w-[140px] md:w-[180px] h-[200px] md:h-[240px] relative shrink-0 transition-transform duration-200 hover:-translate-y-3 cursor-pointer"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=600&auto=format&fit=crop"
                            alt="Lifestyle"
                            fill
                            className="object-cover"
                        />
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="absolute bottom-0 left-0 bg-gradient-to-r from-[#049E9F] to-black text-white px-4 py-2 w-[85%] text-sm md:text-base font-medium"
                            style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0 100%)' }}
                        >
                            Lifestyle
                        </motion.div>
                    </motion.div>

                    {/* Electrical */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="w-[140px] md:w-[180px] h-[200px] md:h-[240px] relative shrink-0 transition-transform duration-200 hover:-translate-y-3 cursor-pointer"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=600&auto=format&fit=crop"
                            alt="Electrical"
                            fill
                            className="object-cover"
                        />
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="absolute bottom-0 left-0 bg-gradient-to-r from-[#049E9F] to-black text-white px-4 py-2 w-[85%] text-sm md:text-base font-medium"
                            style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0 100%)' }}
                        >
                            Electrical
                        </motion.div>
                    </motion.div>

                    {/* Paint */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="w-[140px] md:w-[180px] h-[200px] md:h-[240px] relative shrink-0 transition-transform duration-200 hover:-translate-y-3 cursor-pointer"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1562259929-b7e181d8d007?q=80&w=600&auto=format&fit=crop"
                            alt="Paint Industry"
                            fill
                            className="object-cover"
                        />
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="absolute bottom-0 left-0 bg-gradient-to-r from-[#049E9F] to-black text-white px-4 py-2 w-[85%] text-sm md:text-base font-medium"
                            style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0 100%)' }}
                        >
                            Paint
                        </motion.div>
                    </motion.div>

                    {/* Partially visible extra element */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="w-[140px] md:w-[180px] h-[200px] md:h-[240px] relative shrink-0 transition-transform duration-200 hover:-translate-y-3 cursor-pointer"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop"
                            alt="Other"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Healthcare (Added Extra Right) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="w-[140px] md:w-[180px] h-[200px] md:h-[240px] relative shrink-0 transition-transform duration-200 hover:-translate-y-3 cursor-pointer"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1576091160399-112ba3d25c1d?q=80&w=600&auto=format&fit=crop"
                            alt="Healthcare"
                            fill
                            className="object-cover"
                        />
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="absolute bottom-0 left-0 bg-gradient-to-r from-[#049E9F] to-black text-white px-4 py-2 w-[85%] text-sm md:text-base font-medium"
                            style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0 100%)' }}
                        >
                            Healthcare
                        </motion.div>
                    </motion.div>

                </div>
            </div>

        </section>
    );
}

