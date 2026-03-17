import { PRODUCTS, type ProductKey } from "@/lib/insurance-calc";

interface Props {
  active: ProductKey;
  onChange: (key: ProductKey) => void;
}

const ProductTabs = ({ active, onChange }: Props) => (
  <div className="flex overflow-x-auto bg-secondary border-b-2 border-border scrollbar-hide">
    {PRODUCTS.map((p) => (
      <button
        key={p.key}
        onClick={() => onChange(p.key)}
        className={`px-4 py-3 border-none text-xs font-medium cursor-pointer text-center whitespace-nowrap min-w-[70px] transition-colors ${
          active === p.key
            ? "bg-surface text-navy font-bold border-b-[2.5px] border-b-azure"
            : "bg-transparent text-muted-foreground hover:text-azure hover:bg-accent/50"
        }`}
      >
        <span className="block text-base mb-0.5">{p.icon}</span>
        {p.label}
      </button>
    ))}
  </div>
);

export default ProductTabs;
