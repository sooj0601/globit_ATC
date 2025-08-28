import React, { useState } from 'react';
import { Search, Eye, EyeOff } from 'lucide-react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CustomDateInput from './CustomDateInput';

type InputProps = {
  type?: string;
  name?: string;
  value?: string;               // ← 컨트롤드 값
  defaultValue?: string;        // ← 언컨트롤드 초기값
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  error?: string;
  className?: string;
  inputStyle?: string;
  onClick?: () => void;
  unit?: string;
  number?: boolean;             // 숫자 입력 모드(쉼표 포함 허용)
  id?: string;
  required?: boolean;
  autoComplete?: string;
};

const Input: React.FC<InputProps> = ({
                                       type = 'text',
                                       name,
                                       value,
                                       defaultValue,
                                       placeholder,
                                       onChange,
                                       disabled = false,
                                       readOnly = false,
                                       error,
                                       className = '',
                                       inputStyle = '',
                                       onClick,
                                       unit,
                                       number = false,
                                       id,
                                       required = false,
                                       autoComplete = 'off',
                                     }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const isSearch = type === 'search';
  const isFile = type === 'file';
  const isDate = type === 'date';
  const hasRightElement = isPassword || !!unit || isSearch;

  const toDateString = (date: Date): string => {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const parseDate = (str: string | undefined): Date | null => {
    if (!str) return null;
    const parts = str.split('-');
    if (parts.length !== 3) return null;
    const [year, month, day] = parts.map(Number);
    const date = new Date(year, month - 1, day);
    return isNaN(date.getTime()) ? null : date;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (number) {
      // 숫자 + 쉼표만 허용
      const raw = e.target.value;
      if (/^[\d,]*$/.test(raw)) {
        onChange?.(e);
      }
    } else {
      onChange?.(e);
    }
  };

  // 파일 입력
  if (isFile) {
    return (
      <div className={`relative flex flex-col gap-1 ${className}`}>
        <input
          type="file"
          name={name}
          onChange={onChange}
          disabled={disabled}
          readOnly={readOnly}
          id={id}
          required={required}
          autoComplete={autoComplete}
          className={`w-full h-9 file:px-4 file:py-1 file:bg-slate-200 file:border file:border-slate-300
            text-sm rounded-lg border border-slate-300 ${inputStyle}`}
        />
        {error && <span className="text-sm text-rose-500">{error}</span>}
      </div>
    );
  }

  // 날짜 입력(ReactDatePicker 사용)
  if (isDate) {
    const selected = parseDate(value ?? defaultValue);
    return (
      <div className={`flex flex-col z-[9999] ${className}`}>
        <ReactDatePicker
          selected={selected}
          onChange={(date) => {
            const v = date ? toDateString(date) : '';
            const fakeEvent = {
              target: { name, value: v },
            } as unknown as React.ChangeEvent<HTMLInputElement>;
            onChange?.(fakeEvent);
          }}
          customInput={
            <CustomDateInput
              name={name}
              id={id}
              placeholder={placeholder}
              inputStyle={`${inputStyle} ${className || ''}`}
              disabled={disabled}
              readOnly={readOnly}
              required={required}
            />
          }
          dateFormat="yyyy-MM-dd"
          disabled={disabled}
          className="w-full"
        />
        {error && <span className="text-sm text-rose-500">{error}</span>}
      </div>
    );
  }

  // 일반 입력
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div className={`relative flex flex-col gap-1`}>
        <input
          type={isPassword && showPassword ? 'text' : type}
          name={name}
          // 컨트롤드/언컨트롤드 둘 다 지원
          {...(value !== undefined ? { value } : { defaultValue })}
          placeholder={placeholder}
          onChange={handleChange}
          onClick={onClick}
          disabled={disabled}
          readOnly={readOnly}
          inputMode={number ? 'numeric' : undefined}
          id={id}
          required={required}
          autoComplete={autoComplete}
          className={`w-full h-9 ${
            hasRightElement ? (unit?.length === 2 ? 'pr-8' : 'pr-6') : 'pr-2'
          } pl-2 rounded-lg outline-none transition-all
            ${error ? 'bg-rose-500/10' : ''}
            ${
            disabled
              ? 'cursor-not-allowed text-slate-400 bg-slate-100'
              : readOnly
                ? 'bg-white/4 border border-slate-600 font-bold'
                : 'bg-white/8 '
          }
            ${number ? 'text-right' : ''}
            ${inputStyle}`}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 inset-y-0 my-auto text-sm text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}

        {!isPassword && unit && (
          <span className="absolute right-1.5 inset-y-0 my-auto flex items-center text-sm font-medium text-slate-400 pointer-events-none">
            {unit}
          </span>
        )}

        {isSearch && (
          <button
            type="button"
            className="cursor-pointer absolute right-3 inset-y-0 my-auto text-slate-600 hover:text-slate-400"
          >
            <Search size={18} />
          </button>
        )}
      </div>
      {error && <span className="text-sm text-rose-500">{error}</span>}
    </div>
  );
};

export default Input;
