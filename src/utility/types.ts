export type OptionalKeys<T> = {
  [K in keyof T]-?: undefined extends T[K] ? K : never
}[keyof T];
export type OptionalMembers<T> = { [K in OptionalKeys<T>]: T[K] };
