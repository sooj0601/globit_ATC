interface DeviceStatusItemProps {
  title: string;
  condition: React.ReactNode;
}

export default function DeviceStatusItem({ title, condition }: DeviceStatusItemProps) {
  return (
    <div className="flex items-center justify-between gap-2 bg-slate-800 rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <strong>{title}</strong>
      </div>
      {condition}
    </div>
  );
}
