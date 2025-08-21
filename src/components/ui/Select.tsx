import React from 'react';
import { ChevronDown } from 'lucide-react';

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
  placeholder?: string;
  value?: string;
  options: SelectOption[];
  error?: string;
};

const Select: React.FC<SelectProps> = ({
                                         name,
                                         onChange,
                                         disabled = false,
                                         readOnly = false,
                                         className = '',
                                         placeholder = '선택하세요',
                                         value,
                                         options,
                                         error,
                                       }) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div className={`relative`}>
        <select
          name={name}
          onChange={readOnly ? undefined : onChange}
          disabled={disabled || readOnly}
          value={value}
          className={`w-full h-9 px-2 pr-6 border rounded-lg outline-none transition-all appearance-none
          ${
            disabled
              ? 'cursor-not-allowed text-slate-400 bg-slate-100'
              : readOnly
                ? 'bg-white/4 border-slate-600 font-bold'
                : 'bg-white/8 border-transparent hover:border-slate-700 focus:border-slate-700'
          }
          `}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Custom Chevron Icon */}
        <div className="pointer-events-none absolute right-1.5 top-[50%] translate-y-[-50%] text-slate-500">
          <ChevronDown size={18} />
        </div>
      </div>
      {error && <span className="text-sm text-rose-500">{error}</span>}
    </div>
  );
};

export default Select;
