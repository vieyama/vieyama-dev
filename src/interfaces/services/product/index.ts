export interface ProductsResponse {
  data: DataProducts;
  message: string;
}

export interface DataProducts {
  count: number;
  per_page: number;
  total_pages: number;
  page: number;
  results: Result[];
}

export interface Result {
  id62: string;
  name: string;
  name_en: null | string;
  description: null | string;
  category: Category;
  is_active: boolean;
  picture: Picture | null;
  photos: Photo[];
  group: Group | null;
  alias_name: null | string;
  commodity_type: CommodityType;
  varian_count: number;
  product_type: ProductType;
}

export interface Category {
  id62: Id62;
  name: Name;
}

export enum Id62 {
  B = "B",
  C = "C",
  D = "D",
  E = "E",
}

export enum Name {
  ProdukBeku = "Produk Beku",
  ProdukOlahan = "Produk Olahan",
  ProdukSampingan = "Produk Sampingan",
  ProdukSegar = "Produk Segar",
}

export enum CommodityType {
  NonSeafoodFishery = "non-seafood_fishery",
  SeafoodFishery = "seafood_fishery",
}

export interface Group {
  id62: string;
  name: string;
  name_en: null | string;
}

export interface Photo {
  order: number;
  fms_id: string;
}

export interface Picture {
  id62: string;
  name: string;
  url: string;
}

export enum ProductType {
  Consumable = "consumable",
  Storable = "storable",
}
