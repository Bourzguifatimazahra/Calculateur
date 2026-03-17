import { FormInput, FormRadio } from "../FormField";

interface Props { data: Record<string, string>; onChange: (n: string, v: string) => void; }

const SanteForm = ({ data, onChange }: Props) => (
  <div className="animate-fade-up">
    <div className="flex items-center gap-2.5 font-display text-xl text-navy font-bold mb-5 pb-2 border-b border-border">
      <span className="w-9 h-9 bg-secondary rounded-[10px] flex items-center justify-center text-lg">❤️</span>
      Santé
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
      <FormInput label="Âge" name="age" type="number" placeholder="35" value={data.age || ""} onChange={onChange} />
      <FormInput label="Bénéficiaires" name="beneficiaires" type="number" placeholder="1" value={data.beneficiaires || ""} onChange={onChange} />
      <FormRadio label="Niveau" name="niveau" value={data.niveau || "std"} onChange={onChange} options={[
        { value: "eco", label: "Éco" }, { value: "std", label: "Standard" },
      ]} />
      <FormRadio label="Antécédents" name="antecedents" value={data.antecedents || "non"} onChange={onChange} options={[
        { value: "non", label: "Non" }, { value: "oui", label: "Oui" },
      ]} />
    </div>
  </div>
);

export default SanteForm;
