export const formatMoney = (amount: number) => {
  if (isNaN(amount)) {
    return "Invalid amount";
  }

  return `৳ ${amount.toFixed(2)}`;
};
