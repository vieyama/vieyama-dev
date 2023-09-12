export interface BatchResponse {
  data: BatchData;
  message: string;
}

export interface BatchData {
  count: number;
  per_page: number;
  total_pages: number;
  page: number;
  results: Result[];
}

export interface Result {
  id62: string;
  sku: Sku;
  product: Grade;
  warehouse: Grade;
  storage_time: number;
  stock: number;
  available_stock: number;
  batch_number: string;
  barcode_number: null;
  batch_number_ref: null;
  expired_date: null;
  product_type: string;
  owner_name: string;
  supplier: Supplier;
  photos: Photo[];
  created_at: Date;
  tenant: Supplier;
  reg_location: Grade;
  inventories: string[];
  is_fishfin: boolean;
  specific_condition: null;
  grade: Grade;
  area: null;
  subarea: null;
  is_product_export: boolean;
  fishing_method: null;
  qc_report_summary: string;
  qc_report_attachments: string[];
  documents: string[];
}

export interface Grade {
  id62: string;
  name: string;
}

export interface Photo {
  order: number;
  fms_id: string;
}

export interface Sku {
  id62: string;
  SKU: string;
  item_name: string;
}

export interface Supplier {
  id62: null | string;
  full_name: string;
}
