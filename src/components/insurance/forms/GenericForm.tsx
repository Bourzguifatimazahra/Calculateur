import { FormInput, FormRadio } from "../FormField";
import type { ProductKey } from "@/lib/insurance-calc";

interface FieldDef {
  type: 'input' | 'radio';
  label: string;
  name: string;
  inputType?: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

const FORM_DEFS: Record<string, { icon: string; title: string; fields: FieldDef[] }> = {
  accident: {
    icon: '🏗️', title: 'Accidents du Travail',
    fields: [
      { type: 'input', label: 'Employés', name: 'employes', inputType: 'number', placeholder: '10' },
      { type: 'input', label: 'Salaire moyen (MAD)', name: 'salaireMoyen', inputType: 'number', placeholder: '5000' },
      { type: 'radio', label: 'Secteur', name: 'secteur', options: [{ value: 'services', label: 'Services' }, { value: 'btp', label: 'BTP' }] },
      { type: 'radio', label: 'Risque', name: 'risque', options: [{ value: 'moyen', label: 'Moyen' }, { value: 'eleve', label: 'Élevé' }] },
    ],
  },
  rc: {
    icon: '⚖️', title: 'Responsabilité Civile',
    fields: [
      { type: 'input', label: 'CA annuel (MAD)', name: 'ca', inputType: 'number', placeholder: '1000000' },
      { type: 'input', label: 'Employés', name: 'employes', inputType: 'number', placeholder: '10' },
      { type: 'radio', label: 'Risque', name: 'risque', options: [{ value: 'moyen', label: 'Moyen' }, { value: 'eleve', label: 'Élevé' }] },
      { type: 'radio', label: 'Couverture', name: 'couverture', options: [{ value: 'base', label: 'Base' }, { value: 'etendue', label: 'Étendue' }] },
    ],
  },
  transport: {
    icon: '🚢', title: 'Transport',
    fields: [
      { type: 'input', label: 'Valeur marchandise (MAD)', name: 'valeur', inputType: 'number', placeholder: '500000' },
      { type: 'radio', label: 'Mode', name: 'mode', options: [{ value: 'terrestre', label: 'Terrestre' }, { value: 'maritime', label: 'Maritime' }] },
      { type: 'radio', label: 'Type marchandise', name: 'typeMarch', options: [{ value: 'general', label: 'Général' }, { value: 'perissable', label: 'Périssable' }] },
      { type: 'radio', label: 'Fréquence', name: 'frequence', options: [{ value: 'occasionnel', label: 'Occasionnel' }, { value: 'regulier', label: 'Régulier' }] },
    ],
  },
  construction: {
    icon: '🏛️', title: 'Construction',
    fields: [
      { type: 'input', label: 'Valeur chantier (MAD)', name: 'valeurChantier', inputType: 'number', placeholder: '2000000' },
      { type: 'input', label: 'Durée (mois)', name: 'duree', inputType: 'number', placeholder: '12' },
      { type: 'radio', label: 'Risque technique', name: 'risqueTech', options: [{ value: 'standard', label: 'Standard' }, { value: 'eleve', label: 'Élevé' }] },
      { type: 'radio', label: 'Localisation', name: 'localisation', options: [{ value: 'urbain', label: 'Urbain' }, { value: 'inondable', label: 'Inondable' }] },
    ],
  },
  cyber: {
    icon: '🔐', title: 'Cyber Risques',
    fields: [
      { type: 'input', label: 'CA annuel (MAD)', name: 'ca', inputType: 'number', placeholder: '1000000' },
      { type: 'input', label: 'Employés', name: 'employes', inputType: 'number', placeholder: '20' },
      { type: 'radio', label: 'Sécurité IT', name: 'securite', options: [{ value: 'faible', label: 'Faible' }, { value: 'moyen', label: 'Moyen' }] },
      { type: 'radio', label: 'Incidents', name: 'incidents', options: [{ value: 'non', label: 'Aucun' }, { value: 'oui', label: 'Oui' }] },
    ],
  },
  flotte: {
    icon: '🚌', title: 'Flotte Automobile',
    fields: [
      { type: 'input', label: 'Nb véhicules', name: 'nbVehicules', inputType: 'number', placeholder: '5' },
      { type: 'input', label: 'Valeur totale (MAD)', name: 'valeurTotale', inputType: 'number', placeholder: '1000000' },
      { type: 'input', label: 'Accidents (3 ans)', name: 'accidents', inputType: 'number', placeholder: '0' },
      { type: 'radio', label: 'Type véhicules', name: 'typeVehicules', options: [{ value: 'vp', label: 'VP' }, { value: 'utilitaires', label: 'Utilitaires' }] },
    ],
  },
};

interface Props {
  product: ProductKey;
  data: Record<string, string>;
  onChange: (n: string, v: string) => void;
}

const GenericForm = ({ product, data, onChange }: Props) => {
  const def = FORM_DEFS[product];
  if (!def) return null;

  return (
    <div className="animate-fade-up">
      <div className="flex items-center gap-2.5 font-display text-xl text-navy font-bold mb-5 pb-2 border-b border-border">
        <span className="w-9 h-9 bg-secondary rounded-[10px] flex items-center justify-center text-lg">{def.icon}</span>
        {def.title}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        {def.fields.map((f) =>
          f.type === 'input' ? (
            <FormInput key={f.name} label={f.label} name={f.name} type={f.inputType} placeholder={f.placeholder} value={data[f.name] || ""} onChange={onChange} />
          ) : (
            <FormRadio key={f.name} label={f.label} name={f.name} options={f.options!} value={data[f.name] || f.options![0].value} onChange={onChange} />
          )
        )}
      </div>
    </div>
  );
};

export default GenericForm;
