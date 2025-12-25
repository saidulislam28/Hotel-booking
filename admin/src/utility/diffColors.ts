
export const UserActiveStatusColor = (status: any) => {
  const colors: any = {
    INACTIVE: "orange",
    ACTIVE: "green",
    BLOCKED: "red",
  };
  return colors[status] || "default";
};
