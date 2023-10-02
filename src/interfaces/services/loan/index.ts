type Region = {id?: number; name?: string};

export type FinancingLoanBodyParams = {
  uuid?: string;
  notes?: string;
  rejection_reason?: string;
  rejection_notes?: string;
  date_timestamps?: string;
  is_rejected?: boolean;
  status?: number;
  pic?: number;
  province?: Region;
  city?: Region;
  assignment_letter?: string;
  items?: [];
  loan_type?: string;
  inventory_value?: number;
  funding_ratio?: number;
  channeling_name?: string[];
  channeling_result?: string;
  slik_credit_score?: string;
  funding_value?: number;
  volume_inventory?: number;
  interest_rate?: number;
  admin_fee?: number;
  origination_fee?: number;
  interest?: number;
  vat_burden?: number;
  total_disbursement?: number;
  payment_schedule?: string[];
  is_not_same_storage?: boolean;
  lat_lng?: string[];
  address?: string;
  disbursement_proof?: string;
  id?: number;
  qc_quantity?: number;
  qc_hpp?: number;
  due_date?: string;
};

export type FinancingLoanResponseData = object;

export type InsertFinancingResponse = {
  data: object;
};
