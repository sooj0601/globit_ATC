interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
}

export default function Switch({ checked, onChange, id }: SwitchProps) {
  return (
    <label htmlFor={id} className="relative inline-block w-14 h-7 cursor-pointer">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <div
        className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-between px-1.5 w-full h-6 rounded-full transition-colors duration-300 ${
          checked ? "bg-indigo-500" : "bg-slate-400"
        }`}
      >
        <span
          className={`text-xs font-bold transition-opacity duration-300 ${
            checked ? "text-white opacity-100" : "opacity-0"
          }`}
        >
          ON
        </span>
        <span
          className={`text-xs font-bold transition-opacity duration-300 ${
            !checked ? "text-white opacity-100" : "opacity-0"
          }`}
        >
          OFF
        </span>
      </div>
      <div
        className={`absolute top-0 left-0 size-7 bg-white rounded-full border transition-transform duration-300 shadow-sm ${
          checked ? "translate-x-7 border-indigo-500" : "border-slate-400"
        }`}
      />
    </label>
  );
}
