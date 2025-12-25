export const formatMoney = (amount: number) => {
  if (isNaN(amount)) {
    return "Invalid amount";
  }

  return `BDT ${amount.toFixed(2)}`;
};
