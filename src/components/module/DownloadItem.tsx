

interface DownloadItemProps {
  title: string;
  button?: React.ReactNode;
}

export default function DownloadItem({
    title,
    button,
  }: DownloadItemProps) {

  return (
    <div
      className={`flex justify-between gap-2 bg-slate-800 rounded-2xl p-3 xl:p-4`}
    >
      <div className="flex items-center justify-between">
        <strong>{title}</strong>
      </div>
      {button}
    </div>
  );
}
