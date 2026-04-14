export const getTimelineEntries = () => {
  if (typeof window === "undefined") return [];

  const storedEntries = localStorage.getItem("keenkeeper-timeline");
  return storedEntries ? JSON.parse(storedEntries) : [];
};

export const saveTimelineEntry = (entry) => {
  if (typeof window === "undefined") return;

  const existingEntries = getTimelineEntries();
  const updatedEntries = [entry, ...existingEntries];

  localStorage.setItem("keenkeeper-timeline", JSON.stringify(updatedEntries));
};

export const getFilteredEntries = (entries, filter) => {
  if (filter === "all") return entries;
  return entries.filter((entry) => entry.type === filter);
};