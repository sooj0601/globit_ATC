import React from "react";
import CustomBadge from "../ui/CustomBadge.tsx";
import CustomBtn from "../ui/CustomBtn.tsx";
import { Trash2 } from "lucide-react";

interface FeedSupplyScheduleProps {
  label: string;
  children?: React.ReactNode;
  delBtn?: boolean;
}

export default function FeedSupplySchedule({ label, delBtn = false ,children }: FeedSupplyScheduleProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center p-4 rounded-2xl bg-slate-800 gap-4">
      <CustomBadge>{label}</CustomBadge>
      <div>{children}</div>
      <div className="w-auto lg:w-24 flex justify-end items-center gap-2">
        {delBtn && (
          <CustomBtn size="icon" variant="red">
            <Trash2 size={20} />
          </CustomBtn>
        )}
      </div>
    </div>
  );
}
