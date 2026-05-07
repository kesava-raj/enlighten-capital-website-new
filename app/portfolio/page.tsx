"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border border-black/10 dark:border-white/10 p-6 rounded-xl bg-white/5 dark:bg-white/5 backdrop-blur-sm">
      <div className="text-[#C9A14A] text-3xl font-medium mb-2">{value}</div>
      <div className="text-xs text-gray-500 uppercase tracking-widest">{label}</div>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <div className="relative min-h-[80vh] flex flex-col pt-16 pb-32">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none transition-colors duration-700 -z-10 bg-gradient-to-br from-[#F5F3EF] via-white to-[#EAE7E1] dark:from-[#05070D] dark:via-[#080A12] dark:to-black" />

      <main className="px-6 md:px-10 max-w-6xl mx-auto w-full relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-serif mb-16 text-slate-900 dark:text-slate-100"
        >
          Portfolio & Capital Deployment
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          <Stat value="₹100 Cr" label="Target Corpus" />
          <Stat value="25–30" label="Companies" />
          <Stat value="20%" label="Max Sector Allocation" />
          <Stat value="30%" label="Reserved for Follow-on" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-xs text-[#C9A14A] tracking-[4px] uppercase mb-6 font-bold">Featured Investment</h2>
          <div className="p-10 md:p-16 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] bg-white/40 dark:bg-white/5 backdrop-blur-md mb-24 flex flex-col md:flex-row gap-12 items-center md:items-start">
            <div className="flex-1 order-2 md:order-1 text-center md:text-left">
              <h3 className="text-4xl md:text-5xl font-serif mb-4 text-slate-900 dark:text-slate-100">Deeptechgenie</h3>
              <div className="text-slate-500 dark:text-slate-400 text-lg mb-8 font-serif">Deep Tech & AI · Seed</div>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-light">
                First deployment under the fund.<br />
                Structured capital with active governance.
              </p>
            </div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 order-1 md:order-2 flex-shrink-0">
              <Image 
                src="/deeptechgenie.png" 
                alt="Deeptechgenie" 
                fill 
                className="object-contain dark:brightness-200 dark:contrast-125"
                priority
              />
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-light mb-6">Philosophy</h3>
            <p className="text-lg text-black dark:text-white mb-6">We construct portfolios, not collections.</p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Every investment is evaluated on:</p>
            <ul className="text-gray-600 dark:text-gray-400 leading-loose list-disc pl-5 font-light">
              <li>Asymmetric upside</li>
              <li>Capital efficiency</li>
              <li>Founder-market fit</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-light mb-6">Governance</h3>
            <p className="text-lg text-black dark:text-white mb-6">We stay involved.</p>
            <ul className="text-gray-600 dark:text-gray-400 leading-loose list-disc pl-5 mb-6 font-light">
              <li>Board participation</li>
              <li>Monthly reporting</li>
              <li>Quarterly reviews</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
              Capital is deployed with discipline.<br />
              Follow-ons are earned, not assumed.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
