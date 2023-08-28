type EmergencyType = {
  emergency_name?: string;
  emergency_relationship?: string;
  emergency_address?: string;
  emergency_no_hp?: string;
  emergency_phone_code?: string;
  emergency_office_no_telp?: string;
  emergencyPhoneOfficeCode?: string;
  emergency_home_number?: string;
  emergencyPhoneHomeCode?: string;
};

type AddressType = {
  address?: string;
  province?: string;
  city?: string;
  district?: string;
  postal_code?: string;
};

type directors = {
  name?: string;
  email?: string;
  no_ktp?: string;
  pob?: string;
  dob?: string;
  position?: string;
  no_hp?: number;
  phoneCode?: string;
  share_ownership?: string;
} & AddressType;

export type DetailApplicationCorporateType = {
  proposed_value?: string;
  tenor?: number;
  payment_method?: string;
  loan_purposes?: string;
  storage?: string;
  partner_id?: string;
  applicant_name?: string;
  company_name?: string;
  company_npwp?: string;
  applicant_npwp?: string;
  business_fields?: string;
  no_telp?: number;
  phoneCode?: string;
  email?: string;
  number_of_employees?: string;
  directors?: directors[];
} & EmergencyType &
  AddressType;

export type DetailApplicationIndividualType = {
  proposed_value?: string;
  tenor?: number;
  payment_method?: string;
  loan_purposes?: string;
  storage?: string;
  partner_id?: string;
  pob?: string;
  dob?: string;
  applicant_name?: string;
  no_ktp?: string;
  mothers_maiden_name?: string;
  house_ownership_status?: string;
  length_of_stay?: string;
  length_of_stay_year?: string;
  length_of_stay_month?: string;
  last_education?: string;
  marital_status?: string;
  no_telp?: number;
  noTelpCode?: number;
  no_hp?: number;
  no_hp2?: number;
  phoneCode?: number;
  phoneCode2?: number;
  email?: string;
  domicile_address?: string;
  domicile_province?: string;
  domicile_city?: string;
  domicile_district?: string;
  domicile_postal_code?: string;
  spouse_name?: string;
  spouse_no_ktp?: string;
  spouse_no_hp?: string;
  spousePhoneCode?: string;
  spouse_job?: string;
  spouse_income?: string;
  spouse_number_of_dependents?: string;
  personal_workplace_name?: string;
  personal_workplace_address?: string;
  personal_workplace_business_fields?: string;
  personal_workplace_position?: string;
  personal_workplace_length_of_work_year?: string;
  personal_workplace_length_of_work_month?: string;
  personal_workplace_income?: string;
  personal_workplace_other_income?: string;
  personal_workplace_additional_income?: string;
} & EmergencyType &
  AddressType;
