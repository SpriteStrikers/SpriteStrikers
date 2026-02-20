interface FormFieldProps {
  label: string; 
  placeholder: string; 
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export const FormField = ({ label, placeholder, type = 'text', value, onChange, required }: FormFieldProps) => (
  <div className="space-y-3">
    <label className="block font-pixel text-xs text-[#5d4037] uppercase font-bold">
      {label} {required && <span className="text-red-800">*</span>}
    </label>
    <input 
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full bg-[#dcc995] border-4 border-[#bca772] text-[#3e2723] p-5 font-sans focus:border-[#8b5e3c] outline-none transition-colors font-bold placeholder:text-[#8b5e3c]/50"
      placeholder={placeholder}
    />
  </div>
);