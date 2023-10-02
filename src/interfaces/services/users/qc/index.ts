export interface QCListResponse {
  data: DataQCList;
  message: string;
}

export interface DataQCList {
  count: number;
  per_page: number;
  total_pages: number;
  page: number;
  results: Result[];
}

export interface Result {
  id: number;
  role_id: number;
  name: string;
  email: string;
  role: Role;
}

export interface Role {
  id: number;
  name: string;
  is_active: boolean;
}
