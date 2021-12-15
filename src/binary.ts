/*
 * Home baked attempt at binary arithmetic using all the TS hacks.
 */

// Bits
export type Bit = 0 | 1;
export type Byte<One extends Bit = Bit, Two extends Bit = Bit> = [One, Two];

// Numbers
type Zero = Byte<0, 0>;
type One = Byte<1, 0>;
type Two = Byte<0, 1>;
type Three = Byte<1, 1>;

// Gates
export type And<A extends Bit, B extends Bit> = A extends 0 ? 0 : B extends 1 ? 1 : 0;
export type Or<A extends Bit, B extends Bit> = A extends 1 ? 1 : B extends 1 ? 1 : 0;
export type Xor<A extends Bit, B extends Bit> = A extends 1
  ? B extends 0
    ? 1
    : 0
  : B extends 1
  ? A extends 0
    ? 1
    : 0
  : 0;

// Bit logic
export type ValueAndOverflow<Value extends Bit, Overflow extends Bit> = [Value, Overflow];
export type AddBits<A extends Bit, B extends Bit, Overflow extends Bit = 0> = ValueAndOverflow<
  Xor<Xor<A, B>, Overflow>,
  Or<Or<And<A, B>, And<B, Overflow>>, And<Overflow, A>>
>;

type AddBitsCase1 = AddBits<0, 0, 0>;
type AddBitsCase2 = AddBits<1, 0, 0>;
type AddBitsCase3 = AddBits<0, 1, 0>;
type AddBitsCase4 = AddBits<1, 1, 0>;
type AddBitsCase5 = AddBits<0, 0, 1>;
type AddBitsCase6 = AddBits<1, 0, 1>;
type AddBitsCase7 = AddBits<0, 1, 1>;
type AddBitsCase8 = AddBits<1, 1, 1>;

// Byte logic
export type AddBytes<A extends Byte, B extends Byte> = A extends Byte<infer A1, infer A2>
  ? B extends Byte<infer B1, infer B2>
    ? AddBits<A1, B1> extends ValueAndOverflow<infer R1, infer O1>
      ? AddBits<A2, B2, O1> extends ValueAndOverflow<infer R2, infer _>
        ? [R1, R2]
        : never
      : never
    : never
  : never;

type AddBytesCase1 = AddBytes<Zero, Zero>;
type AddBytesCase2 = AddBytes<One, Zero>;
type AddBytesCase3 = AddBytes<One, One>;
type AddBytesCase4 = AddBytes<Two, One>;
type AddBytesCase5 = AddBytes<Two, Two>;
