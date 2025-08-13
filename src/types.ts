export const PAGES = ["deviceMonitoring"] as const;
export type Page = typeof PAGES[number];

export const titleMap: Record<Page, string> = {
  deviceMonitoring: "Home",
};
