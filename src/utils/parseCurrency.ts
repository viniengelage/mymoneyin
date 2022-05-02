export default function parseCurrency(value: string) {
  const formatedValue = value
    .replace(/\D/g, '')
    .replace(/\D/g, '')
    .replace(/(\d)(\d{2})$/, '$1.$2');

  return formatedValue;
}
