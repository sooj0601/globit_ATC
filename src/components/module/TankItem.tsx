import {MapPin} from 'lucide-react';
import ImgTank from "../../assets/imgs/watertank.png";

interface TankItemProps {
  tankName: string;
  badges?: React.ReactNode;
  content?: React.ReactNode;
  buttons?: React.ReactNode;
}

export default function TankItem({ tankName, badges, content, buttons}: TankItemProps) {
  return (
    <div className="flex flex-col gap-4 bg-slate-800 rounded-2xl p-4 md:p-6">
      <div className="flex items-center justify-between border-b border-slate-700 pb-4">
        <p className="flex items-center gap-2">
          <MapPin size={20} className="text-indigo-300" />
          <span className="text-xl font-bold text-white">{tankName}</span>
        </p>
        {badges && (
          <div className="flex items-center gap-2">
            {badges}
          </div>
        )}
      </div>
      <div className="flex justify-center h-44">
        <img src={ImgTank} className="h-full w-auto object-cover" alt="탱크 이미지" />
      </div>
      {content && (
        <div className="flex flex-col gap-2 bg-slate-700 px-4 py-2 rounded-lg">
          {content}
        </div>
      )}
      <div className="flex flex-wrap justify-between gap-2 items-center border-t border-slate-700 pt-4">
        {buttons}
      </div>
    </div>
  );
}
