"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

function PartnerCard({ 
  type, 
  title, 
  desc, 
  logoPath,
  logoText,
  keepOriginalColors,
  websiteUrl,
  delay 
}: { 
  type: string; 
  title: string; 
  desc: string; 
  logoPath?: string;
  logoText?: string;
  keepOriginalColors?: boolean;
  websiteUrl?: string;
  delay: number;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="p-10 md:p-14 rounded-[2.5rem] bg-white/40 dark:bg-white/5 border border-slate-200 dark:border-slate-800 backdrop-blur-md flex flex-col justify-between hover:border-[#C9A14A]/40 transition-all group"
    >
      <div>
        <div className="flex justify-between items-start mb-10">
          <h2 className="text-xs text-[#C9A14A] uppercase tracking-[3px] font-bold">{type}</h2>
        </div>
        
        {logoPath ? (
          <div className="flex items-center gap-5 mb-8">
            <div className={`h-20 relative transition-opacity ${logoText ? 'w-20' : 'w-56'}`}>
              <Image 
                src={logoPath} 
                alt={title} 
                fill 
                className={`object-contain object-left ${keepOriginalColors ? '' : 'dark:brightness-200 dark:contrast-125'}`} 
              />
            </div>
            {logoText && (
              <span className="text-3xl font-poppins font-semibold text-slate-800 dark:text-slate-200 tracking-tight">
                {logoText}
              </span>
            )}
          </div>
        ) : (
          <h3 className="text-4xl font-serif mb-8 text-slate-900 dark:text-slate-100">{title}</h3>
        )}
        
        <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed font-light">{desc}</p>
      </div>

      {websiteUrl && (
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60">
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-slate-800 dark:text-slate-200 hover:text-[#C9A14A] dark:hover:text-[#C9A14A] transition-colors group/btn"
          >
            Visit Website
            <ArrowUpRight className="w-4.5 h-4.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </div>
      )}
    </motion.div>
  );
}

export default function PartnersPage() {
  return (
    <div className="relative min-h-[80vh] flex flex-col pt-16 pb-32">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none transition-colors duration-700 -z-10 bg-gradient-to-br from-[#F5F3EF] via-white to-[#EAE7E1] dark:from-[#05070D] dark:via-[#080A12] dark:to-black" />

      <main className="px-6 md:px-10 max-w-6xl mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="inline-block px-5 py-2.5 rounded-md bg-slate-900 dark:bg-white text-white dark:text-black text-[10px] font-bold tracking-[2px] uppercase mb-8 shadow-xl">
            Ecosystem
          </div>
          <h1 className="text-5xl md:text-7xl font-serif mb-10 text-slate-900 dark:text-slate-100 tracking-tight leading-[1.1]">
            Institutional Partnerships
          </h1>
          <p className="text-2xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl font-serif italic">
            We collaborate with category-leading institutions to strengthen sourcing, execution, and long-term governance for our portfolio companies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 mb-32">
          <PartnerCard 
            type="Strategic Partner"
            title="Startup Singam"
            desc="Strategic collaboration for high-potential early-stage opportunities."
            logoPath="/partners/startup-singam.png"
            websiteUrl="https://www.startupsingam.com/"
            delay={0.1}
          />
          <PartnerCard 
            type="Investment Partner"
            title="Enlighten Angel Fund"
            desc="Direct co-investment channel for angel-backed category leaders."
            delay={0.2}
          />
          <PartnerCard 
            type="Legal Partner"
            title="India Juris"
            desc="Structuring, compliance, and comprehensive legal counsel for our fund and portfolio."
            logoPath="/partners/india-juris.png"
            websiteUrl="https://indiajuris.com/"
            delay={0.3}
          />
          <PartnerCard 
            type="Ecosystem Partner"
            title="MyProBuddy"
            desc="Operational acceleration and professional support network for portfolio companies."
            logoPath="/partners/myprobuddy.png"
            logoText="MyProBuddy"
            keepOriginalColors={true}
            websiteUrl="https://myprobuddy.com/"
            delay={0.4}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-16 md:p-24 rounded-[3rem] text-center bg-gradient-to-br from-white/40 to-slate-50/20 dark:from-white/5 dark:to-transparent border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-slate-900 dark:text-slate-100">Partner with us</h2>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-2xl mx-auto mb-12 font-light">
            Interested in exploring an institutional partnership? Let's discuss how we can build the future together.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C9A14A] text-black px-12 py-5 rounded-md font-bold text-sm tracking-widest uppercase transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#C9A14A]/20"
          >
            Get in Touch
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
