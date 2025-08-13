interface StatusChipProps {
  text: string | number;
  variant: 'red' | 'green';
}

export default function StatusChip({ text, variant='green' }: StatusChipProps) {
  return (
    <div className="flex items-center gap-1 font-bold">
      <span className={`size-3 rounded-full ${variant === 'red' ? 'bg-rose-500' : 'bg-green-500'}`}></span>
      {text}
    </div>
  );
}
