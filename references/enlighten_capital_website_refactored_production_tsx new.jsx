"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function EnlightenSite() {
  const [page, setPage] = useState("home");
  const [dark, setDark] = useState(true);

  return (
    <div className={(dark ? "bg-[#05070D] text-white" : "bg-[#F5F3EF] text-[#111]") + " min-h-screen transition-all duration-500"}>
      <Navbar dark={dark} setDark={setDark} />
      {page === "home" && <Home setPage={setPage} dark={dark} />}
      {page === "founders" && <Founders />}
      {page === "vdr" && <VDRAccess />}
      <Footer />
    </div>
  );
}

// ===== NAVBAR (MINIMAL) =====
function Navbar({ dark, setDark }) {
  return (
    <div className="flex justify-between items-center px-10 py-6 backdrop-blur-xl border-b border-black/10 dark:border-white/10 sticky top-0 z-50">
      <img src="/enlighten-logo.png" className="h-8" />
      <button onClick={() => setDark(!dark)}>
        {dark ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </div>
  );
}

// ===== HOME (ELITE + CONCISE) =====
function Home({ setPage, dark }) {
  return (
    <section className="relative overflow-hidden">

      <div className={"absolute inset-0 " + (dark
        ? "bg-gradient-to-br from-[#0B0F1A] via-[#0D1325] to-black"
        : "bg-gradient-to-br from-[#F5F3EF] via-white to-[#EAE7E1]")} />

      <div className="relative px-10 py-48 max-w-5xl mx-auto text-center">

        <h1 className="text-5xl md:text-6xl font-light leading-tight tracking-tight">
          We invest when it’s inevitable.
        </h1>

        <p className="mt-6 text-gray-500 max-w-xl mx-auto">
          Not early. Not late. Exactly when execution starts compounding.
        </p>

        <div className="mt-10">
          <button
            onClick={() => setPage("founders")}
            className="bg-[#C9A14A] text-black px-8 py-4 rounded-md"
          >
            Apply for Funding
          </button>
        </div>

      </div>

      {/* STORY (SUBTLE FLOW) */}
      <section className="px-10 pb-32 max-w-3xl mx-auto space-y-16 text-center">

        <p className="text-xl font-light">
          Most startups don’t fail because of lack of capital.
        </p>

        <p className="text-xl font-light">
          They fail because capital arrives before clarity.
        </p>

        <p className="text-xl font-light">
          We wait for signal.
        </p>

      </section>

      {/* PROOF */}
      <section className="px-10 py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 text-center">
          <Metric value="600+" label="Investors" />
          <Metric value="50+" label="Partners" />
          <Metric value="150+" label="Operators" />
          <Metric value="3000+" label="Evaluated" />
        </div>
      </section>

      <Portfolio />

      {/* DOMINANCE */}
      <section className="px-10 py-32 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-light">
          Most companies shouldn’t raise.
        </h2>
        <p className="mt-4 text-gray-500">
          We work with the ones that should.
        </p>
      </section>

    </section>
  );
}

function Metric({ value, label }) {
  return (
    <div>
      <div className="text-3xl text-[#C9A14A]">{value}</div>
      <div className="text-xs text-gray-500 uppercase mt-2">{label}</div>
    </div>
  );
}

// ===== PORTFOLIO =====
function Portfolio() {
  return (
    <section className="px-10 py-24 max-w-5xl mx-auto">
      <h2 className="text-3xl font-light mb-10 text-center">Proof</h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img src="/deeptech-logo.png" className="rounded-xl mx-auto" />

        <div className="space-y-4">
          <h3 className="text-xl">Deeptech Genie</h3>

          <p className="text-gray-500 text-sm">
            Backed at the transition from validation to scale.
          </p>

          <p className="text-gray-500 text-sm">
            Deep tech compounds differently — slower early, exponential later.
          </p>

          <div className="text-xs text-gray-400">
            DeepTech / AI · Active
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== FOUNDERS =====
function Founders() {
  return (
    <section className="px-10 py-32 max-w-4xl mx-auto space-y-12">
      <h2 className="text-3xl font-light">For founders</h2>

      <p className="text-gray-500 max-w-xl">
        You don’t need more capital. You need leverage.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <Value title="Capital" desc="Timed for scale" />
        <Value title="Access" desc="Next round investors" />
        <Value title="Execution" desc="GTM and hiring" />
        <Value title="Structure" desc="Governance discipline" />
      </div>
    </section>
  );
}

function Value({ title, desc }) {
  return (
    <div>
      <div className="text-md">{title}</div>
      <div className="text-gray-500 text-sm">{desc}</div>
    </div>
  );
}

// ===== VDR =====
function VDRAccess() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className="px-10 py-32 text-center">
        <h2 className="text-2xl">Request Received</h2>
        <p className="mt-4 text-gray-500">We’ll review and revert.</p>
      </section>
    );
  }

  return (
    <section className="px-10 py-32 max-w-xl mx-auto">
      <h2 className="text-2xl mb-6">Request Access</h2>

      <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
        <input required placeholder="Full Name" className="w-full p-3 border border-black/20" />
        <input required placeholder="Email" className="w-full p-3 border border-black/20" />
        <input required placeholder="Investment Range" className="w-full p-3 border border-black/20" />

        <button className="bg-[#C9A14A] text-black px-6 py-3 w-full">Submit</button>
      </form>
    </section>
  );
}

// ===== FOOTER (ALL LINKS HERE) =====
function Footer() {
  return (
    <div className="border-t border-black/10 dark:border-white/10 px-10 py-12 text-xs text-center space-y-6">

      <div className="flex flex-wrap justify-center gap-4 text-gray-500">
        <a href="https://www.crunchbase.com/organization/enlighten-capital" target="_blank">Crunchbase</a>
        <a href="https://pitchbook.com/profiles/investor/549541-54" target="_blank">Pitchbook</a>
        <a href="https://tracxn.com/d/companies/enlightencapital" target="_blank">Tracxn</a>
        <a href="https://www.ynos.in/venture-capital/enlighten-capital-005853" target="_blank">Ynos</a>
        <a href="https://www.bwdisrupt.com/article/enlighten-angel-fund-rebrands-to-enlighten-capital-introduces-rs-200-crore-micro-vc-fund-543211" target="_blank">BW Disrupt</a>
        <a href="https://yourstory.com/tamil/enlighten-angel-fund-rebrands-to-enlighten-capital-raises-rs-100-cr-micro-vc-fund" target="_blank">YourStory</a>
      </div>

      <div className="opacity-50">© Enlighten Capital</div>
    </div>
  );
}
