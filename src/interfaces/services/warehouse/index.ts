export interface WerehouseResponse {
  data: WarehouseData[];
  message: string;
}

export interface WarehouseData {
  id62: string;
  name: string;
  label?: string;
  address: Address;
}

export interface Address {
  address: string;
  external_address: string;
  state: Province;
  province: Province;
  regency: Province;
  lat_lng: LatLng;
}

export interface LatLng {
  latitude: number;
  longitude: number;
}

export interface Province {
  id: number;
  name: string;
}
