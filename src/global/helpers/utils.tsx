export function getMoneyInReal(money: any) {
  const format = Number(money).toFixed(2).toString().replace(/\./, ',');
  const result = `R$ ${format}`;
  return result;
}
