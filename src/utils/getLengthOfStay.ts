export const getLengthOfStay = (data: number) => {
  const year = (data / 12) | 0;
  const month = data % 12;

  return {year, month};
};
