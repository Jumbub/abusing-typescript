import { Bit } from './bits';

export type Not<A extends Bit> = A extends 1 ? 0 : 1;
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
