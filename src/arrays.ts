export type First<Input extends unknown[]> = Input extends [infer First, ...unknown[]] ? First : never;
export type Last<Input extends unknown[]> = Input extends [...unknown[], infer Last] ? Last : never;

export type Dequeue<Input extends unknown[]> = Input extends [infer First, ...infer Rest] ? [...Rest] : [];
export type Pop<Input extends unknown[]> = Input extends [...infer Rest, infer Last] ? [...Rest] : [];

export type Push<Value extends unknown, Input extends unknown[]> = [...Input, Value];
export type Enqueue<Value extends unknown, Input extends unknown[]> = [Value, ...Input];

export type Map<
  Input extends unknown[],
  Function extends Lambda<unknown, unknown, unknown>,
  Output extends unknown[] = [],
> = Input extends [infer Current, ...unknown[]]
  ? Function extends Lambda<infer Check, infer TrueResult, infer FalseResult>
    ? Current extends Check
      ? Map<Dequeue<Input>, Function, Push<TrueResult, Output>>
      : Map<Dequeue<Input>, Function, Push<FalseResult, Output>>
    : never
  : Output;
