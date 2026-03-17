import { Phone, Mail } from "lucide-react";

const SiteHeader = () => (
  <header className="bg-navy sticky top-0 z-50 border-b border-white/[0.07]">
    <div className="max-w-[1200px] mx-auto flex items-center justify-between px-8 h-[70px]">
      <div className="bg-surface rounded-[10px] px-3.5 py-1.5 shadow-md">
        <span className="font-bold text-navy text-sm tracking-wide">CPA</span>
      </div>
      <div className="flex gap-2.5">
        <a href="tel:+212522953900" className="flex items-center gap-2 bg-white/[0.08] border border-white/[0.16] rounded-full px-4 py-1.5 text-primary-foreground text-xs font-medium hover:bg-white/20 transition-colors no-underline">
          <span className="w-7 h-7 rounded-full bg-azure flex items-center justify-center">
            <Phone size={14} />
          </span>
          +212 5 22 95 39 00
        </a>
        <a href="mailto:info@cpa.ma" className="hidden sm:flex items-center gap-2 bg-white/[0.08] border border-white/[0.16] rounded-full px-4 py-1.5 text-primary-foreground text-xs font-medium hover:bg-white/20 transition-colors no-underline">
          <span className="w-7 h-7 rounded-full bg-azure flex items-center justify-center">
            <Mail size={14} />
          </span>
          info@cpa.ma
        </a>
      </div>
    </div>
  </header>
);

export default SiteHeader;
