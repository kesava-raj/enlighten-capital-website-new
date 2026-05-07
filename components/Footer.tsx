export function Footer() {
  return (
    <footer className="mt-auto border-t border-black/5 dark:border-white/5 px-6 md:px-10 py-12 text-sm text-center space-y-8 bg-white/30 dark:bg-black/30">
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-gray-500 dark:text-gray-400">
        <a href="https://www.crunchbase.com/organization/enlighten-capital" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">Crunchbase</a>
        <a href="https://pitchbook.com/profiles/investor/549541-54" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">Pitchbook</a>
        <a href="https://tracxn.com/d/companies/enlightencapital" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">Tracxn</a>
        <a href="https://www.ynos.in/venture-capital/enlighten-capital-005853" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">Ynos</a>
        <a href="https://www.bwdisrupt.com/article/enlighten-angel-fund-rebrands-to-enlighten-capital-introduces-rs-200-crore-micro-vc-fund-543211" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">BW Disrupt</a>
        <a href="https://yourstory.com/tamil/enlighten-angel-fund-rebrands-to-enlighten-capital-raises-rs-100-cr-micro-vc-fund" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">YourStory</a>
      </div>

      <div className="text-gray-400 dark:text-gray-600 text-xs font-light">
        © {new Date().getFullYear()} Enlighten Capital. All rights reserved.
      </div>
    </footer>
  );
}
