import type {ObjectShape} from "yup";

export type PickItem<T extends string> = T | Omit<string, T>;

export type ObjectShapeValues = ObjectShape extends Record<string, infer V>
  ? V
  : never;

export type Shape<T extends Record<UniversalType, UniversalType>> = Partial<
  Record<keyof T, ObjectShapeValues>
>;
