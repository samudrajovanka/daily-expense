export const toCurrency = (number) => {
  const currency = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
    signDisplay: 'never'
  }).format(number);

  return currency;
};
