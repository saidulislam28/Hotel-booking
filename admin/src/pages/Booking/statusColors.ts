export const getStatusColor = (status: string) => {
  const colors: any = {
    PENDING: "warning",
    CONFIRMED: "processing",
    COMPLETED: "success",
    CANCELLED: "error",
  };
  return colors[status] || "default";
};

export const getPaymentStatusColor = (status: string) => {
  const colors: any = {
    PAID: "success",
    UNPAID: "error",
    PARTIAL: "warning",
  };
  return colors[status] || "default";
};
