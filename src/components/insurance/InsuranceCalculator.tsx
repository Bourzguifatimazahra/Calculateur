import { useState, useCallback, useRef } from "react";
import ProductTabs from "./ProductTabs";
import AutoForm from "./forms/AutoForm";
import HabitationForm from "./forms/HabitationForm";
import SanteForm from "./forms/SanteForm";
import GenericForm from "./forms/GenericForm";
import ResultZone from "./ResultZone";
import { calculatePrime, PRODUCTS, type ProductKey } from "@/lib/insurance-calc";

const InsuranceCalculator = () => {
  const [activeProduct, setActiveProduct] = useState<ProductKey>("auto");
  const [formData, setFormData] = useState<Record<ProductKey, Record<string, string>>>({
    auto: { puissance: "6", usage: "1", formule: "1" },
    habitation: { type: "appart", securite: "standard" },
    sante: { niveau: "std", antecedents: "non" },
    accident: { secteur: "services", risque: "moyen" },
    rc: { risque: "moyen", couverture: "base" },
    transport: { mode: "terrestre", typeMarch: "general", frequence: "occasionnel" },
    construction: { risqueTech: "standard", localisation: "urbain" },
    cyber: { securite: "moyen", incidents: "non" },
    flotte: { typeVehicules: "vp" },
  });

  const captureRef = useRef<HTMLDivElement>(null);

  const handleChange = useCallback((name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [activeProduct]: { ...prev[activeProduct], [name]: value },
    }));
  }, [activeProduct]);

  const currentData = formData[activeProduct];
  const price = calculatePrime(activeProduct, currentData);

  const handleDownloadPDF = async () => {
    const html2pdf = (await import("html2pdf.js")).default;
    const productLabel = PRODUCTS.find((p) => p.key === activeProduct)?.label || activeProduct;

    const el = document.createElement("div");
    el.style.padding = "50px";
    el.style.fontFamily = "'DM Sans', sans-serif";
    el.innerHTML = `
      <h1 style="color:#002D62;font-family:'Cormorant Garamond',serif;font-size:2rem;">CPA Assurances – Simulation</h1>
      <hr style="border:1px solid #e0e9f8;margin:16px 0;">
      <p style="color:#64748B;">Date : ${new Date().toLocaleDateString("fr-FR")}</p>
      <h2 style="color:#002D62;margin:20px 0;">Assurance ${productLabel}</h2>
      <div style="margin:30px 0;font-size:24px;color:#002D62;">
        Estimation Finale : <strong>${price.toLocaleString("fr-FR")} MAD / an</strong>
      </div>
      <p style="color:#64748B;font-size:14px;">Ce document est une estimation à titre indicatif.</p>
      <p style="margin-top:20px;font-weight:600;color:#002D62;">Contactez-nous pour valider ce tarif : +212 5 22 95 39 00</p>
    `;
    document.body.appendChild(el);

    await html2pdf().set({
      margin: 1,
      filename: `CPA-Simulation-${productLabel}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    }).from(el).save();

    document.body.removeChild(el);
  };

  const renderForm = () => {
    switch (activeProduct) {
      case "auto":
        return <AutoForm data={currentData} onChange={handleChange} />;
      case "habitation":
        return <HabitationForm data={currentData} onChange={handleChange} />;
      case "sante":
        return <SanteForm data={currentData} onChange={handleChange} />;
      default:
        return <GenericForm product={activeProduct} data={currentData} onChange={handleChange} />;
    }
  };

  return (
    <div className="max-w-[1000px] mx-auto px-6 -mt-8 mb-16 relative z-10">
      <div className="card-elevated overflow-hidden" ref={captureRef}>
        <ProductTabs active={activeProduct} onChange={setActiveProduct} />
        <div className="p-8 md:p-10">
          {renderForm()}
          <ResultZone price={price} onDownloadPDF={handleDownloadPDF} />
        </div>
      </div>
    </div>
  );
};

export default InsuranceCalculator;
