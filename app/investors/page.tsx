"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function InvestorsPage() {
  return (
    <div className="relative min-h-[80vh] flex flex-col pt-16 pb-32">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none transition-colors duration-700 -z-10 bg-gradient-to-br from-[#F5F3EF] via-white to-[#EAE7E1] dark:from-[#05070D] dark:via-[#080A12] dark:to-black" />

      <main className="px-6 md:px-10 max-w-5xl mx-auto w-full relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-serif mb-12 text-slate-900 dark:text-slate-100 leading-[1.1]"
        >
          Access disciplined early-stage exposure
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed mb-20 max-w-3xl font-serif"
        >
          <p className="mb-6 italic">
            We are not a platform. We are not a syndicate.
          </p>
          <p className="text-slate-900 dark:text-slate-100 not-italic">
            We deploy capital with structure, governance, and accountability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-10 md:p-12 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] bg-white/40 dark:bg-white/5 backdrop-blur-sm hover:border-[#C9A14A]/40 transition-colors group"
          >
            <h2 className="text-2xl text-[#C9A14A] font-serif mb-8 group-hover:translate-x-2 transition-transform">What investors get</h2>
            <ul className="text-slate-600 dark:text-slate-400 space-y-5 list-disc pl-5 font-light text-lg">
              <li>Curated deal flow</li>
              <li>Structured capital deployment</li>
              <li>Institutional-grade governance</li>
              <li>Transparent reporting</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-10 md:p-12 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] bg-white/40 dark:bg-white/5 backdrop-blur-sm hover:border-[#C9A14A]/40 transition-colors group"
          >
            <h2 className="text-2xl text-[#C9A14A] font-serif mb-8 group-hover:translate-x-2 transition-transform">Additional Access</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 font-light text-lg">Qualified investors can request:</p>
            <ul className="text-slate-600 dark:text-slate-400 space-y-5 list-disc pl-5 font-light text-lg">
              <li>Returns Simulator</li>
              <li>
                <Link href="/vdr" className="hover:text-[#C9A14A] transition-colors underline underline-offset-8">
                  Virtual Data Room (VDR)
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center py-24 border-t border-slate-200 dark:border-slate-800"
        >
          <h2 className="text-4xl font-serif mb-10 text-slate-900 dark:text-slate-100">Explore investment opportunities</h2>
          <a
            href="https://zfrmz.in/your-zoho-investor-form-url"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C9A14A] hover:bg-[#b08d41] text-black px-12 py-5 rounded-md font-bold text-sm tracking-widest uppercase transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#C9A14A]/20"
          >
            Request Access
          </a>
        </motion.div>
      </main>
    </div>
  );
}
