import { Download, Phone } from "lucide-react";

interface Props {
  price: number;
  onDownloadPDF: () => void;
}

const ResultZone = ({ price, onDownloadPDF }: Props) => (
  <div className="result-gradient rounded-[var(--r-outer)] p-8 flex items-center justify-between flex-wrap gap-5 text-primary-foreground mt-8">
    <div>
      <span className="text-blue-300/70 text-[0.7rem] font-bold tracking-[0.12em] uppercase mb-1.5 block">Prime annuelle</span>
      <div className="font-display text-5xl font-bold leading-none">
        {price.toLocaleString('fr-FR')}
        <span className="text-base text-blue-200 ml-1">MAD</span>
      </div>
    </div>
    <div className="flex gap-3">
      <button onClick={onDownloadPDF} className="btn-calc btn-outline-calc bg-white/10 border-white/20 text-primary-foreground">
        <Download size={18} />
        PDF
      </button>
      <a href="tel:+212522953900" className="btn-calc no-underline">
        <Phone size={18} />
        Demander un devis
      </a>
    </div>
  </div>
);

export default ResultZone;
