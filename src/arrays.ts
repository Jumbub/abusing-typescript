export type First<Input extends unknown[]> = Input extends [infer First, ...unknown[]] ? First : never;
export type Last<Input extends unknown[]> = Input extends [...unknown[], infer Last] ? Last : never;

export type Dequeue<Input extends unknown[]> = Input extends [infer First, ...infer Rest] ? [...Rest] : [];
export type Pop<Input extends unknown[]> = Input extends [...infer Rest, infer Last] ? [...Rest] : [];

export type Push<Value extends unknown, Input extends unknown[]> = [...Input, Value];
export type Enqueue<Value extends unknown, Input extends unknown[]> = [Value, ...Input];

export type Map<
  Input extends unknown[],
  Func extends Ternary<unknown, unknown, unknown>,
  Output extends unknown[] = [],
> = Input extends [infer Current, ...unknown[]]
  ? Apply<Func, Current> extends infer Result
    ? Map<Dequeue<Input>, Func, Push<Result, Output>>
    : never
  : Output;
