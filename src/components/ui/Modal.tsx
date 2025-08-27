import { useEffect, useRef, useId, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

type ModalSize = "alert" | "sm" | "md" | "lg" | "xl";

interface ModalProps {
  onClose: () => void;
  title?: string;
  size?: ModalSize;
  children: ReactNode;
  zIndex?: number;
  initialFocus?: () => HTMLElement | null;  // ← 콜백
  ariaDescribedBy?: string;
  overlayOpacityClass?: string;
  containerId?: string;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

function Modal({
    onClose,
    title,
    size = "md",
    children,
    zIndex = 1000,
    initialFocus,
    ariaDescribedBy,
    overlayOpacityClass = "bg-slate-950/60",
    containerId,
  }: ModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const titleId = useId();

  const [host, setHost] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if (typeof document === "undefined") return;
    const el = containerId
      ? document.getElementById(containerId) ?? document.body
      : document.body;
    setHost(el);
  }, [containerId]);

  useEffect(() => {
    if (!host) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab") {
        const root = containerRef.current;
        if (!root) return;

        const focusables = Array.from(
          root.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
        ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);

        if (focusables.length === 0) {
          e.preventDefault();
          return;
        }

        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (e.shiftKey) {
          if (!active || active === first || !root.contains(active)) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (active === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);

    setTimeout(() => {
      const el = initialFocus?.() ?? containerRef.current;
      el?.focus();
    }, 0);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [host, onClose, initialFocus]);   // ← 의존성도 initialFocus로

  // 사이즈 클래스
  let sizeClass = "md:w-[480px]";
  if (size === "sm" || size === "alert") sizeClass = "md:w-[400px]";
  else if (size === "lg") sizeClass = "md:w-[560px]";
  else if (size === "xl") sizeClass = "md:w-[660px]";

  if (!host) return null;

  return createPortal(
    <>
      <div
        className={`fixed inset-0 transition-opacity duration-300 px-4 ${overlayOpacityClass}`}
        style={{ zIndex: Math.max(0, zIndex - 1) }}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={containerRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={ariaDescribedBy}
        className={`
          fixed inset-x-4 top-1/2 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2
          bg-slate-800 text-slate-100 shadow-2xl rounded-2xl
          p-6 w-auto flex flex-col gap-6
          max-h-[80vh] overflow-auto outline-none
          ${sizeClass}
        `}
        style={{ zIndex }}
        onClick={(e) => e.stopPropagation()}
      >
        {size !== "alert" && (
          <div className="flex justify-between items-center">
            <h2 id={titleId} className="text-xl md:text-2xl font-bold">
              {title}
            </h2>
            <button
              type="button"
              className="flex items-center justify-end gap-1 rounded-xl h-10 px-1 text-slate-300 hover:bg-slate-800 cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
              onClick={onClose}
            >
              <span className="font-bold">닫기</span>
              <X size={24} />
            </button>
          </div>
        )}

        <div className="flex flex-col gap-6 h-full grow min-h-0">{children}</div>
      </div>
    </>,
    host
  );
}

export default Modal;
