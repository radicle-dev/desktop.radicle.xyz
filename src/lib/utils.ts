export async function toClipboard(text: string): Promise<void> {
  await navigator.clipboard.writeText(text);
}

type DateStyle = Intl.DateTimeFormatOptions["dateStyle"];

export function formatDate(
  date: string,
  dateStyle: DateStyle = "medium",
  locales = "en",
) {
  const dateToFormat = new Date(date.replaceAll("-", "/"));
  const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });
  return dateFormatter.format(dateToFormat);
}
