"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VDRAccessPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate network request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="relative min-h-[80vh] flex flex-col justify-center">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none transition-colors duration-700 -z-10 bg-gradient-to-br from-[#F5F3EF] via-white to-[#EAE7E1] dark:from-[#0B0F1A] dark:via-[#0D1325] dark:to-black" />

      <section className="px-6 md:px-10 py-24 max-w-xl mx-auto w-full relative z-10">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="text-center p-12 rounded-3xl bg-white/5 dark:bg-white/5 border border-black/5 dark:border-white/5 backdrop-blur-md"
            >
              <div className="w-16 h-16 bg-[#C9A14A]/20 text-[#C9A14A] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-light mb-4">Request Received</h2>
              <p className="text-gray-500 dark:text-gray-400">
                We have received your request for Virtual Data Room access. Our team will review and revert shortly.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl font-light mb-4">Request Access</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Enter your details to request access to the Enlighten Capital Virtual Data Room.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-3xl bg-white/5 dark:bg-white/5 border border-black/5 dark:border-white/5 backdrop-blur-md">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                  <input 
                    id="name"
                    required 
                    placeholder="Jane Doe" 
                    className="w-full p-4 rounded-xl bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#C9A14A]/50 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600" 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Work Email</label>
                  <input 
                    id="email"
                    type="email"
                    required 
                    placeholder="jane@company.com" 
                    className="w-full p-4 rounded-xl bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#C9A14A]/50 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600" 
                  />
                </div>

                <div>
                  <label htmlFor="range" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Investment Range</label>
                  <select 
                    id="range"
                    required 
                    className="w-full p-4 rounded-xl bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#C9A14A]/50 transition-all text-gray-900 dark:text-gray-100 appearance-none"
                  >
                    <option value="" disabled selected>Select an option</option>
                    <option value="$100k - $500k">$100k - $500k</option>
                    <option value="$500k - $1M">$500k - $1M</option>
                    <option value="$1M+">$1M+</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C9A14A] hover:bg-[#b08d41] text-black px-6 py-4 rounded-xl font-medium transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed mt-4 flex justify-center items-center"
                >
                  {loading ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : "Submit Request"}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
