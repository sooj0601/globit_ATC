import { forwardRef } from "react";
import { Calendar } from "lucide-react";

type CustomDateInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  inputStyle?: string;
};

const CustomDateInput = forwardRef<HTMLInputElement, CustomDateInputProps>(
  ({ value, onClick, placeholder, id, name, inputStyle, ...rest }, ref) => (
    <div className="flex items-center pl-2 pr-10 relative w-full h-9 bg-white/8 rounded-lg ">
      <input
        type="text"
        readOnly
        ref={ref}
        onClick={onClick}
        value={value}
        placeholder={placeholder}
        name={name}
        id={id}
        className={`w-full h-9 pl-2 pr-10 border outline-none ${inputStyle}`}
        {...rest}
      />
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          onClick?.(e as unknown as React.MouseEvent<HTMLInputElement, MouseEvent>);
        }}
        tabIndex={-1}
        aria-label="달력 열기"
        className="absolute right-2 inset-y-0 my-auto text-slate-300 hover:text-slate-300"
      >
        <Calendar size={18} />
      </button>
    </div>
  )
);

CustomDateInput.displayName = "CustomDateInput";

export default CustomDateInput;
