const format = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' };

export const formatCurrency = (value: number): string => {
  return value.toLocaleString("pt-BR", format);
}