import { Check } from 'lucide-react';

interface ConditionChipProps {
  text: string;
  active?: boolean; // 선택적, 기본값 false
}

export default function ConditionChip({ text, active = false }: ConditionChipProps) {
  return (
    <p
      className={`flex items-center gap-1 font-bold rounded-full text-sm py-1 z-10
        ${active ? 'bg-indigo-500 text-white pl-3 xl:pl-2 pr-3' : 'bg-slate-700 text-slate-500 px-3'}`}
    >
      {active && <Check size={14} className="xl:block hidden" />}
      {text}
    </p>
  );
}
