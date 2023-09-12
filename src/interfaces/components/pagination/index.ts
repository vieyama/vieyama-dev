type PaginateType = {
  page?: number;
  per_page?: number;
  order_by?: string;
  sort?: string;
  search?: string;
  assign_to_me?: number;
  partner_type?: "corporate" | "individual";
  url?: string;
  country_id?: number;
  province_id?: number;
  city_id?: number;
  warehouse_id62?: string;
  product_id62?: string;
  partner_id?: string;
  sku_id62?: string;
  product_type?: string;
  owner_name?: string;
  tenant_id62?: string;
};

export type {PaginateType};
