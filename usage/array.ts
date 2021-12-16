import { Map, Dequeue, Enqueue, Push, Pop, First, Last } from '../src/arrays'

type Get1 = First<[1, 2, 3]>
type Get2 = Last<[1, 2, 3]>

type Manipulate1 = Dequeue<[1, 2, 3]>
type Manipulate2 = Pop<[1, 2, 3]>

type Manipulate3 = Enqueue<'hi', [1, 2, 3]>
type Manipulate4 = Push<'hi', [1, 2, 3]>

type FlipBit = Lambda<0, 1, 0>
type FlippedBits = Map<[0, 1, 0], FlipBit>
