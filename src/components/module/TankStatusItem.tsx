import Switch from "../ui/Switch.tsx";

interface TankStatusItemProps {
  title: string;
  icon?: React.ReactNode;
  value?: string | number;
  unit?: string;
  valueColor?: 'red' | 'green';
  variant?: 'row' | 'column';
  onToggle?: (next: 'ON' | 'OFF') => void;
  deviceStatus?: 'ON' | 'OFF';
  aiMode?: boolean;
}

export default function TankStatusItem({ title, icon, value, unit, valueColor='green', variant='column', deviceStatus, onToggle, aiMode =true }: TankStatusItemProps) {
  const isOn = deviceStatus === 'ON';
  return (
    <div className={`flex ${variant === 'column' ? 'flex-col' : 'justify-between'} gap-2 bg-slate-800 rounded-2xl p-3 xl:p-4`}>
      <div className="flex items-center justify-between">
        <strong>{title}</strong>
        {variant === 'column' && icon}
      </div>
      {variant === 'column' ? (
        <div className={`flex items-center justify-center w-full rounded-lg ${valueColor === 'red' ? 'bg-rose-500/20 text-rose-500' : 'bg-green-500/20 text-green-500'}`}>
          <p className="font-bold text-xl xl:text-2xl">{value}<span className="text-base xl:text-lg">{unit}</span></p>
        </div>
      ) : (
        <div className="flex gap-4 items-center">
          <p className="font-bold text-sm text-white">{value}{unit}</p>
          {deviceStatus ? (
            aiMode ? (
              // aiMode = true → 스위치 대신 상태 뱃지 표시
              <span
                className={`flex items-center rounded-full gap-1 py-1 px-3 text-sm font-bold 
        ${isOn ? 'bg-green-500/40 text-green-500' : 'bg-rose-500/40 text-rose-500'}`}
              >
                {deviceStatus}
    </span>
            ) : (
              // aiMode = false → 기존 스위치 표시
              <Switch
                checked={isOn}
                onChange={(v) => onToggle?.(v ? 'ON' : 'OFF')}
              />
            )
          ):(
            <span className={`flex items-center rounded-full gap-1 py-1 px-3 text-sm font-bold text-white ${valueColor === 'red' ? 'bg-rose-500/40' +
              ' text-rose-500' : 'bg-green-500/40 text-green-500'}`}>
            <span className={`size-3 rounded-full ${valueColor === 'red' ? 'bg-rose-500':'bg-green-500'}`}></span>
              {valueColor === 'red' ? "위험" : "양호"}
          </span>
          )}
        </div>
      )}
    </div>
  );
}
