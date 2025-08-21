export const PAGES = ["tankMonitoring", "deviceMonitoring", "feedSupplySetting", "feedSupplyHistory"] as const;
export type Page = typeof PAGES[number];

export const titleMap: Record<Page, string> = {
  tankMonitoring: "수조 모니터링",
  deviceMonitoring: "장비 모니터링",
  feedSupplySetting: "사료 공급 설정",
  feedSupplyHistory: "사료 공급 이력",
};
