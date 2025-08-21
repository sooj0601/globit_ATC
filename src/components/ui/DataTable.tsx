import React, { useRef } from 'react';

export function DataTable({
                            className = '',
                            children,
                          }: {
  className?: string;
  children?: React.ReactNode;
}) {
  const tableContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`relative w-full ${className}`}>
      <div ref={tableContainerRef} className="relative w-full overflow-x-auto overflow-y-auto rounded-2xl">
        <table className={`relative min-w-full table-fixed  bg-slate-800 ${className}`}>
          {children}
        </table>
      </div>
    </div>
  );
}

export function DataTableHead({ className = '', children}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <thead className={`sticky top-0 bg-slate-700 z-10 ${className}`}>
    {children}
    </thead>
  );
}

type DataTableThProps = React.ThHTMLAttributes<HTMLTableCellElement> & {
  className?: string;
  children?: React.ReactNode;
};
export function DataTableTh({
                              className = '',
                              children,
                              ...props
                            }: DataTableThProps) {
  return (
    <th
      className={`p-2 text-slate-300 text-sm text-nowrap ${className}`}
      {...props}
    >
      {children}
    </th>
  );
}
type DataTableTdProps = React.TdHTMLAttributes<HTMLTableCellElement> & {
  bgColor?: boolean;
  className?: string;
};

export function DataTableTd({
                              className = '',
                              children,
                              bgColor = false,
                              ...props
                            }: DataTableTdProps) {


  return (
    <td
      className={`border-b border-b-slate-700 py-2 px-2 text-center ${bgColor ? 'bg-slate-50' : ''} ${className}`}
      {...props}
    >
      {children}
    </td>
  );
}

export function DataTableFoot({ className = '', children}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <tfoot className={`sticky bottom-0 bg-indigo-500/10 z-10 backdrop-blur-sm ${className}`}>
    {children}
    </tfoot>
  );
}


