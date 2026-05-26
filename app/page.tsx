"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

function Sector({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-10 rounded-2xl bg-white/5 dark:bg-white/5 border border-black/5 dark:border-white/5 backdrop-blur-sm flex flex-col justify-center text-center h-full hover:border-[#C9A14A]/30 transition-colors group"
    >
      <h3 className="text-xl md:text-2xl font-serif mb-3 group-hover:text-[#C9A14A] transition-colors">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function TractionLogo({ name, domain }: { name: string; domain: string }) {
  return (
    <a
      href={`https://${domain}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 hover:opacity-80 transition-opacity"
    >
      <Image
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
        alt={name}
        width={20}
        height={20}
        unoptimized
        className="object-contain"
      />
      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{name}</span>
    </a>
  );
}

export default function Home() {
  return (
    <section className="relative overflow-hidden w-full">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none transition-colors duration-700 -z-10 bg-gradient-to-br from-[#F5F3EF] via-white to-[#EAE7E1] dark:from-[#05070D] dark:via-[#080A12] dark:to-black" />

      {/* HERO */}
      <div className="relative px-6 md:px-10 py-32 md:py-48 max-w-6xl mx-auto z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[56px] md:text-[80px] lg:text-[110px] font-serif leading-[0.95] tracking-tight max-w-[1100px] text-slate-900 dark:text-slate-100"
        >
          We invest before the market understands the opportunity.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-12 max-w-2xl border-l-[3px] border-[#C9A14A] pl-8"
        >
          <strong className="text-slate-800 dark:text-slate-200 font-serif text-2xl md:text-3xl block mb-2">Seed to Series A</strong>
          <span className="text-base md:text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">Disciplined entry. Structured governance. Long-term ownership.</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-16 flex flex-wrap gap-6"
        >
          <a
            href="https://forms.zohopublic.in/enlightencapital06gm1/form/StartupFundingApplication/formperma/xdgG00m0sh5H7nLcAj0cvoZVTwj35TB4cYEU_GcO4rU"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C9A14A] hover:bg-[#b08d41] text-black px-12 py-5 rounded-md font-bold text-sm tracking-widest uppercase transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#C9A14A]/20"
          >
            Apply for Funding
          </a>
          <Link
            href="/portfolio"
            className="inline-block border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 px-12 py-5 rounded-md font-bold text-sm tracking-widest uppercase transition-all text-slate-900 dark:text-slate-100"
          >
            Explore Portfolio
          </Link>
        </motion.div>
      </div>

      {/* STORY */}
      <section className="px-6 md:px-10 pb-40 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-12 md:p-20 rounded-[2.5rem] bg-white/40 dark:bg-white/5 border border-slate-200 dark:border-slate-800 backdrop-blur-md grid md:grid-cols-2 gap-16"
        >
          <div>
            <h2 className="text-xs text-[#C9A14A] uppercase tracking-[4px] mb-8 font-bold">What we do</h2>
            <p className="text-4xl md:text-5xl font-serif leading-tight text-slate-900 dark:text-slate-100">
              We partner with founders at inflection points—where capital, clarity, and conviction matter most.
            </p>
          </div>
          <div className="flex flex-col justify-center border-l border-slate-200 dark:border-slate-800 pl-8 md:pl-16">
            <p className="text-2xl md:text-3xl text-slate-500 dark:text-slate-400 font-serif leading-relaxed mb-8">
              We don’t chase momentum.<br />
              <strong className="text-[#C9A14A] font-normal">We underwrite it.</strong>
            </p>
            <div className="h-[2px] w-20 bg-[#C9A14A] rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* INVESTMENT FOCUS */}
      <section className="px-6 md:px-10 py-32 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-serif mb-6 text-slate-900 dark:text-slate-100"
          >
            Investment Focus
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 dark:text-slate-400 text-xl font-light"
          >
            Concentrated conviction in high-impact technology.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Sector title="Deep Tech" desc="Hard engineering and breakthroughs that solve fundamental problems." />
          <Sector title="Fintech" desc="Next-gen financial infrastructure and democratized access to capital." />
          <Sector title="SaaS" desc="Enterprise-grade software solutions with scalable unit economics." />
          <Sector title="Emerging" desc="Identifying and enabling new markets through technological shifts." />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[2.5rem] bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-black border border-[#C9A14A]/20 text-center"
        >
          <p className="text-2xl text-slate-500 dark:text-slate-400 font-serif tracking-wide">
            <strong className="text-[#C9A14A] font-normal italic mr-2">India-first.</strong> Global ambition.
          </p>
        </motion.div>
      </section>

      {/* TRACTION */}
      <section className="px-6 md:px-10 py-32 max-w-6xl mx-auto text-center relative z-10 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-[5px] mb-16 font-bold">
          Market Recognition & Traction
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12">
          <TractionLogo name="YourStory" domain="yourstory.com" />
          <TractionLogo name="BW Disrupt" domain="bwdisrupt.com" />
          <TractionLogo name="PitchBook" domain="pitchbook.com" />
          <TractionLogo name="Crunchbase" domain="crunchbase.com" />
          <TractionLogo name="Tracxn" domain="tracxn.com" />
          <TractionLogo name="PEI" domain="privateequityinternational.com" />
        </div>
      </section>
    </section>
  );
}
