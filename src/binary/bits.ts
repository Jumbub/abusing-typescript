import { And, Not, Or, Xor } from './logic';

// Bit
export type Bit = 0 | 1;

// Adder
export type ValueAndOverflow<Value extends Bit, Overflow extends Bit> = [Value, Overflow];
export type Adder<A extends Bit, B extends Bit, Overflow extends Bit = 0> = ValueAndOverflow<
  Xor<Xor<A, B>, Overflow>,
  Or<Or<And<A, B>, And<B, Overflow>>, And<Overflow, A>>
>;

// Subtractor
export type DifferenceAndBorrow<Difference extends Bit, Borrow extends Bit> = [Difference, Borrow];
export type HalfSubtractor<A extends Bit, B extends Bit> = DifferenceAndBorrow<
  Xor<A, B>,
  And<Not<A>, B>
>;
export type Subtractor<A extends Bit, B extends Bit, Borrow extends Bit = 0> = HalfSubtractor<
  A,
  B
> extends DifferenceAndBorrow<infer FirstDiff, infer FirstBorr>
  ? HalfSubtractor<FirstDiff, Borrow> extends DifferenceAndBorrow<
      infer SecondDiff,
      infer SecondBorr
    >
    ? DifferenceAndBorrow<SecondDiff, Or<SecondBorr, FirstBorr>>
    : never
  : never;
