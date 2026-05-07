"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="relative min-h-[80vh] flex flex-col justify-center items-center pt-16 pb-32">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none transition-colors duration-700 -z-10 bg-gradient-to-br from-[#F5F3EF] via-white to-[#EAE7E1] dark:from-[#05070D] dark:via-[#080A12] dark:to-black" />

      <main className="px-6 md:px-10 max-w-4xl mx-auto w-full relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-serif mb-12 text-slate-900 dark:text-slate-100 tracking-tight"
        >
          Get in touch
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed mb-16 font-serif italic"
        >
          <p className="mb-6">
            For founders, investors, and strategic partners.
          </p>
          <p className="not-italic font-sans text-lg md:text-xl font-light">
            All inbound requests are routed through our support system<br className="hidden sm:block" />
            to ensure structured evaluation and response.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="https://zfrmz.in/your-zoho-support-desk-url"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C9A14A] hover:bg-[#b08d41] text-black px-14 py-6 rounded-md font-bold text-sm tracking-[0.2em] uppercase transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[#C9A14A]/20"
          >
            Submit Enquiry
          </a>
        </motion.div>
      </main>
    </div>
  );
}
