export default function formatCurrency(code: string, value: number) {
  const { format } = new Intl.NumberFormat([], {
    style: 'currency',
    currency: code,
  });

  return format(value);
}
