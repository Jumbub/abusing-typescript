import { LengthOfTuple } from '../tuples';
import { Adder, Bit, DifferenceAndBorrow, Subtractor, ValueAndOverflow } from './bits';

export type Byte<One extends Bit = Bit, Two extends Bit = Bit> = [One, Two];

type Zero = [0, 0];
type One = [1, 0];

export type AddBytes<A extends Byte, B extends Byte> = A extends Byte<infer A1, infer A2>
  ? B extends Byte<infer B1, infer B2>
    ? Adder<A1, B1> extends ValueAndOverflow<infer R1, infer O1>
      ? Adder<A2, B2, O1> extends ValueAndOverflow<infer R2, infer _>
        ? [R1, R2]
        : never
      : never
    : never
  : never;

export type SubtractBytes<A extends Byte, B extends Byte> = A extends Byte<infer A1, infer A2>
  ? B extends Byte<infer B1, infer B2>
    ? Subtractor<A1, B1> extends DifferenceAndBorrow<infer R1, infer O1>
      ? Subtractor<A2, B2, O1> extends DifferenceAndBorrow<infer R2, infer _>
        ? [R1, R2]
        : never
      : never
    : never
  : never;

export type NumberForBytes<
  InputBytes extends Byte,
  Counter extends unknown[] = [],
> = InputBytes extends Zero
  ? LengthOfTuple<Counter>
  : NumberForBytes<SubtractBytes<InputBytes, One>, [...Counter, unknown]>;

export type BytesForNumber<
  Number extends number,
  NumberByte extends Byte = Zero,
  Counter extends unknown[] = [],
> = LengthOfTuple<Counter> extends Number
  ? NumberByte
  : BytesForNumber<Number, AddBytes<NumberByte, One>, [...Counter, unknown]>;
