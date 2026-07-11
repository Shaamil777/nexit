"use client";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { useState, useEffect } from "react";
type Review = {
  name: string;
  body: string;
};
export default function Testimonials() {
    const [reviews, setReviews] = useState<Review[]>([
        {
            name: "EVERSHINE AGENCIES",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac pretium nisl. Mauris augue massa, ultricies non ligula suspendisse et varius Nulla tristique efficitur nisi, at scelerisque nisl iaculis id. Quisque aliquet, sem at scelerisque convallis, risus nisl tincidunt neque, vitae sodales purus erat sit amet eros. sem. Maecenas vel magna sodales, scelerisque eros ut."
        }
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments?_limit=5")
            .then((res) => res.json())
            .then((data) => {
                setReviews(
                    data.map((item: any) => ({
                        name: item.email.split('@')[0].toUpperCase() + " AGENCIES",
                        body: item.body,
                    }))
                );
            })
            .catch((err) => console.error("Error fetching testimonials:", err));
    }, []);
    const handleNext = () => {
        setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };
    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };
    const currentReview = reviews[currentIndex];
    return (
        <section className="w-full bg-white py-24 px-4 sm:px-8 lg:px-16 xl:px-24">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24">
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    <div className="bg-[#0CA7A5] rounded-[1.5rem] p-10 lg:p-14 text-white">
                        <h3 className="text-3xl lg:text-4xl font-light leading-snug mb-6">
                            We are committed to<br />delivering quality.
                        </h3>
                        <p className="text-teal-50/80 text-sm leading-relaxed mb-12 max-w-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                        <div className="flex flex-col gap-10">
                            <div className="flex items-center gap-6">
                                <div 
                                    className="text-5xl font-light text-transparent tracking-widest -rotate-90 origin-center leading-none" 
                                    style={{ WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}
                                >
                                    01
                                </div>
                                <div className="text-sm font-medium tracking-wide">
                                    IMPROVE CUSTOMER<br />SATISFACTION
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div 
                                    className="text-5xl font-light text-transparent tracking-widest -rotate-90 origin-center leading-none" 
                                    style={{ WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}
                                >
                                    02
                                </div>
                                <div className="text-sm font-medium tracking-wide">
                                    REDUCE TIME<br />AND COST
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9] rounded-[1.5rem] overflow-hidden group cursor-pointer">
                        <Image 
                            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                            alt="John Doe" 
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end">
                            <div className="text-white">
                                <h4 className="text-xl font-medium mb-1">John Doe</h4>
                                <p className="text-xs text-gray-300 tracking-wide uppercase">ceo evershine agency</p>
                            </div>
                            <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300">
                                <Play size={20} fill="currentColor" className="ml-1" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col pt-8 lg:pt-16">
                    <h2 className="text-5xl lg:text-[4rem] font-light text-gray-800 leading-[1.1] mb-12">
                        what our<br />customers<br />saying
                    </h2>
                    <div className="bg-[#f5f5f5] rounded-[1.5rem] p-8 lg:p-10 relative h-[380px] md:h-auto flex flex-col">
                        <div className="flex items-center gap-5 mb-6">
                            <div className="w-14 h-14 bg-black rounded-xl flex-shrink-0"></div>
                            <h4 className="text-gray-700 font-medium tracking-wide text-sm truncate">
                                {currentReview.name}
                            </h4>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-md line-clamp-6 capitalize">
                            "{currentReview.body}"
                        </p>
                        <div className="absolute bottom-8 right-8 flex gap-5 text-gray-300">
                            <button 
                                onClick={handlePrev}
                                className="hover:text-[#0CA7A5] transition-colors duration-300"
                            >
                                <ArrowLeft size={22} />
                            </button>
                            <button 
                                onClick={handleNext}
                                className="text-[#0CA7A5] hover:text-[#098d8b] transition-colors duration-300"
                            >
                                <ArrowRight size={22} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
