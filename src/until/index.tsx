export const formatCurrency = (amount: number) => {
  const validAmount = Number(amount);

  if (isNaN(validAmount) || validAmount <= 0) return "Liên hệ";

  return validAmount.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

export const parseBirthday = (str: string) => {
  const [day, month, year] = str.split("/");
  return new Date(Number(year), Number(month) - 1, Number(day));
};
