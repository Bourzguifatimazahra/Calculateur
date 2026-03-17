const SiteFooter = () => (
  <footer className="bg-navy w-full px-8 py-7 flex flex-wrap justify-between items-center text-blue-200/70 rounded-t-[20px] mt-5">
    <span className="font-bold text-primary-foreground bg-white/10 px-3 py-1 rounded-full text-sm">CPA assurances</span>
    <div className="flex gap-4 text-xs">
      <a href="tel:+212522953900" className="text-blue-200/70 hover:text-primary-foreground transition-colors no-underline">📞 +212 5 22 95 39 00</a>
      <a href="mailto:info@cpa.ma" className="text-blue-200/70 hover:text-primary-foreground transition-colors no-underline">✉️ info@cpa.ma</a>
    </div>
    <p className="text-[0.7rem] text-right">© 2026 CPA – Mentions légales</p>
  </footer>
);

export default SiteFooter;
