type Items = {
  id?: string;
  photos?: string[];
  product_id62?: string;
  sku_id62?: string;
  qty?: number;
};

export type DetailItemType = {
  warehouse_id62?: string;
  warehouse_address?: string;
  items?: Items[];
};
