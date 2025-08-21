import { ChartArea } from 'lucide-react';

type Ratio = `${number}/${number}`;
type ResponsiveRatio = {
  base?: Ratio; sm?: Ratio; md?: Ratio; lg?: Ratio; xl?: Ratio; '2xl'?: Ratio;
};

type ChartPlaceholderProps = {
  className?: string;
  ratio?: Ratio;
  responsiveRatio?: ResponsiveRatio;
  minHeight?: number;
};

export default function ChartPlaceholder({
    className = '',
    ratio = '16/9',
    responsiveRatio,
    minHeight,
  }: ChartPlaceholderProps) {
  const ratioClasses = [
    `[--ar:${responsiveRatio?.base ?? ratio}]`,
    responsiveRatio?.sm && `sm:[--ar:${responsiveRatio.sm}]`,
    responsiveRatio?.md && `md:[--ar:${responsiveRatio.md}]`,
    responsiveRatio?.lg && `lg:[--ar:${responsiveRatio.lg}]`,
    responsiveRatio?.xl && `xl:[--ar:${responsiveRatio.xl}]`,
    responsiveRatio?.['2xl'] && `2xl:[--ar:${responsiveRatio['2xl']}]`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={`relative w-full rounded-2xl bg-white/5 ${className}`}>
      <div
        className={`w-full flex items-center justify-center text-slate-400 font-bold text-2xl gap-2 select-none
          ${ratioClasses} [aspect-ratio:var(--ar)]`}
        style={minHeight ? { minHeight } : undefined}
      >
        <ChartArea size={32} /> Chart Placeholder
      </div>
    </div>
  );
}
