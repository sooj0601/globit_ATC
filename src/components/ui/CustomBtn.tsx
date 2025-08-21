import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type Size = "xs" | "sm" | "lg" | "icon";
type Variant = "default" | "primary" | "secondary" | "red" | "ghost";

type CustomBtnProps = {
  size?: Size;
  variant?: Variant;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
  className?: string;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const sizeMap: Record<Size, string> = {
  xs: "h-7 px-2 text-sm rounded-md gap-1",
  sm: "h-9 px-3 rounded-lg gap-2",
  lg: "h-12 md:h-14 min-w-[160px] px-4 text-base rounded-xl gap-2",
  icon: "size-9 rounded-lg flex items-center justify-center",
};

const variantMap: Record<Variant, string> = {
  default:
    "bg-slate-700 text-white focus-visible:ring-2 focus-visible:ring-slate-600" +
    " hover:shadow-[0_0_0_4px_theme(colors.slate.600)]",
  red:
    "bg-rose-500/20 text-rose-500 focus-visible:ring-2 focus-visible:ring-rose-400" +
    " hover:bg-rose-500/30 hover:shadow-[0_0_0_4px_rgba(244,63,94,0.6)]",
  primary:
    "bg-indigo-500 text-white focus-visible:ring-2 focus-visible:ring-indigo-400" +
    " hover:shadow-[0_0_0_4px_rgba(97,95,255,0.6)]",
  secondary:
    "bg-indigo-800 text-white focus-visible:ring-2 focus-visible:ring-indigo-700" +
    " hover:shadow-[0_0_0_4px_rgba(97,95,255,0.6)]",
  ghost:
    "bg-transparent text-indigo-300 hover:bg-white/10" +
    " hover:shadow-[0_0_0_4px_theme(colors.slate.400)]",
};

const CustomBtn = forwardRef<HTMLButtonElement, CustomBtnProps>(
  (
    {
      size = "sm",
      variant = "default",
      leftIcon,
      rightIcon,
      isLoading = false,
      fullWidth = false,
      className = "",
      children,
      disabled,
      ...rest
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center font-bold transition-colors duration-200 " +
      "focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed " +
      "transition-shadow duration-200 ease-out cursor-pointer " +
      "shadow-[0_0_0_0_rgba(0,0,0,0)]";

    const width = fullWidth ? "w-full" : "";
    const classes = [base, sizeMap[size], variantMap[variant], width, className]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || isLoading}
        aria-disabled={disabled || isLoading || undefined}
        {...rest}
      >
        {isLoading && (
          <svg className="mr-2 size-4 animate-spin" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" className="opacity-25" />
            <path d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" fill="currentColor" className="opacity-75" />
          </svg>
        )}
        {leftIcon && <span className="-ml-0.5">{leftIcon}</span>}
        {children && <span className="break-keep">{children}</span>}
        {rightIcon && <span className="-mr-0.5">{rightIcon}</span>}
      </button>
    );
  }
);

export default CustomBtn;
