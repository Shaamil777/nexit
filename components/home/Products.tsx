"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const productsData = [
  {
    id: "01",
    title: "E-Invoice generation",
    heading: "File your GSTR Automatically",
    description: " at scelerisque nisl iaculis id. Quisque aliquet, sem at scelerisque convallis, risus nisl tincidunt neque, vitae sodales purus erat sit amet eros. Mauris condimentum leo sit amet tellus eleifend tincidunt.",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula sus",
      "Nulla tristique efficitur nisi, at scelerisque nisl iaculis id. Quisque aliquet, sem at scelerisque convallis, risus nisl tincidunt neque, vitae sodales purus erat",
      "Sed efficitur, leo a facilisis finibus, odio nisl feugiat nunc, in pulvinar neque urna ut tellus. Aliquam vulputate dictum orci, vitae tincidunt nisl accumsan"
    ]
  },
  {
    id: "02",
    title: "E-Way Bill Generation",
    heading: "Generate E-Way Bills Easily",
    description: "Simplify your logistics and compliance with automated E-Way bill generation directly from your invoices. Ensure timely deliveries without hassle.",
    content: [
      "Generate E-Way bills in a single click without manually entering data into the government portal. Reduce manual errors and save valuable time.",
      "Track your E-Way bills and their validity in real-time, giving you full control over your logistics and compliance status.",
      "Automatically extend E-Way bills if needed before they expire, avoiding penalties and ensuring smooth transportation."
    ]
  },
  {
    id: "03",
    title: "GST Reports Upload",
    heading: "Upload GST Reports Seamlessly",
    description: "Manage your GST reports with our intuitive upload tool, ensuring all your data is accurate, compliant, and securely stored for future reference.",
    content: [
      "Upload large volumes of GST data securely and quickly with our bulk upload feature, designed to handle massive datasets effortlessly.",
      "Get instant validation checks on your uploaded data to catch errors before submission, preventing costly compliance mistakes.",
      "Keep a complete history of all your uploaded reports for future reference and audits, maintaining a perfect compliance record."
    ]
  },
  {
    id: "04",
    title: "GSTR Reconciliation",
    heading: "Automate GSTR Reconciliation",
    description: "Reconcile lorem korem your purchase data with GSTR-2A/2B effortlessly and claim maximum Input Tax Credit without manual matching and verification.",
    content: [
      "Automated matching of your purchase register with GSTR-2A and 2B, highlighting discrepancies instantly and saving hours of manual work.",
      "Identify missing invoices and communicate with vendors directly from the platform to ensure all your input tax credit is claimed.",
      "Maximize your ITC claims and reduce tax liabilities by ensuring 100% accuracy in your reconciliation process every month."
    ]
  }
];
export default function Products() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = productsData[activeIndex];
  return (
    <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <div className="min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="mb-10"
                >
                  <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4 leading-tight max-w-sm">
                    {activeProduct.heading}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                    {activeProduct.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mb-4">
              <span className="text-gray-800 text-lg font-medium">{activeProduct.id}</span>
            </div>
            <div className="flex flex-col space-y-4">
              {productsData.map((product, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={product.id}
                    onClick={() => setActiveIndex(index)}
                    className="flex items-center justify-between text-left group w-full focus:outline-none py-1"
                  >
                    <span
                      className={`text-2xl lg:text-[32px] font-bold transition-all duration-300 ${
                        isActive ? "text-[#009b90]" : "text-[#c2c2c2] hover:text-gray-400"
                      }`}
                    >
                      {product.title}
                    </span>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-4"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="32" 
                          height="32" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="#009b90" 
                          strokeWidth="1.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="w-full lg:w-7/12 flex items-center justify-center mt-12 lg:mt-40">
            <div className="bg-[#f4f4f4] rounded-md p-10 lg:p-14 w-full min-h-[420px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="w-full flex flex-col"
                >
                  {activeProduct.content.map((paragraph, idx) => (
                    <div 
                      key={idx} 
                      className={`text-gray-600 text-sm leading-relaxed ${
                        idx !== activeProduct.content.length - 1 ? 'border-b border-gray-200 pb-6 mb-6' : ''
                      }`}
                    >
                      {paragraph}
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
