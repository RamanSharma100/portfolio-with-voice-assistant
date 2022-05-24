export const getRoutes = (): string[] => {
  const allRoutes: any = (
    document.querySelector("nav.main-navigation") as any
  ).querySelectorAll("a");
  const allPages: string[] = Array.from(allRoutes).map((route: any) =>
    route.href
      .replace(window.location.origin, "")
      .replace("/", "")
      .replace("us", "")
      .trim()
  );
  return allPages;
};

export const getPageSections = (): string[] => {
  const sections = document.querySelectorAll("div.row")[0].children;
  const allSections = Array.from(sections).map(
    (section: any) => section.id !== "" && section.id
  );
  return allSections;
};
