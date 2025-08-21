
type InputGroupProps = {
  className?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'col' | 'row';
};

export default function InputGroup({ className = '', children, variant = 'default' }: InputGroupProps) {
  let variantClass = '';
  switch (variant) {
    case 'default':
      variantClass = 'grid grid-cols-1 md:grid-cols-2';
      break;
    case 'col':
      variantClass = 'flex flex-col';
      break;
    case 'row':
      variantClass = 'flex flex-row';
      break;
  }
  return (
    <div className={`${variantClass} gap-x-8 gap-y-6 py-6 ${className}`}>
      {children}
    </div>
  );
}
