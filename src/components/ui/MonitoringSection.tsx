
interface MonitoringSectionProps {
  title: string;
  titleDesc?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export default function MonitoringSection({ title, titleDesc, children, className }: MonitoringSectionProps) {
  return (
    <div className={`flex flex-col gap-2 xl:gap-4 ${className}`}>
      <div className="flex items-center justify-between w-full">
        <strong className="text-indigo-300">{title}</strong>
        {titleDesc}
      </div>
      {children}
    </div>
  );
}
