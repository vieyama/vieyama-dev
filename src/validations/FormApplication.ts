import * as Yup from "yup";

import type {
  DetailApplicationCorporateType,
  DetailApplicationIndividualType,
} from "~/interfaces/form/detailApplication";

const requiredMessage = "This field is required.";

const addressYup = {
  address: Yup.string().nullable(),
  province_id: Yup.number().required(requiredMessage),
};

const emergencyYup = {
  emergency_name: Yup.string().required(requiredMessage),
  emergency_relationship: Yup.string().required(requiredMessage),
  emergency_address: Yup.string().required(requiredMessage),
  emergency_no_hp: Yup.string().required(requiredMessage),
};

const DetailApplicationCorporateSchema =
  Yup.object<DetailApplicationCorporateType>({
    proposed_value: Yup.number()
      .min(1, requiredMessage)
      .required(requiredMessage),
    tenor: Yup.string()
      .required(requiredMessage)
      .oneOf(["1", "2", "3"], requiredMessage),
    payment_method: Yup.string()
      .required(requiredMessage)
      .oneOf(["installment", "end-of-tenor"], requiredMessage),
    loan_purposes: Yup.string().required(requiredMessage),
    storage: Yup.string().required(requiredMessage),
    partner_id: Yup.string().required(requiredMessage),
    applicant_name: Yup.string().nullable(),
    company_name: Yup.string().nullable(),
    company_npwp: Yup.string().nullable(),
    applicant_npwp: Yup.string().required(requiredMessage),
    business_fields: Yup.string().nullable(),
    no_telp: Yup.string().nullable(),
    email: Yup.string().email("Email is Invalid").nullable(),
    number_of_employees: Yup.number()
      .min(1, requiredMessage)
      .required(requiredMessage),
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
          share_ownership: Yup.string().required(requiredMessage),
          ...addressYup,
          province_name: Yup.string().required(requiredMessage),
          city_id: Yup.number().required(requiredMessage),
          city_name: Yup.string().required(requiredMessage),
          district_id: Yup.number().required(requiredMessage),
          district_name: Yup.string().required(requiredMessage),
          postal_code: Yup.number()
            .min(1, requiredMessage)
            .required(requiredMessage),
        }),
      )
      .required(requiredMessage),
    ...emergencyYup,
    emergency_office_no_telp: Yup.string().nullable(),
    emergency_home_number: Yup.string().nullable(),
    province_name: Yup.string().required(requiredMessage),
    city_id: Yup.number().required(requiredMessage),
    city_name: Yup.string().required(requiredMessage),
    district_id: Yup.number().required(requiredMessage),
    district_name: Yup.string().required(requiredMessage),
    postal_code: Yup.number().min(1, requiredMessage).required(requiredMessage),
  });

const DetailApplicationIndividualSchema =
  Yup.object<DetailApplicationIndividualType>({
    proposed_value: Yup.number()
      .min(1, requiredMessage)
      .required(requiredMessage),
    tenor: Yup.number()
      .required(requiredMessage)
      .oneOf([1, 2, 3], requiredMessage),
    payment_method: Yup.string()
      .required(requiredMessage)
      .oneOf(["installment", "end-of-tenor"], requiredMessage),
    loan_purposes: Yup.string().required(requiredMessage),
    storage: Yup.string().required(requiredMessage),
    partner_id: Yup.string().required(requiredMessage),
    applicant_name: Yup.string(),
    no_ktp: Yup.number(),
    no_telp: Yup.string(),
    mothers_maiden_name: Yup.string().required(requiredMessage),
    pob: Yup.string(),
    dob: Yup.string(),
    house_ownership_status: Yup.string().required(requiredMessage),
    length_of_stay_year: Yup.string().required(requiredMessage),
    length_of_stay_month: Yup.string().required(requiredMessage),
    last_education: Yup.string().required(requiredMessage),
    marital_status: Yup.string().required(requiredMessage),
    no_hp: Yup.string().notRequired(),
    no_hp2: Yup.string(),
    email: Yup.string().email("Email is Invalid"),
    domicile_address: Yup.string().nullable(),
    domicile_province_id: Yup.number().nullable(),
    domicile_province_name: Yup.string().nullable(),
    domicile_city_id: Yup.number().nullable(),
    domicile_city_name: Yup.string().nullable(),
    domicile_district_id: Yup.number().nullable(),
    domicile_district_name: Yup.string().nullable(),
    domicile_postal_code: Yup.string().nullable(),
    ...addressYup,
    province_name: Yup.string().nullable(),
    city_id: Yup.number().nullable(),
    city_name: Yup.string().nullable(),
    district_id: Yup.number().nullable(),
    district_name: Yup.string().nullable(),
    postal_code: Yup.number().min(1, requiredMessage).nullable(),
    spouse_name: Yup.string().when(
      "marital_status",
      ([maritalStatus], schema) =>
        maritalStatus !== "Kawin"
          ? schema.notRequired()
          : schema.required(requiredMessage),
    ),
    spouse_ktp: Yup.string().when(
      "marital_status",
      ([maritalStatus], schema) =>
        maritalStatus !== "Kawin"
          ? schema.notRequired()
          : schema.required(requiredMessage),
    ),
    spouse_no_hp: Yup.string().when(
      "marital_status",
      ([maritalStatus], schema) =>
        maritalStatus !== "Kawin"
          ? schema.notRequired()
          : schema.required(requiredMessage),
    ),
    spouse_job: Yup.string().when(
      "marital_status",
      ([maritalStatus], schema) =>
        maritalStatus !== "Kawin"
          ? schema.notRequired()
          : schema.required(requiredMessage),
    ),
    spouse_income: Yup.number().when(
      "marital_status",
      ([maritalStatus], schema) =>
        maritalStatus !== "Kawin"
          ? schema.notRequired()
          : schema.required(requiredMessage).min(1, requiredMessage),
    ),
    spouse_number_of_dependents: Yup.number().when(
      "marital_status",
      ([maritalStatus], schema) =>
        maritalStatus !== "Kawin"
          ? schema.notRequired()
          : schema.required(requiredMessage).min(1, requiredMessage),
    ),
    personal_workplace_name: Yup.string().required(requiredMessage),
    personal_workplace_address: Yup.string().required(requiredMessage),
    personal_workplace_business_fields: Yup.string().required(requiredMessage),
    personal_workplace_position: Yup.string().required(requiredMessage),
    personal_workplace_length_of_work_year:
      Yup.string().required(requiredMessage),
    personal_workplace_length_of_work_month:
      Yup.string().required(requiredMessage),
    personal_workplace_income: Yup.number().required(requiredMessage),
    personal_workplace_other_income: Yup.number(),
    personal_workplace_additional_income: Yup.number(),
    ...emergencyYup,
  });

export {DetailApplicationCorporateSchema, DetailApplicationIndividualSchema};
