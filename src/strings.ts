/*
 * This file just contains some crazy string literal type manipulation.
 */

// Template literals do internal kinda-regex I guess??

type DayMonthTemplate = `${number}-${number}`;

type DoesExtendTemplate = `25-12` extends DayMonthTemplate ? true : false;
type DoesNotExtendTemplate = `25-ab` extends DayMonthTemplate ? true : false;

// Like refinement types for numbers??

export type NumberIsPositive<N extends number> = `${N}` extends `-${number}` ? false : true;
export type NumberIsWhole<N extends number> = `${N}` extends `${number}.${number}` ? false : true;

type ExampleOfWhole = NumberIsWhole<12>
type ExampleOfPositive = NumberIsPositive<12>
