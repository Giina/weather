export function formatDate(dateStr: string): string {
  const dateObj = new Date(dateStr);
  const date = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  return `${month}/${date}`;
}
