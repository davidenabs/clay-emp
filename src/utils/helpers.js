export const maskNumber = (numberString) => {
  return `**** ${numberString.slice(-4)}`;
};

export const calculatePercentage = (amountSpent, loanLimit) => {
  if (loanLimit === 0) return 0;
  return parseFloat(((amountSpent / loanLimit) * 100).toFixed(2));
};

export const splitFullName = (fullName) => {
  const [firstName, lastName] = fullName.split(" ");
  return { firstName, lastName };
};
