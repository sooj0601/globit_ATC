import * as React from "react";

interface PageTitleProps {
  title: string | React.ReactNode;
}

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <h2 className="flex justify-between items-center py-2 xl:py-4 text-xl xl:text-2xl font-bold text-indigo-500">{title}</h2>
  );
}
