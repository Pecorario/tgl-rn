export function getMoneyInReal(money: number) {
  return money.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}
