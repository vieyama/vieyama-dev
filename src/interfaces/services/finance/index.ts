import type {Items} from "~/interfaces/form/detailItem";

export interface FinancingParams {
  step?: string;
  uuid: string | null;
  partner_type?: string;
  financing_type: string | null;
  storage?: string;
  proposed_value?: number;
  tenor?: number;
  payment_method?: string;
  loan_purposes?: string;
  partner_id?: string;
  number_of_employees?: number;
  applicant_name?: string;
  applicant_npwp?: string;
  company_name?: string;
  province?: Region;
  district?: Region;
  city?: Region;
  postal_code?: number;
  emergency_name?: string;
  emergency_relationship?: string;
  emergency_address?: string;
  emergency_no_hp?: string;
  emergency_office_no_telp?: string;
  emergency_home_number?: string;
  directors?: Director[];

  spouse_ktp_photo?: string[];
  applicant_npwp_photo?: string[];
  family_document_photo?: string[];
  house_ownership_photo?: string[];
  bin_or_bussines_photo?: string[];
  bank_statement_photo?: string[];
  house_photo?: string[];
  selfie_pic_photo?: string[];

  directors_ktp_photo?: string[];
  directors_npwp_photo?: string[];
  comisarist_npwp_photo?: string[];
  comisarist_ktp_photo?: string[];
  shareholders_npwp_photo?: string[];
  shareholders_ktp_photo?: string[];
  company_npwp_photo?: string[];
  deed_of_incoraption_photo?: string[];
  amendment_deed_photo?: string[];
  sk_kemenkumham_photo?: string[];
  sk_kemenkumham_changes_photo?: string[];
  licensing_documents_photo?: string[];
  financial_statement_photo?: string[];
  selfie_comisarist_photo?: string[];
  office_photo?: string[];
}

export interface Region {
  id?: number;
  name?: string;
}

export interface Director {
  id?: string | null;
  name?: string;
  ktp?: string;
  pob?: string;
  dob?: number;
  position?: string;
  no_hp?: string;
  email?: string;
  share_ownership?: string;
  address?: string;
  province?: Region;
  city?: Region;
  district?: Region;
  postal_code?: number;
}

export type Partner = {
  name: string;
  no_registration: string;
  partner_id: string;
};

export interface FinanceResponseData {
  id: number;
  uuid: string;
  number: string;
  partner_type: string;
  financing_type: string;
  storage: string;
  proposed_value: string;
  tenor: number;
  payment_method: string;
  loan_purposes: string;
  partner_id: string;
  warehouse_id62: string;
  warehouse_address: string;
  number_of_employees: number;
  applicant_name: string;
  no_ktp: string;
  applicant_npwp: string;
  company_name: string;
  postal_code: number;
  district: Region;
  city: Region;
  province: Region;
  domicile_address: string;
  domicile_city: Region;
  domicile_district: Region;
  domicile_postal_code: number;
  domicile_province: Region;
  mothers_maiden_name: string;
  pob: string;
  dob: number;
  house_ownership_status: string;
  length_of_stay: string;
  last_education: string;
  marital_status: string;
  no_hp: string;
  no_hp_other: string;
  spouse_name: string;
  company_npwp: string;
  business_fields: string;
  no_telp: string;
  email: string;
  address: string;
  spouse_ktp: string;
  spouse_no_hp: string;
  spouse_job: string;
  spouse_income: string;
  spouse_number_of_dependents: string;
  personal_workplace_name: string;
  personal_workplace_address: string;
  personal_workplace_position: string;
  personal_workplace_length_of_work: string;
  personal_workplace_income: string;
  personal_workplace_other_income: string;
  personal_workplace_additional_income: string;
  personal_workplace_business_fields: string[];
  emergency_name: string;
  emergency_relationship: string;
  emergency_address: string;
  emergency_no_hp: string;
  emergency_office_no_telp: string;
  emergency_home_number: string;
  directors_ktp_photo: string[];
  comisarist_ktp_photo: string[];
  shareholders_ktp_photo: string[];
  directors_npwp_photo: string[];
  comisarist_npwp_photo: string[];
  shareholders_npwp_photo: string[];
  company_npwp_photo: string[];
  deed_of_incoraption_photo: string[];
  amendment_deed_photo: string[];
  sk_kemenkumham_photo: string[];
  sk_kemenkumham_changes_photo: string[];
  licensing_documents_photo: string[];
  financial_statement_photo: string[];
  selfie_pic_photo: string[];
  selfie_comisarist_photo: string[];
  spouse_ktp_photo: string[];
  applicant_npwp_photo: string[];
  family_document_photo: string[];
  house_ownership_photo: string[];
  bin_or_bussines_photo: string[];
  bank_statement_photo: string[];
  invoices_others_photo: string[];
  house_photo: string[];
  office_photo: string[];
  created_by: number;
  updated_by: number;
  deleted_by: string;
  approved_by: string;
  approved_at: string;
  unapproved_by: string;
  unapproved_at: string;
  rejection_note: string;
  status: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: string;
  items: Items[];
  directors: Director[];
  partner: Partner;
  warehouse: Warehouse;
}

export interface Warehouse {
  id62: string;
  warehouse_name: string;
  name: string;
  code: string;
  wh_type: Category;
  capacity: number;
  address: Address;
  company: Category;
  wh_owned_by: string;
  is_available_for_rent: boolean;
  rent_type: string;
  status_capacity: string;
  suppliers: Customer[];
  customers: Customer[];
  is_active: boolean;
  inventory_capacity: number;
  rental_capacity: number;
  available_inventory_capacity: number;
  available_rental_capacity: number;
  total_available_capacity: number;
  qr_stock_display: QrStockDisplay;
  overviews: any[];
  photo_profile: string;
  category: Category;
  join_date_timestamp: number;
  termination_date_timestamp: number;
  locations: Location[];
}

export interface Address {
  address: string;
  external_address: string;
  state: Province;
  province: Province;
  regency: Province;
  lat_lng: LatLng;
  external_state: null;
  external_province: string;
  external_regency: string;
}

export interface LatLng {
  latitude: number;
  longitude: number;
}

export interface Province {
  id: number;
  text: string;
}

export interface Category {
  id62: string;
  name: string;
}

export interface Customer {
  id62: string;
  full_name: string;
  phone_number: string;
  email: null | string;
}

export interface Location {
  name: string;
  location_type: string;
  category: string;
  storage_category: Category;
  barcode: string;
  is_scrap_location: boolean;
  is_return_location: boolean;
  is_replenish_location: boolean;
  note: null;
}

export interface QrStockDisplay {
  value: number;
  text: string;
}

export interface GetFinanceResponse {
  data: DataFinances;
  message: string;
}

export interface GetFinanceByIdResponse {
  data: FinanceResponseData;
  message: string;
}

export interface DataFinances {
  count: number;
  per_page: number;
  total_pages: number;
  page: number;
  results: FinanceResponseData[];
}

export interface InsertFinanceResponse {
  data: FinanceResponseData;
  message: string;
}
