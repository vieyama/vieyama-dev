import * as Yup from "yup";

const requiredMessage = "This field is required.";

const DetailApplicationSchema = Yup.object({
  financingValue: Yup.string().required(requiredMessage),
  tenor: Yup.number().required(requiredMessage).oneOf([1, 2, 3]),
  paymentMethod: Yup.string()
    .required(requiredMessage)
    .oneOf(["installment", "end-of-tenor"]),
  loanPurposes: Yup.string().required(requiredMessage),
  storages: Yup.string().required(requiredMessage),
});

export {DetailApplicationSchema};
