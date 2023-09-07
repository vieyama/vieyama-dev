export interface GetPartnerListResponse {
  data: DataPartnerList;
  message: string;
}

export interface DataPartnerList {
  count: number;
  per_page: number;
  total_pages: number;
  page: number;
  results: PartnerResult[];
}

export interface PartnerResult {
  uuid: string;
  no_registration: string;
  registration_type: string;
  name: string;
  no_ktp: string;
  no_npwp: string;
  no_npwp_company: null | string;
  business_field: null;
  business_fields: number[];
  no_telp: string;
  no_telp_company: null | string;
  position: null | string;
  no_wa: string;
  email: string;
  email_company: null | string;
  country_id: number;
  province_id: number;
  city_id: number;
  district_id: number;
  address: null | string;
  address_ktp: string;
  postal_code: string;
  is_same_ktp: boolean;
  province_domicile_id: number | null;
  city_domicile_id: number | null;
  district_domicile_id: number | null;
  address_domicile: null | string;
  postal_code_domicile: null | string;
  company_type: null | string;
  company_name: null | string;
  place_birth: string;
  date_birth: number;
  gender: number;
  photo: string;
  photo_ktp: string;
  photo_npwp: string;
  status: number;
  response_teken: string;
  account_level: string;
  status_text: string;
  status_registration_teken: number;
  status_registration_teken_text: string;
  account_level_text: string;
  business_fields_text: string[];
  product_interest_text: string[];
  product_interest: number[];
  user_created: UserCreated;
  created_at: null;
  updated_at: null;
}

export interface UserCreated {
  name: string;
  province: null;
}
