export type QCAssignType = {
  pic?: number;
  province_id?: number;
  province_name?: string;
  city_id?: number;
  city_name?: string;
  assignment_letter?: string;
};

export type EvaluationFormType = {
  notes?: string;
  reason?: string;
};

export type QCValuationType = {
  appraisalItems?: {
    id?: number;
    qc_quantity?: number;
    qc_hpp?: number;
  }[];
  notes?: string;
  approved?: boolean;
  is_draft?: boolean;
};
