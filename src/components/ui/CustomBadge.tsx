import type { ReactNode } from 'react';

type CustomBadgeProps = {
  variant?: 'default' | 'primary' | 'green' | 'yellow' | 'red' | 'gray' | 'teal';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
  className?: string;
  size?: 'sm' | 'md';
};

export default function CustomBadge({
                                      variant = 'teal',
                                      leftIcon,
                                      rightIcon,
                                      children,
                                      className = '',
                                      size = 'md',
                                    }: CustomBadgeProps) {

  let variantClass = '';
  switch (variant) {
    case 'yellow' :
      variantClass = 'bg-yellow-400/20 text-yellow-400';
      break;
    case 'teal' :
      variantClass = 'bg-teal-400/20 text-teal-400';
      break;
  }

  let sizeClass = '';
  switch (size) {
    case 'sm':
      sizeClass = 'rounded-full h-6 px-2 text-sm';
      break;
    case 'md':
      sizeClass = 'rounded-lg h-8 px-4 ';
      break;
    default:
      sizeClass = 'rounded-lg h-8 px-4';
  }

  const baseClass = `inline-flex items-center justify-center gap-1 font-bold shrink-0 ${sizeClass} ${variantClass} ${className}`;
  const content = (
    <>
      {leftIcon && <i className="flex-shrink-0">{leftIcon}</i>}
      {children && children}
      {rightIcon && <i className="flex-shrink-0">{rightIcon}</i>}
    </>
  );
  return (
    <span
      className={`${baseClass}`}
    >
      {content}
    </span>
  );
}
