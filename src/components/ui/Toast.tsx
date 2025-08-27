import { useEffect, type ReactNode } from "react";

type ToastPosition = "top" | "bottom";

interface ToastProps {
  message?: string;             // 문자열 메시지 (하위 호환)
  children?: ReactNode;         // 메시지 대신 React 컴포넌트 사용 가능
  duration?: number;            // 노출 시간 (ms), 기본 5000
  onClose: () => void;          // duration 후 자동 호출
  position?: ToastPosition;     // "top" | "bottom", 기본 "top"
}

export default function Toast({
                                message,
                                children,
                                duration = 5000,
                                onClose,
                                position = "top",
                              }: ToastProps) {
  useEffect(() => {
    const id = setTimeout(onClose, duration);
    return () => clearTimeout(id);
  }, [duration, onClose]);

  const pos =
    position === "top"
      ? "top-6 left-1/2 -translate-x-1/2"
      : "bottom-8 left-1/2 -translate-x-1/2";

  const anim = position === "top" ? "animate-fade-in-down" : "animate-fade-in-up";

  return (
    <div className={`fixed z-[1000] ${pos}`}>
      <div
        className={`min-w-64 max-w-[90vw] rounded-xl bg-slate-700/30 text-white shadow-lg ${anim}`}
        style={{ animationDuration: `${duration}ms` }}
        role="status"
        aria-live="polite"
      >
        {/* children이 있으면 children 우선, 없으면 message 출력 */}
        {children ? (
          children
        ) : (
          <div className="px-4 py-2 font-medium">{message}</div>
        )}
      </div>
    </div>
  );
}
