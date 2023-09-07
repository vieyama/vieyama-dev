export interface GetPartnerDetailResponse {
  data: PartnerDetailData;
  message: string;
}

export interface PartnerDetailData {
  partner_type: string;
  applicant_name: string;
  no_ktp: string;
  pob: string;
  dob: number;
  no_telp: string;
  no_hp: string;
  no_hp_other: string;
  company_name: string;
  company_npwp: string;
  business_fields: string[];
  email: string;
  address: string;
  province: Region;
  city: Region;
  district: Region;
  postal_code: string;
  domicile_address: string;
  domicile_province: Region;
  domicile_city: Region;
  domicile_district: Region;
  domicile_postal_code: string;
  personal_workplace_business_fields: string[];
  applicant_npwp_photo: string;
  selfie_pic_photo: string;
}

export interface Region {
  id: number;
  name: string;
}
