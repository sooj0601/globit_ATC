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
      className={`absolute ${top} ${left} flex flex-col items-center justify-center xl:gap-1
                  size-24 xl:size-32 xl:px-6 text-center rounded-full bg-slate-950/80 text-white font-bold ring-white/10 overflow-visible`}
    >
      {isOn ? (
        <svg
          className="pointer-events-none absolute inset-0 overflow-visible [transform-box:fill-box] [transform-origin:center]"
          viewBox="0 0 100 100"
          aria-hidden
        >
          <circle
            cx="50" cy="50" r="52"
            fill="none"
            stroke="#10B981"
            className="[stroke-width:3] [animation:dash-rotate_2s_linear_infinite]"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray="0.8 0.2"
            strokeDashoffset="0"
            transform="rotate(-90 50 50)"
          />
        </svg>
      ) : (
        <span
          className="pointer-events-none absolute -inset-1 xl:-inset-1.5 rounded-full border-[3px] xl:border-[6px] border-rose-500/40"
        />

      )}

      {/* 내용 */}
      <p className="font-medium text-slate-300 leading-tight break-keep max-w-22 text-sm xl:text-base">{label}</p>
      {value !== undefined && value !== null && (<p className="text-white font-bold">{value}<span className="text-sm">{unit}</span></p>)}
      {aiMode ? (
        <span className={`flex items-center rounded-full gap-1 py-0.5 xl:py-1 px-3 text-xs xl:text-sm font-bold ${isOn ? 'bg-green-500/40 text-green-500' : 'bg-rose-500/40 text-rose-500'}`}>{deviceStatus}</span>
      ) : (
        <Switch checked={isOn} onChange={(v) => onToggle?.(v ? 'ON' : 'OFF')} />
      )}
    </div>
  );
}
