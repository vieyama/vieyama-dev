export interface InventoryResponse {
  data: DataInventory;
  message: string;
}

export interface DataInventory {
  count: number;
  per_page: number;
  total_pages: number;
  page: number;
  results: Result[];
}

export interface Result {
  id62: string;
  warehouse: Warehouse;
  product: Product;
  sku: Sku;
  qty: number;
  product_type: string;
  tenant: Tenant;
  owner_name: string;
  is_on_opname: boolean;
}

export interface Product {
  id62: string;
  name: string;
  name_en: string;
  commodity_type: string;
  product_nature: string;
  category: Category;
}

export interface Category {
  id62: null | string;
  name: null | string;
}

export interface Sku {
  id62: string;
  SKU: string;
  item_name: string;
  item_name_en: string;
}

export interface Tenant {
  id62: string;
  full_name: string;
}

export interface Warehouse {
  id62: string;
  name: string;
  capacity: null;
  wh_owned_by: null;
  company: Category;
}
