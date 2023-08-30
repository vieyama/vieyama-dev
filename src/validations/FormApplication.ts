import * as Yup from "yup";

import type {
  DetailApplicationCorporateType,
  DetailApplicationIndividualType,
} from "~/interfaces/form/detailApplication";

const requiredMessage = "This field is required.";

const addressYup = {
  address: Yup.string().required(requiredMessage),
  province: Yup.string().required(requiredMessage),
  city: Yup.string().required(requiredMessage),
  district: Yup.string().required(requiredMessage),
  postal_code: Yup.string().required(requiredMessage),
};

const emergencyYup = {
  emergency_name: Yup.string().required(requiredMessage),
  emergency_relationship: Yup.string().required(requiredMessage),
  emergency_address: Yup.string().required(requiredMessage),
  emergency_no_hp: Yup.string().required(requiredMessage),
  emergency_phone_code: Yup.string().required(requiredMessage),
};

const DetailApplicationCorporateSchema =
  Yup.object<DetailApplicationCorporateType>({
    proposed_value: Yup.string().required(requiredMessage),
    tenor: Yup.number().required(requiredMessage).oneOf([1, 2, 3]),
    payment_method: Yup.string()
      .required(requiredMessage)
      .oneOf(["installment", "end-of-tenor"]),
    loan_purposes: Yup.string().required(requiredMessage),
    storage: Yup.string().required(requiredMessage),
    partner_id: Yup.string().required(requiredMessage),
    applicant_name: Yup.string().required(requiredMessage),
    company_name: Yup.string().required(requiredMessage),
    company_npwp: Yup.string().required(requiredMessage),
    applicant_npwp: Yup.string().required(requiredMessage),
    business_fields: Yup.string().required(requiredMessage),
    no_telp: Yup.string().required(requiredMessage),
    phoneCode: Yup.string().required(requiredMessage),
    email: Yup.string().email("Email is Invalid").required(requiredMessage),
    number_of_employees: Yup.string().required(requiredMessage),
    ...addressYup,
    directors: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string().required(requiredMessage),
          email: Yup.string()
            .email("Email is Invalid")
            .required(requiredMessage),
          no_ktp: Yup.string().required(requiredMessage),
          pob: Yup.string().required(requiredMessage),
          dob: Yup.string().required(requiredMessage),
          position: Yup.string().required(requiredMessage),
          no_hp: Yup.string().required(requiredMessage),
          phoneCode: Yup.string().required(requiredMessage),
          share_ownership: Yup.string().required(requiredMessage),
          ...addressYup,
        }),
      )
      .required(requiredMessage),
    ...emergencyYup,
    emergency_office_no_telp: Yup.string(),
    emergencyPhoneOfficeCode: Yup.string(),
    emergency_home_number: Yup.string(),
    emergencyPhoneHomeCode: Yup.string(),
  });

const DetailApplicationIndividualSchema =
  Yup.object<DetailApplicationIndividualType>({
    proposed_value: Yup.string().required(requiredMessage),
    tenor: Yup.number().required(requiredMessage).oneOf([1, 2, 3]),
    payment_method: Yup.string()
      .required(requiredMessage)
      .oneOf(["installment", "end-of-tenor"]),
    loan_purposes: Yup.string().required(requiredMessage),
    storage: Yup.string().required(requiredMessage),
    partner_id: Yup.string().required(requiredMessage),
    applicant_name: Yup.string().required(requiredMessage),
    no_ktp: Yup.number().required(requiredMessage),
    no_telp: Yup.number().required(requiredMessage),
    noTelpCode: Yup.number().required(requiredMessage),
    mothers_maiden_name: Yup.string().required(requiredMessage),
    pob: Yup.string().required(requiredMessage),
    dob: Yup.string().required(requiredMessage),
    house_ownership_status: Yup.string().required(requiredMessage),
    length_of_stay_year: Yup.string().required(requiredMessage),
    length_of_stay_month: Yup.string().required(requiredMessage),
    last_education: Yup.string().required(requiredMessage),
    marital_status: Yup.string().required(requiredMessage),
    no_hp: Yup.number().required(requiredMessage),
    no_hp2: Yup.number(),
    phoneCode: Yup.string().required(requiredMessage),
    phoneCode2: Yup.string(),
    email: Yup.string().email("Email is Invalid").required(requiredMessage),
    domicile_address: Yup.string().required(requiredMessage),
    domicile_province: Yup.string().required(requiredMessage),
    domicile_city: Yup.string().required(requiredMessage),
    domicile_district: Yup.string().required(requiredMessage),
    domicile_postal_code: Yup.string().required(requiredMessage),
    ...addressYup,
    spouse_name: Yup.string().required(requiredMessage),
    spouse_no_ktp: Yup.string().required(requiredMessage),
    spouse_no_hp: Yup.string().required(requiredMessage),
    spousePhoneCode: Yup.string().required(requiredMessage),
    spouse_job: Yup.string().required(requiredMessage),
    spouse_income: Yup.string().required(requiredMessage),
    spouse_number_of_dependents: Yup.string().required(requiredMessage),
    personal_workplace_name: Yup.string().required(requiredMessage),
    personal_workplace_address: Yup.string().required(requiredMessage),
    personal_workplace_business_fields: Yup.string().required(requiredMessage),
    personal_workplace_position: Yup.string().required(requiredMessage),
    personal_workplace_length_of_work_year:
      Yup.string().required(requiredMessage),
    personal_workplace_length_of_work_month:
      Yup.string().required(requiredMessage),
    personal_workplace_income: Yup.string().required(requiredMessage),
    personal_workplace_other_income: Yup.string().required(requiredMessage),
    personal_workplace_additional_income:
      Yup.string().required(requiredMessage),
    ...emergencyYup,
    emergency_office_no_telp: Yup.string(),
    emergencyPhoneOfficeCode: Yup.string(),
    emergency_home_number: Yup.string(),
    emergencyPhoneHomeCode: Yup.string(),
  });

export {DetailApplicationCorporateSchema, DetailApplicationIndividualSchema};
