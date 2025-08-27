// src/components/ui/FAB.tsx
import { type ButtonHTMLAttributes } from "react";

type FABProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function FAB({
    className = "",
    type,                 // 사용자가 넘긴 type 보존
    ...rest
  }: FABProps) {
  return (
    <button
      // 기본값은 "button", 사용자가 주면 그 값 사용
      type={type ?? "button"}
      className={`fixed bottom-6 right-6 z-[900] rounded-full shadow-lg bg-indigo-600 text-white
        flex items-center gap-1 cursor-pointer h-14 w-auto px-4 font-bold hover:shadow-[0_0_0_4px_rgba(97,95,255,0.4)] active:scale-95 transition ${className}`}
      {...rest}
    />
  );
}
