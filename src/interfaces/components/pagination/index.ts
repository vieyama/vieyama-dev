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
};

export type {PaginateType};
