export type ReqruitmentDocCorporateType = {
  directors_ktp_photo?: string[];
  comisarist_ktp_photo?: string[];
  shareholders_ktp_photo?: string[];
  directors_npwp_photo?: string[];
  comisarist_npwp_photo?: string[];
  shareholders_npwp_photo?: string[];
  company_npwp_photo?: string[];
  deed_of_incoraption_photo?: string[];
  amendment_deed_photo?: string[];
  sk_kemenkumham_photo?: string[];
  sk_kemenkumham_changes_photo?: string[];
  licensing_documents_photo?: string[];
  financial_statement_photo?: string[];
  bank_statement_photo?: string[];
  invoices_others_photo?: string[];
  office_photo?: string[];
  selfie_pic_photo?: string[];
  selfie_comisarist_photo?: string[];
  status?: number;
};

export type ReqruitmentDocIndividualType = {
  spouse_ktp_photo?: string[] | null;
  applicant_npwp_photo?: string[] | null;
  family_document_photo?: string[] | null;
  house_ownership_photo?: string[] | null;
  bin_or_bussines_photo?: string[] | null;
  bank_statement_photo?: string[] | null;
  invoices_others_photo?: string[] | null;
  house_photo?: string[] | null;
  selfie_pic_photo?: string[] | null;
  status?: number;
};
