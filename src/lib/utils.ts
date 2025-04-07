export async function toClipboard(text: string): Promise<void> {
  await navigator.clipboard.writeText(text);
}
