type UtilLabelProps = {
  className?: string
  label: string
  required?: boolean
  htmlFor?: string
}

export default function CustomLabel({className = '', label, required, htmlFor}: UtilLabelProps) {
  return (
    <label htmlFor={htmlFor} className={`flex items-center gap-2 font-bold shrink-0 min-w-20 md:min-w-24 ${className}`}>
      {label}
      {required && <span className="text-rose-500">*</span>}
    </label>
  )
}
