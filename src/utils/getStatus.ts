export const getStatus = (status: number) => {
  let result = "";
  switch (status) {
    case 0:
      result = "Draf Sales";
      break;
    case 5:
      result = "Pending Appraisal Assignment";
      break;
    default:
      break;
  }

  return result;
};
