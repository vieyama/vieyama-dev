import * as yup from "yup";

const LoginSchema = yup
  .object({
    email: yup
      .string()
      .required("This field is required.")
      .email("Email is must valid"),
    password: yup.string().required("This field is required."),
  })
  .required();

export {LoginSchema};
