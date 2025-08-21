
type BtnWrapProps = {
  className?: string;
  children?: React.ReactNode;
  lineTop?: boolean;
};

export default function BtnWrap({ className = '', children, lineTop = false }: BtnWrapProps) {
  return (
    <div className={`sticky bottom-0 inset-x-0 pb-8 pt-6 md:relative flex flex-col lg:flex-row items-center lg:justify-between gap-2 z-10 bg-slate-900 ${lineTop ? 'md:border-t md:border-slate-700' : ''} ${className}`}>
      {children}
    </div>
  );
}
