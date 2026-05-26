"use client";

import { motion } from "framer-motion";

function ExpectationCard({ title, items, delay }: { title: string; items: string[], delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="p-10 border border-slate-200 dark:border-slate-800 rounded-[2rem] bg-white/40 dark:bg-white/5 backdrop-blur-sm hover:border-[#C9A14A]/40 transition-all group h-full"
    >
      <h2 className="text-3xl font-serif mb-8 text-[#C9A14A] group-hover:translate-x-2 transition-transform">{title}</h2>
      <ul className="text-slate-600 dark:text-slate-400 space-y-5 list-disc pl-5 font-light text-lg">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function FoundersPage() {
  return (
    <div className="relative min-h-[80vh] flex flex-col pt-16 pb-32">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none transition-colors duration-700 -z-10 bg-gradient-to-br from-[#F5F3EF] via-white to-[#EAE7E1] dark:from-[#05070D] dark:via-[#080A12] dark:to-black" />

      <main className="px-6 md:px-10 max-w-6xl mx-auto w-full relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-serif mb-24 max-w-4xl text-slate-900 dark:text-slate-100 leading-[0.95] tracking-tight"
        >
          We partner with builders, not just businesses.
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          <ExpectationCard
            title="We invest in:"
            items={["Post-revenue companies", "₹20–80 Cr valuation range", "Clear path to scale"]}
            delay={0.1}
          />
          <ExpectationCard
            title="What we expect:"
            items={["Clarity of thought", "Capital discipline", "Openness to governance"]}
            delay={0.2}
          />
          <ExpectationCard
            title="What you get:"
            items={["Strategic capital", "Structured support", "Long-term partnership"]}
            delay={0.3}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center py-24 border-t border-slate-200 dark:border-slate-800"
        >
          <h2 className="text-4xl font-serif mb-10 text-slate-900 dark:text-slate-100">Ready to build together?</h2>
          <a
            href="https://forms.zohopublic.in/enlightencapital06gm1/form/StartupFundingApplication/formperma/xdgG00m0sh5H7nLcAj0cvoZVTwj35TB4cYEU_GcO4rU"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C9A14A] hover:bg-[#b08d41] text-black px-12 py-5 rounded-md font-bold text-sm tracking-widest uppercase transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#C9A14A]/20"
          >
            Apply for Funding
          </a>
        </motion.div>
      </main>
    </div>
  );
}
