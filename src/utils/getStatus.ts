export const getStatus = (status: string) => {
  let result = "";
  switch (status) {
    case "draft":
      result = "Draf Sales";
      break;
    case "pending":
      result = "Pending Appraisal Assignment";
      break;
    default:
      break;
  }

  return result;
};
