import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { X } from "lucide-react";

type Side = "right" | "left" | "top" | "bottom";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  side?: Side;                   // 데스크톱 기본 방향 (기본: 'right')
  mobileSide?: Side;             // 모바일일 때 방향 (기본: 'bottom')
  title?: string;
  widthClass?: string;           // 좌/우 열림 시 너비 (ex: "w-[420px]")
  heightClass?: string;          // 상/하 열림 시 높이 (ex: "h-[60vh]")
  showCloseButton?: boolean;
  overlayOpacityClass?: string;  // 오버레이 투명도 (기본: bg-slate-950/60)
  children: ReactNode;
}

export default function Drawer({
                                 open,
                                 onClose,
                                 side = "right",
                                 mobileSide = "bottom",
                                 title,
                                 // 작은 화면에서도 여백(3rem)을 보장
                                 widthClass = "w-[min(420px,calc(100vw-3rem))]",
                                 heightClass = "h-[min(60vh,calc(100dvh-3rem))]",
                                 showCloseButton = true,
                                 overlayOpacityClass = "bg-slate-950/60",
                                 children,
                               }: DrawerProps) {
  // 모바일 판정 (sm 미만)
  const isMobile = useIsMobile("(max-width: 767px)");
  const actualSide: Side = isMobile ? mobileSide : side;

  // 바디 스크롤 락
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC 닫기
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // 포커스 이동(접근성 보강)
  const panelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (open && panelRef.current) panelRef.current.focus();
  }, [open]);

  const translateClosed = useMemo(() => {
    switch (actualSide) {
      case "right":
        return "translate-x-[calc(100%+1.5rem)]";   // ← 기존: translate-x-full
      case "left":
        return "-translate-x-[calc(100%+1.5rem)]";  // ← 기존: -translate-x-full
      case "top":
        return "-translate-y-full";                 // top/bottom은 현재 여백 없음
      case "bottom":
        return "translate-y-full";
    }
  }, [actualSide]);

  const sizeClass =
    actualSide === "right" || actualSide === "left" ? widthClass : heightClass;

  return (
    <div className="pointer-events-none fixed inset-0 z-[1000]">
      {/* Overlay: 열릴 때만 보이고 클릭 가능 */}
      <div
        className={`absolute inset-0 transition-opacity duration-300
          ${open ? `${overlayOpacityClass} opacity-100 pointer-events-auto`
          : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
        aria-hidden={true}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={title ?? "drawer"}
        className={`pointer-events-auto absolute flex flex-col bg-slate-900 shadow-2xl
          ${panelPosition(actualSide)} ${sizeClass}
          ${roundedClass(actualSide)} text-slate-100
          transition-transform duration-300 ease-out p-6 gap-6
          ${open ? "translate-x-0 translate-y-0" : translateClosed}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {(title || showCloseButton) && (
          <div className="flex justify-between items-center">
            <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
            {showCloseButton && (
              <button
                type="button"
                className="flex items-center justify-end gap-1 rounded-xl h-10 px-1 text-slate-300 hover:bg-slate-800 cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
                onClick={onClose}
              >
                <span className="font-bold">닫기</span>
                <X size={24} />
              </button>
            )}
          </div>
        )}

        <div
          className={`min-h-0 grow overflow-auto ${
            actualSide === "bottom" ? "pb-[calc(env(safe-area-inset-bottom)+16px)]" : ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function panelPosition(side: Side) {
  switch (side) {
    case "right":
      return "top-6 right-6 bottom-6";
    case "left":
      return "top-6 left-6 bottom-6";
    case "top":
      return "top-0 left-0 w-full";
    case "bottom":
      return "bottom-0 left-0 w-full";
  }
}

function roundedClass(side: Side) {
  switch (side) {
    case "right":
    case "left":
      return "rounded-2xl";
    case "top":
      return "rounded-b-2xl";
    case "bottom":
      return "rounded-t-2xl";
  }
}

// 간단한 모바일 판정 훅 (ESM/일반 import 사용)
function useIsMobile(query = "(max-width: 767px)") {
  const getMatch = () =>
    typeof window !== "undefined" && window.matchMedia(query).matches;

  const [matches, setMatches] = useState<boolean>(getMatch());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(query);
    const handler = () => setMatches(mq.matches);

    // 최초 동기화
    handler();

    // 이벤트 리스너 (브라우저 호환)
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, [query]);

  return matches;
}
