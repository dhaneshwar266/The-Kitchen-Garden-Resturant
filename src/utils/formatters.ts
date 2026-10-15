/**
 * Format currency amount to Indian Rupee (INR) format.
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Get today's date formatted as YYYY-MM-DD for min date in datepickers.
 */
export function getTodayDateString(): string {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

/**
 * Format a date string (YYYY-MM-DD) into human readable format.
 */
export function formatDisplayDate(dateStr: string): string {
  if (!dateStr) return '';
  const [yyyy, mm, dd] = dateStr.split('-');
  const date = new Date(Number(yyyy), Number(mm) - 1, Number(dd));
  return date.toLocaleDateString('en-IN', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}
