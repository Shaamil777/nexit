import Image from "next/image";
import React from "react";
export default function Insight() {
    return (
        <section className="w-full flex flex-col md:flex-row min-h-[600px]">
            <div className="w-full md:w-1/2 bg-gray-100 flex flex-col justify-center px-8 py-16 lg:px-16 xl:px-24">
                <div className="max-w-[90%] md:max-w-[85%] lg:max-w-[75%] ml-6 md:ml-12 lg:ml-16 text-gray-500 text-base sm:text-lg leading-relaxed space-y-4">
                    <p>
                        Aenean non accumsan ante. Duis nisl felis, condimentum id varius sit amet, placerat vitae neque. Maecenas scelerisque, massa in pulvinar feugiat, enim purus tincidunt tellus, at consectetur nisi nisl nec justo. Donec non ante ac nisl varius ullamcorper. Vivamus convallis massa quis fermentum lacinia.
                    </p>
                    <p>
                        Phasellus vulputate, nunc nec iaculis interdum, tortor nisl egestas lorem, vitae interdum ipsum justo vitae mi. Cras accumsan nisl a est imperdiet, ac hendrerit lacus posuere. Proin varius justo vitae massa dictum, sit amet iaculis orci pharetra. Nunc vitae varius urna.
                    </p>
                    <p>
                        Morbi blandit, urna a sollicitudin varius, odio enim justo, quis feugiat dui tellus ac nisl. Sed at accumsan mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut non elit sit amet nunc hendrerit lacinia.
                    </p>
                </div>
            </div>
            <div className="w-full md:w-1/2 bg-white relative flex z-10">
                <div className="grid grid-cols-5 grid-rows-4 w-full md:-translate-x-[20%] h-full min-h-[400px] md:min-h-0">
                    {Array.from({ length: 20 }).map((_, i) => {
                        if (i === 1 || i === 5 || i === 6) return null;
                        if (i === 13 || i === 17 || i === 18) return null;
                        if (i === 0) {
                            return (
                                <div 
                                    key={i} 
                                    className="col-span-2 row-span-2 relative w-full h-full overflow-hidden"
                                >
                                    <Image 
                                        src="/images/insight1.jpg" 
                                        alt="Insight 1" 
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            );
                        }
                        if (i === 12) {
                            return (
                                <div 
                                    key={i} 
                                    className="col-span-2 row-span-2 relative w-full h-full"
                                >
                                    <div className="absolute inset-0 overflow-hidden">
                                        <Image 
                                            src="/images/insight2.jpg" 
                                            alt="Insight 2" 
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-white z-10 border border-white"></div>
                                </div>
                            );
                        }
                        let bgClass = "bg-gray-100 hover:bg-gray-200";
                        if ([2, 4, 8, 14, 16, 19].includes(i)) {
                            bgClass = "bg-white";
                        } else if (i === 7 || i === 10) { // 7th and 10th grid items
                            bgClass = "bg-[#0CA7A5]";
                        }
                        return (
                            <div 
                                key={i} 
                                className={`${bgClass} transition-colors duration-300`}
                            ></div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
