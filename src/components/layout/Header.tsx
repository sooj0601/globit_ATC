import { useEffect, useRef, useState, useId, useCallback, memo } from "react";
import { Menu, X } from "lucide-react";
import { type Page, PAGES, titleMap } from "../../types.ts";
import ImgLogo from "../../assets/imgs/logo.png";

type Props = {
  current: Page;
  onChange: (p: Page) => void;
};

function Header({ current, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const itemsRef = useRef<HTMLButtonElement[]>([]);
  const prevFocusRef = useRef<Element | null>(null);
  const menuId = useId();


  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!open) return;
      const target = e.target as Node;
      if (panelRef.current?.contains(target)) return;
      if (btnRef.current?.contains(target)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  useEffect(() => {
    if (open) {
      prevFocusRef.current = document.activeElement;
      requestAnimationFrame(() => itemsRef.current[0]?.focus());
      const { style } = document.body;
      const prev = style.overflow;
      style.overflow = "hidden";
      return () => {
        style.overflow = prev;
      };
    } else {
      (prevFocusRef.current as HTMLElement | null)?.focus?.();
    }
  }, [open]);

  useEffect(() => setOpen(false), [current]);

  const toggleOpen = useCallback(() => setOpen((v) => !v), []);
  const handleSelect = useCallback(
    (p: Page) => {
      onChange(p);
      setOpen(false);
    },
    [onChange]
  );

  return (
    <header className="sticky top-0 z-10 bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-slate-950/80 xl:rounded-full border-b border-white/5">
      <div className="flex items-center justify-between h-14 xl:h-16 px-4 sm:px-6">
        {/* 로고 */}
        <h1 className="flex items-center gap-2 min-w-0">
          <img
            src={ImgLogo}
            alt="SMT 시스템 로고"
            className="size-6 xl:size-8 shrink-0"
            width={32}
            height={32}
            loading="lazy"
          />
          <span className="text-lg xl:text-2xl text-white font-bold truncate">SMT시스템</span>
        </h1>

        <nav aria-label="주요 메뉴" className="relative">
          <button
            ref={btnRef}
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-haspopup="menu"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={toggleOpen}
          >
            {open ? <X className="size-6 md:size-8" aria-hidden /> : <Menu className="size-6 md:size-8" aria-hidden />}
          </button>

          {open && (
            <>
              <div
                className="fixed inset-0 bg-black/20"
                onClick={() => setOpen(false)}
                aria-hidden
              />
              <div
                id={menuId}
                role="menu"
                ref={panelRef}
                className="absolute right-0 mt-2 w-40 rounded-xl bg-slate-800 shadow-xl ring-1 ring-black/5 overflow-hidden animate-in fade-in zoom-in-95"
              >
                <ul>
                  {PAGES.map((p, idx) => {
                    const active = current === p;
                    return (
                      <li key={p}>
                        <button
                          ref={(el) => {
                            if (el) itemsRef.current[idx] = el;
                          }}
                          role="menuitem"
                          className={[
                            "w-full text-left px-3 py-2 outline-none cursor-pointer",
                            active
                              ? "bg-indigo-500 text-white font-bold"
                              : "text-slate-400 hover:bg-indigo-500/40 focus-visible:ring-2" +
                              " focus-visible:ring-slate-300"
                          ].join(" ")}
                          onClick={() => handleSelect(p)}
                          aria-current={active ? "page" : undefined}
                          autoFocus={idx === 0}
                        >
                          {titleMap[p]}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default memo(Header);
