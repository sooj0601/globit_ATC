
interface ConditionChipProps {
  children: React.ReactNode;
}

export default function ConditionChip({ children }: ConditionChipProps) {
  return (
    <div className="relative flex items-center gap-2">
      {children}
      <div className="absolute w-full h-1 top-1/2 -translate-y-1/2 bg-slate-700 z-0"></div>
    </div>
  );
}
