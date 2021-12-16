// From what I can tell, typescript will not let you delay execution of a ternary calculation.
// Buuut, it will let you store the conditional, true & false results.
// Therefore, our "lambda" just becomes these 3 variables, and we invoke it by doing "Value extends Check ? WhenTrue : WhenFalse"
type Lambda<
  Check extends unknown,
  WhenTrue extends unknown,
  WhenFalse extends unknown,
> = [Check, WhenTrue, WhenFalse];

// Here is the applicator type
type Apply<Condition extends Lambda<unknown, unknown, unknown>, Value extends unknown> = Condition extends Lambda<infer Check, infer TrueResult, infer FalseResult> ? (Value extends Check ? TrueResult : FalseResult) : never
