interface TabBtnProps {
  text: string | number;
  active?: boolean;
  className?: string;
}

export default function TabBtn({ text, active = false, className }: TabBtnProps) {
  return (
    <button className={`min-w-[120px] px-4 font-bold xl:text-lg transition border-b-4 cursor-pointer ${active ? 'border-b-4' +
      ' border-b-indigo-500' +
      ' text-white' : 'text-slate-500 border-b-transparent hover:border-b-slate-700'} ${className}`}>
      {text}
    </button>
  );
}
