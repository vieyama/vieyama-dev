// Global Types Definitions

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UniversalType<Type = any> = Type;

type TResponse = {
  message: string;
  status: 404 | 200 | 500 | 201 | 403 | 400 | 406;
};

type TMetaResponse = {
  meta: {total: number; page: number; limit: number; offset: number};
};
