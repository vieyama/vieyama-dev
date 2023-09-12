type EmergencyType = {
  emergency_name?: string;
  emergency_relationship?: string;
  emergency_address?: string;
  emergency_no_hp?: string;
  emergency_office_no_telp?: string;
  emergency_home_number?: string;
};

type AddressType = {
  address?: string;
  province_id?: number;
  province_name?: string;
  city_id?: number;
  city_name?: string;
  district_id?: number;
  district_name?: string;
  postal_code?: number;
};

export type Directors = {
  id?: null | string;
  name?: string;
  email?: string;
  no_ktp?: string;
  pob?: string;
  dob?: string;
  position?: string;
  no_hp?: string;
  share_ownership?: string;
} & AddressType;

export type DetailApplicationCorporateType = {
  proposed_value?: number;
  tenor?: string;
  payment_method?: string;
  loan_purposes?: string;
  storage?: string;
  partner_id?: string;
  applicant_name?: string;
  company_name?: string;
  company_npwp?: string;
  applicant_npwp?: string;
  business_fields?: string;
  no_telp?: string;
  email?: string;
  number_of_employees?: number;
  directors?: Directors[];
} & EmergencyType &
  AddressType;

export type DetailApplicationIndividualType = {
  proposed_value?: number;
  tenor?: string;
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
  no_telp?: string;
  no_hp?: string;
  no_hp2?: number;
  email?: string;
  domicile_address?: string;
  domicile_province_id?: number;
  domicile_province_name?: string;
  domicile_city_id?: number;
  domicile_city_name?: string;
  domicile_district_id?: number;
  domicile_district_name?: string;
  domicile_postal_code?: string;
  spouse_name?: string;
  spouse_ktp?: string;
  spouse_no_hp?: string;
  spouse_job?: string;
  spouse_income?: number;
  spouse_number_of_dependents?: number;
  personal_workplace_name?: string;
  personal_workplace_address?: string;
  personal_workplace_business_fields?: string;
  personal_workplace_position?: string;
  personal_workplace_length_of_work_year?: string;
  personal_workplace_length_of_work_month?: string;
  personal_workplace_income?: number;
  personal_workplace_other_income?: number;
  personal_workplace_additional_income?: number;
} & EmergencyType &
  AddressType;
