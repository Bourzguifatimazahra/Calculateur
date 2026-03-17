interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (name: string, value: string) => void;
}

export const FormInput = ({ label, name, type = "text", placeholder, value, onChange }: InputProps) => (
  <div className="flex flex-col gap-1.5">
    <label className="field-label">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      className="field-input"
    />
  </div>
);

interface SelectProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (name: string, value: string) => void;
}

export const FormSelect = ({ label, name, options, value, onChange }: SelectProps) => (
  <div className="flex flex-col gap-1.5">
    <label className="field-label">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      className="field-input"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  </div>
);

interface RadioProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (name: string, value: string) => void;
}

export const FormRadio = ({ label, name, options, value, onChange }: RadioProps) => (
  <div className="flex flex-col gap-1.5">
    <label className="field-label">{label}</label>
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(name, o.value)}
          className={`radio-pill ${value === o.value ? "radio-pill-active" : ""}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  </div>
);
