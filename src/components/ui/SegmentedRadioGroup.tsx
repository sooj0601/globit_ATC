import { Check } from "lucide-react";

type Option = { label: string; value: string; disabled?: boolean };

type Props = {
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: Option[];
  className?: string;
};

function cx(...a: (string | false | null | undefined)[]) {
  return a.filter(Boolean).join(" ");
}

export default function SegmentedRadioGroup({
  name,
  value,
  onChange,
  options,
  className = "",
}: Props) {
  return (
    <div
      className={cx(
        "inline-flex rounded-lg overflow-hidden ",
        className
      )}
    >
      {options.map((o, i) => {
        const id = `${name}-${i}`;
        const checked = value === o.value;
        const isFirst = i === 0;
        const isLast = i === options.length - 1;

        return (
          <div key={id} className="relative flex-1 lg:flex-none">
            <input
              id={id}
              type="radio"
              name={name}
              value={o.value}
              checked={checked}
              onChange={() => onChange(o.value)}
              className="peer sr-only"
              disabled={o.disabled}
            />
            <label
              htmlFor={id}
              className={cx(
                "flex items-center justify-center lg:px-6 h-10 text-sm lg:text-base select-none cursor-pointer",
                "border-r border-r-slate-900",
                checked
                  ? "bg-indigo-500 text-white font-bold"
                  : "bg-slate-700 text-slate-500 hover:bg-slate-800",
                "peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-slate-500/50",
                o.disabled && "opacity-50 cursor-not-allowed",
                isFirst && "rounded-l-lg",
                isLast && "rounded-r-lg border-r-0"
              )}
            >
              {checked && <Check size={16} className="hidden lg:block mr-2" />}  {/* ✅ 선택된 경우 아이콘 표시 */}
              {o.label}
            </label>
          </div>
        );
      })}
    </div>
  );
}
