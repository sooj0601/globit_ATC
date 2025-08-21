import { useState, type ReactNode } from "react";
import type { Page } from "./types";
import Header from "./components/layout/Header.tsx";
import TankMonitoring from "./pages/TankMonitoring";
import DeviceMonitoring from "./pages/DeviceMonitoring";
import FeedSupplySetting from "./pages/FeedSupplySetting";
import FeedSupplyHistory from "./pages/FeedSupplyHistory";

const pages: Record<Page, ReactNode> = {
  tankMonitoring: <TankMonitoring />,
  deviceMonitoring: <DeviceMonitoring />,
  feedSupplySetting: <FeedSupplySetting />,
  feedSupplyHistory: <FeedSupplyHistory />,
};

export default function App() {
  const [page, setPage] = useState<Page>("deviceMonitoring");
  return (
    <div className="flex flex-col w-dvw h-dvh p-0 xl:py-6 xl:px-6 2xl:px-10 gap-4">
      <Header current={page} onChange={setPage} />
      <div className="grow">{pages[page]}</div>
    </div>
  );
}
