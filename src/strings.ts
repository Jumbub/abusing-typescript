/*
 * This file just contains some crazy string literal type manipulation.
 */

// Like refinement types for numbers??

export type NumberIsPositive<N extends number> = `${N}` extends `-${number}` ? false : true;
export type NumberIsWhole<N extends number> = `${N}` extends `${number}.${number}` ? false : true;
