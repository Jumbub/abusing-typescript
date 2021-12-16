import { LengthOfTuple, TupleOfLength } from "./tuples";

// For a generic array, the computed type is `number`, because it is not a tuple.
type TypeIsNumber = LengthOfTuple<unknown[]>

// For this tuple, the computed type is `1`.
type TypeIsLiteral1 = LengthOfTuple<[1]>;

// For this number literal, the ocmputed type is []
type TypeIsTupleWith0UnknownElements = TupleOfLength<0>;

// For this number literal, the ocmputed type is [unknown, unknown]
type TypeIsTupleWith2UnknownElements = TupleOfLength<2>;
