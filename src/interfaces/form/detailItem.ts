export type Items = {
  id?: string | null;
  photos?: string[];
  product_id62?: string;
  stock_id62?: string;
  batch_number?: string;
  selected_stock?: string;
  quantity?: number | null;
  batch?: {
    id62: string;
    sku: Sku;
    batch_number: string;
    warehouse: Warehouse;
    stock: number;
    available_stock: number;
    product: Product;
    product_type: string;
    qty_global: number;
    owner_name: string;
    tenant: Tenant;
    inventories: string[];
    is_fishfin: boolean;
    is_void: boolean;
  };
};

export interface Product {
  id62: string;
  name: string;
  name_en: string;
}

export interface Sku {
  id62: string;
  SKU: string;
  item_name: string;
}

export interface Tenant {
  id62: string;
  full_name: string;
}

export interface Warehouse {
  id62: string;
  name: string;
}

export type DetailItemType = {
  warehouse_id62?: string;
  warehouse_address?: string;
  items?: Items[];
};
