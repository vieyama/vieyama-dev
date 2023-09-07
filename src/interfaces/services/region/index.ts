export interface RegionListResponse {
  data: RegionData;
  message: string;
}

export interface RegionData {
  count: number;
  per_page: number;
  total_pages: number;
  page: number;
  results: RegionResult[];
}

export interface RegionResult {
  id: number;
  name: string;
  code_name?: string;
  code_id?: string;
}
