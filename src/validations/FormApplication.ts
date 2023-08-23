import * as Yup from "yup";

const requiredMessage = "This field is required.";

const DetailApplicationSchema = Yup.object().shape({
  financingValue: Yup.string().required(requiredMessage),
  tenor: Yup.number().required(requiredMessage).oneOf([1, 2, 3]),
  paymentMethod: Yup.string()
    .required(requiredMessage)
    .oneOf(["installment", "end-of-tenor"]),
  loanPurposes: Yup.string().required(requiredMessage),
  storages: Yup.string().required(requiredMessage),
  companyName: Yup.string().required(requiredMessage),
  companyNpwp: Yup.string().required(requiredMessage),
  businessField: Yup.string().required(requiredMessage),
  companyPhone: Yup.string().required(requiredMessage),
  companyPhoneCode: Yup.string().required(requiredMessage),
  companyEmail: Yup.string().required(requiredMessage),
  numberOfEmployee: Yup.string().required(requiredMessage),
  companyAddress: Yup.string().required(requiredMessage),
  companyProvince: Yup.string().required(requiredMessage),
  companyRegency: Yup.string().required(requiredMessage),
  companySubdistrict: Yup.string().required(requiredMessage),
  companyVillage: Yup.string().required(requiredMessage),
  companyPostalCode: Yup.string().required(requiredMessage),
  companyDirction: Yup.array()
    .of(
      Yup.object().shape({
        fullName: Yup.string().required(requiredMessage),
        email: Yup.string().email("Email is Invalid").required(requiredMessage),
        ktpNumber: Yup.string().required(requiredMessage),
        pob: Yup.string().required(requiredMessage),
        dob: Yup.string().required(requiredMessage),
        position: Yup.string().required(requiredMessage),
        phone: Yup.string().required(requiredMessage),
        phoneCode: Yup.string().required(requiredMessage),
        shareholding: Yup.string().required(requiredMessage),
        addressById: Yup.string().required(requiredMessage),
        provinceById: Yup.string().required(requiredMessage),
        regencyById: Yup.string().required(requiredMessage),
        districtById: Yup.string().required(requiredMessage),
        villageById: Yup.string().required(requiredMessage),
        postalCodeById: Yup.string().required(requiredMessage),
      }),
    )
    .required(requiredMessage),
});
export {DetailApplicationSchema};
