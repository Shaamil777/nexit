"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function About() {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsOpen((prev) => !prev);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    const coverVariants1st3rd = {
        open: {
            scaleX: 0,
            transition: { duration: 1.0, ease: [0.65, 0, 0.35, 1] }
        },
        closed: {
            scaleX: 1,
            transition: { duration: 1.0, ease: [0.65, 0, 0.35, 1] }
        }
    };

    const coverVariants2nd = {
        open: {
            scaleX: 0,
            transition: { duration: 1.0, ease: [0.65, 0, 0.35, 1], delay: 1.1 }
        },
        closed: {
            scaleX: 1,
            transition: { duration: 1.0, ease: [0.65, 0, 0.35, 1] }
        }
    };

    return (
        <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto w-full">
                {/* Top Section: Text and Image Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Text Side */}
                    <div className="flex flex-col justify-center lg:col-span-4">
                        <h2 className="text-4xl sm:text-5xl font-light text-gray-800 mb-2">Our Story</h2>
                        <p className="text-lg sm:text-xl text-gray-500 mb-8 font-normal">All in One Web Solution for Your Business</p>

                        <div className="relative space-y-2 z-10 text-gray-500 text-sm w-full lg:w-[165%] leading-relaxed">
                            <p>
                                Aenean non accumsan ante. Duis nisl felis, condimentum id varius sit amet, placerat
                                vitae neque. Maecenas scelerisque, massa in pulvinar feugiat, enim purus tincidunt
                                tellus, at consectetur nisi nisl nec justo. Donec non ante ac nisl varius ullamcorper.
                                Vivamus convallis massa quis fermentum lacinia.
                            </p>
                            <p>
                                to vitae massa dictum, sit amet iaculis orci pharetra. Nunc vitae varius urna, posuere.
                                Proin varius justo vitae massa dictum, sit amet iaculis orci pharetra. Nunc vitae varius
                                urna.
                            </p>
                        </div>
                    </div>

                    {/* Right Image Grid Side */}
                    <div className="relative w-full aspect-[2/1] max-w-xl mx-auto lg:max-w-none lg:mx-0 lg:col-span-8 lg:-translate-y-20 lg:translate-x-6">
                        {/* Base Image */}
                        <div className="absolute inset-0 w-full h-full overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Our Story"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Animated Mask Blocks */}
                        {/* Row 1, Col 1 (1st) */}
                        <motion.div
                            className="absolute top-0 left-0 w-1/4 h-1/2 bg-white z-10 origin-left"
                            variants={coverVariants1st3rd}
                            initial="open"
                            animate={isOpen ? "open" : "closed"}
                        />
                        {/* Row 1, Col 2 (2nd) */}
                        <motion.div
                            className="absolute top-0 left-[25%] w-1/4 h-1/2 bg-white z-10 origin-right"
                            variants={coverVariants2nd}
                            initial="open"
                            animate={isOpen ? "open" : "closed"}
                        />
                        {/* Row 1, Col 3 (3rd) */}
                        <motion.div
                            className="absolute top-0 left-[50%] w-1/4 h-1/2 bg-white z-10 origin-left"
                            variants={coverVariants1st3rd}
                            initial="open"
                            animate={isOpen ? "open" : "closed"}
                        />

                        {/* Row 2, Col 2 (1st of Row 2) */}
                        <motion.div
                            className="absolute top-[50%] left-[25%] w-1/4 h-1/2 bg-white z-10 origin-left"
                            variants={coverVariants1st3rd}
                            initial="open"
                            animate={isOpen ? "open" : "closed"}
                        />
                        {/* Row 2, Col 3 (2nd of Row 2) */}
                        <motion.div
                            className="absolute top-[50%] left-[50%] w-1/4 h-1/2 bg-white z-10 origin-right"
                            variants={coverVariants2nd}
                            initial="open"
                            animate={isOpen ? "open" : "closed"}
                        />
                        {/* Row 2, Col 4 (3rd of Row 2) */}
                        <motion.div
                            className="absolute top-[50%] left-[75%] w-1/4 h-1/2 bg-white z-10 origin-left"
                            variants={coverVariants1st3rd}
                            initial="open"
                            animate={isOpen ? "open" : "closed"}
                        />

                        {/* Static Space Blocks (Empty Spaces) */}
                        <div className="absolute top-0 left-[75%] w-1/4 h-1/2 bg-white z-10"></div>
                        <div className="absolute top-[50%] left-0 w-1/4 h-1/2 bg-white z-10"></div>

                        {/* Grid Lines (To split the image into 4x2 grid) */}
                        <div className="absolute top-[50%] left-0 w-full h-2 -mt-1 bg-white z-20"></div>
                        <div className="absolute top-0 left-[25%] h-full w-2 -ml-1 bg-white z-20"></div>
                        <div className="absolute top-0 left-[50%] h-full w-2 -ml-1 bg-white z-20"></div>
                        <div className="absolute top-0 left-[75%] h-full w-2 -ml-1 bg-white z-20"></div>
                    </div>
                </div>

                {/* Bottom Section: Full-width Paragraph */}
                <div className="lg:-mt-12 text-gray-500 text-sm leading-relaxed">
                    <p>
                        Aenean non accumsan ante. Duis nisl felis, condimentum id varius sit amet, placerat vitae neque. Maecenas scelerisque, massa in pulvinar feugiat, enim purus tincidunt tellus, at consectetur nisi nisl nec justo. Donec non ante ac nisl varius ullamcorper. Vivamus convallis massa quis fermentum lacinia.
                        Phasellus vulputate, nunc nec iaculis interdum, tortor nisl egestas lorem, vitae interdum ipsum justo vitae mi. Cras accumsan nisl a est imperdiet, ac hendrerit lacus posuere. Proin varius justo vitae massa dictum, sit amet iaculis orci pharetra. Nunc vitae varius urna.
                    </p>
                </div>
            </div>
        </section>
    );
}
