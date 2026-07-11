import Hero from "@/components/home/Hero";
import Clients from "@/components/home/Clients";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Experience from "@/components/home/Experience";
import WhyChooseUs from "@/components/home/WhyChooseUs/WhyChooseUs";
import Industries from "@/components/home/Industries";
import Statistics from "@/components/home/Statistics";
import AppShowCase from "@/components/home/AppShowCase/AppShowCase";
import FAQ from "@/components/home/FAQ";
import Products from "@/components/home/Products";
import Insight from "@/components/home/Insight";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col w-full flex-1">
      <Hero />
      <Clients />
      <Statistics />
      <About />
      <Industries />
      <WhyChooseUs />
      <Experience />
      <Services />
      <Products />
      <FAQ />
      <AppShowCase />
      <Insight />
      <Testimonials />
    </div>
  );
}
