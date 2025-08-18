import { useMemo, useState } from "react";
import type {Page} from "./types";
import Header from "./components/Header";

import DeviceMonitoring from "./pages/DeviceMonitoring";

export default function App() {
  const [page, setPage] = useState<Page>("deviceMonitoring");

  const Current = useMemo(() => {
    switch (page) {
      case "deviceMonitoring": return <DeviceMonitoring />;
    }
  }, [page]);

  return (
    <div className="flex flex-col w-dvw h-dvh p-0 xl:py-6 xl:px-6 2xl:px-10 gap-4">
      <Header current={page} onChange={setPage} />
      <div className="grow">
        {Current}
      </div>
    </div>
  );
}
