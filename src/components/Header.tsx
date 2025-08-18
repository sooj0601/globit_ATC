import {type Page, PAGES, titleMap } from "../types";
import ImgLogo from "../assets/imgs/logo.png";

type Props = {
  current: Page;
  onChange: (p: Page) => void;
};

export default function Header({ current, onChange }: Props) {
  return (
    <header className="sticky top-0 z-10 bg-slate-950 xl:rounded-full">
      <div className="flex justify-between items-center h-14 xl:h-16 px-6">
        <h1 className="flex items-center gap-2">
          <img
            src={ImgLogo}
            alt="로고"
            className="size-6 xl:size-8"
            loading="lazy"
          />
          <p className="text-xl xl:text-2xl text-white font-bold">SMT시스템</p>
        </h1>
        <nav className="flex items-center justify-between py-3">
          <ul className="flex gap-1">
            {PAGES.map((p) => (
              <li key={p}>
                <button
                  className={[
                    "px-3 py-2 rounded-lg text-sm transition",
                    current === p
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  ].join(" ")}
                  onClick={() => onChange(p)}
                >
                  {titleMap[p]}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
