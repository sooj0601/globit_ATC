import Switch from "../ui/Switch.tsx";

type TankBadgeProps = {
  top: string;
  left: string;
  label: string;
  deviceStatus: 'ON' | 'OFF';
  value?: string | number;
  unit?: string;
  aiMode?: boolean;
  onToggle?: (next: 'ON' | 'OFF') => void;
};

export function TankBadge({ top, left, label, deviceStatus, value, unit, aiMode = true, onToggle }: TankBadgeProps) {
  const isOn = deviceStatus === 'ON';
  return (
    <div
      className={`absolute ${top} ${left} flex flex-col items-center justify-center gap-1
                  size-32 px-6 text-center rounded-full bg-slate-950/80 text-white font-bold shadow
                  ring-1 ring-white/10 overflow-visible`}
    >
      {isOn ? (
        <svg
          className="absolute -inset-3 animate-[spin_2s_linear_infinite]"  // 바깥으로 0.25rem 확장 + 회전
          viewBox="0 0 110 110"
          aria-hidden
        >

          <circle
            cx="55" cy="55" r="48"
            fill="none"
            stroke="#10B981"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="240 50"
            transform="rotate(-90 55 55)"
          />
        </svg>
      ) : (
        <span className="pointer-events-none absolute -inset-1.5 rounded-full border-[6px] border-rose-500/40" />
      )}

      {/* 내용 */}
      <p className="font-medium text-slate-300 leading-tight break-keep">{label}</p>
      {value !== undefined && value !== null && (<p className="text-white font-bold">{value}<span className="text-sm">{unit}</span></p>)}
      {aiMode ? (
        <span className={`flex items-center rounded-full gap-1 py-1 px-3 text-sm font-bold ${isOn ? 'bg-green-500/40 text-green-500' : 'bg-rose-500/40 text-rose-500'}`}>{deviceStatus}</span>
      ) : (
        <Switch checked={isOn} onChange={(v) => onToggle?.(v ? 'ON' : 'OFF')} />
      )}
    </div>
  );
}
