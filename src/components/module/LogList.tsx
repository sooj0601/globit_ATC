// src/components/ui/LogList.tsx
export interface LogItem {
  time?: string;     // "13:00"
  message: string;  // "드럼필터 오염도가 감지되어 ..."
}

interface LogListProps {
  logs: LogItem[];
}

export default function LogList({ logs }: LogListProps) {
  const lastIndex = logs.length - 1;

  return (
    <div className="w-[80vw] max-w-md p-4">
        {logs.length === 0 ? (
          <p className="text-white/60">표시할 로그가 없습니다.</p>
        ) : (
          <ul className="space-y-1 ">
            {logs.map((log, idx) => (
              <li
                key={idx}
                className={`flex gap-2 items-center ${
                  idx === lastIndex
                    ? "font-bold text-amber-300" // 최신 로그 강조
                    : "text-white"
                }`}
              >
                {log.time && (
                  <span className="text-white/60 shrink-0">{log.time}</span>
                )}
                <span className="break-words">{log.message}</span>
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}
