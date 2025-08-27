import React from "react";
import CustomBadge from "../ui/CustomBadge.tsx";
import CustomBtn from "../ui/CustomBtn.tsx";
import { Trash2 } from "lucide-react";

type Direction = "row" | "column";

interface FeedSupplyScheduleProps {
  label: string;
  children?: React.ReactNode;
  delBtn?: boolean;
  direction?: Direction;
  active?: boolean;
}

export default function FeedSupplySchedule({
    label,
    delBtn = false,
    children,
    direction = "row",
    active = false,
  }: FeedSupplyScheduleProps) {
  // 모바일: flex-col 고정, 데스크톱만 direction 반영
  const desktopDir =
    direction === "row"
      ? "lg:flex-row lg:items-center lg:justify-between"
      : "lg:flex-col";

  return (
    <div className={`flex flex-col ${desktopDir} p-4 rounded-2xl ${active ? 'bg-green-400/15':'bg-slate-800'} gap-4`}>
      <CustomBadge variant={`${active ? 'green':'default'}`}>{label}</CustomBadge>
      <div>{children}</div>
      <div className="w-auto lg:w-24 flex justify-end items-center gap-2">
        {delBtn && (
          <CustomBtn size="icon" variant="red" aria-label="삭제">
            <Trash2 size={20} />
          </CustomBtn>
        )}
      </div>
    </div>
  );
}
