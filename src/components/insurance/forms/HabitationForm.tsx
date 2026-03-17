import { FormInput, FormRadio } from "../FormField";

interface Props { data: Record<string, string>; onChange: (n: string, v: string) => void; }

const HabitationForm = ({ data, onChange }: Props) => (
  <div className="animate-fade-up">
    <div className="flex items-center gap-2.5 font-display text-xl text-navy font-bold mb-5 pb-2 border-b border-border">
      <span className="w-9 h-9 bg-secondary rounded-[10px] flex items-center justify-center text-lg">🏠</span>
      Multirisques Habitation
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
      <FormInput label="Surface (m²)" name="surface" type="number" placeholder="80" value={data.surface || ""} onChange={onChange} />
      <FormInput label="Valeur bien (MAD)" name="valeurBien" type="number" placeholder="500000" value={data.valeurBien || ""} onChange={onChange} />
      <FormInput label="Valeur contenu (MAD)" name="valeurContenu" type="number" placeholder="100000" value={data.valeurContenu || ""} onChange={onChange} />
      <FormRadio label="Type" name="type" value={data.type || "appart"} onChange={onChange} options={[
        { value: "appart", label: "Appart." }, { value: "villa", label: "Villa" },
      ]} />
      <FormRadio label="Sécurité" name="securite" value={data.securite || "standard"} onChange={onChange} options={[
        { value: "standard", label: "Standard" }, { value: "alarme", label: "Alarme" },
      ]} />
    </div>
  </div>
);

export default HabitationForm;
