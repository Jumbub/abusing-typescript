/*
  * This file just contains some advanced type usage and it's associated terminology.
  */

// Conditional Types

type BoolStringWhenBoolType<T> = T extends boolean ? 'boolean' : 'not-boolean';

type IsBool = BoolStringWhenBoolType<boolean>;
type IsNotBool = BoolStringWhenBoolType<number>;



// Type inference

type InferWhenArray<T> = T extends (infer U)[] ? U : T;

type InferrenceSuccess = InferWhenArray<(number | string | object)[]>;
type InferrenceFailed = InferWhenArray<number>;



// Generic constraints

type ConstrainedToNumber<T extends number> = T

type NumberType = ConstrainedToNumber<number>



// Recursive types

type Recursion<T> = [T, Recursion<T>]



// Variadic tuple

type TwoBooleans = [boolean, boolean]
type ThreeBooleans = [...TwoBooleans, boolean]



// Template literals

type StringLiteral = 'string literal'
type LongerStringLiteral = `longer ${StringLiteral}`
