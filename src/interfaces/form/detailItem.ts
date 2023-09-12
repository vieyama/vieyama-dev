export type Items = {
  id: string | null;
  photos?: string[];
  product_id62?: string;
  stock_id62?: string;
  batch_number?: string;
  selected_stock?: string;
  quantity?: number;
};

export type DetailItemType = {
  warehouse_id62?: string;
  warehouse_address?: string;
  items?: Items[];
};
