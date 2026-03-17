import { FormInput, FormSelect, FormRadio } from "../FormField";

interface Props {
  data: Record<string, string>;
  onChange: (name: string, value: string) => void;
}

const AutoForm = ({ data, onChange }: Props) => (
  <div className="animate-fade-up">
    <div className="flex items-center gap-2.5 font-display text-xl text-navy font-bold mb-5 pb-2 border-b border-border">
      <span className="w-9 h-9 bg-secondary rounded-[10px] flex items-center justify-center text-lg">🚗</span>
      Automobile
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
      <FormInput label="Marque / Modèle" name="marque" placeholder="Ex: Dacia Logan" value={data.marque || ""} onChange={onChange} />
      <FormInput label="Valeur du véhicule (MAD)" name="valeur" type="number" placeholder="150000" value={data.valeur || ""} onChange={onChange} />
      <FormSelect label="Puissance (CV)" name="puissance" value={data.puissance || "6"} onChange={onChange} options={[
        { value: "6", label: "6 CV" }, { value: "7", label: "7 CV" }, { value: "8", label: "8 CV" }, { value: "11", label: "11 CV+" },
      ]} />
      <FormRadio label="Usage" name="usage" value={data.usage || "1"} onChange={onChange} options={[
        { value: "1", label: "Personnel" }, { value: "1.3", label: "Pro" }, { value: "1.5", label: "Taxi" },
      ]} />
      <FormSelect label="Couverture" name="formule" value={data.formule || "1"} onChange={onChange} options={[
        { value: "1", label: "RC simple" }, { value: "1.8", label: "Tiers intermédiaire" }, { value: "3.5", label: "Tous risques" },
      ]} />
      <FormInput label="Sinistres (3 ans)" name="sinistres" type="number" placeholder="0" value={data.sinistres || ""} onChange={onChange} />
    </div>
  </div>
);

export default AutoForm;
