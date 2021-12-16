import { Adder, HalfSubtractor, Subtractor } from "../src/binary/bits";
import { AddBytes, BytesForNumber, NumberForBytes, SubtractBytes } from "../src/binary/bytes";

type Zero = BytesForNumber<0>
type One = BytesForNumber<1>
type Two = BytesForNumber<2>
type Three = BytesForNumber<3>

type ZeroLiteral = NumberForBytes<Zero>
type OneLiteral = NumberForBytes<One>
type TwoLiteral = NumberForBytes<Two>

type AdderCase1 = Adder<0, 0, 0>;
type AdderCase2 = Adder<1, 0, 0>;
type AdderCase3 = Adder<0, 1, 0>;
type AdderCase4 = Adder<1, 1, 0>;
type AdderCase5 = Adder<0, 0, 1>;
type AdderCase6 = Adder<1, 0, 1>;
type AdderCase7 = Adder<0, 1, 1>;
type AdderCase8 = Adder<1, 1, 1>;

type AddBytesCase1 = AddBytes<Zero, Zero>;
type AddBytesCase2 = AddBytes<One, Zero>;
type AddBytesCase3 = AddBytes<One, One>;
type AddBytesCase4 = AddBytes<Two, One>;
type AddBytesCase5 = AddBytes<Two, Two>;
type AddBytesCase6 = AddBytes<Zero, Three>;

type HalfSubtractorCase1 = HalfSubtractor<0, 0>;
type HalfSubtractorCase2 = HalfSubtractor<1, 0>;
type HalfSubtractorCase3 = HalfSubtractor<0, 1>;
type HalfSubtractorCase4 = HalfSubtractor<1, 1>;

type SubtractorCase1 = Subtractor<0, 0, 0>;
type SubtractorCase2 = Subtractor<1, 0, 0>;
type SubtractorCase3 = Subtractor<0, 1, 0>;
type SubtractorCase4 = Subtractor<1, 1, 0>;
type SubtractorCase5 = Subtractor<0, 0, 1>;
type SubtractorCase6 = Subtractor<1, 0, 1>;
type SubtractorCase7 = Subtractor<0, 1, 1>;
type SubtractorCase8 = Subtractor<1, 1, 1>;

type SubtractBytesCase1 = SubtractBytes<Zero, Zero>;
type SubtractBytesCase2 = SubtractBytes<One, Zero>;
type SubtractBytesCase3 = SubtractBytes<One, One>;
type SubtractBytesCase4 = SubtractBytes<Two, One>;
type SubtractBytesCase5 = SubtractBytes<Two, Two>;
type SubtractBytesCase6 = SubtractBytes<Zero, Three>;
