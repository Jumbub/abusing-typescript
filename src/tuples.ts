/*
  * Tuples in TS are cool becaues they're just constrained arrays.
  *
  * The constraints mean that TS compute the constant array properties within the type system,
  * notably the "length" property.
  *
  * So with the power of TS recursion, we can dynamically build tuples and infer their lengths.
  */



// This type will infer the length of the array.
export type LengthOfTuple<Array extends unknown[]> = Array extends { length: infer Length }
  ? Length
  : never;


// For a generic array, the computed type is `number`, because it is not a tuple.
type TypeIsNumber = LengthOfTuple<unknown[]>

// For this tuple, the computed type is `1`.
type TypeIsLiteral1 = LengthOfTuple<[1]>;



// This type will build a tuple recursively until it reaches its target length.
export type TupleOfLength<Length extends number, Array extends unknown[] = []> = LengthOfTuple<Array> extends Length
  ? Array
  : TupleOfLength<Length, [...Array, unknown]>;


// For this number literal, the ocmputed type is []
type TypeIsTupleWith0UnknownElements = TupleOfLength<0>;

// For this number literal, the ocmputed type is [unknown, unknown]
type TypeIsTupleWith2UnknownElements = TupleOfLength<2>;
