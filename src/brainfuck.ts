// Common

type IsTrue<Input extends boolean> = Input extends true ? true : false

type LinkedList<Value extends unknown> = { value: Value; next: LinkedList<Value> };
type DoublyLinkedList<Value extends unknown> = LinkedList<Value> & { prev: LinkedList<Value> };

// Brain fuck

type Right = '>';
type Left = '<';
type Increment = '+';
type Decrement = '-';
type Print = '.';
type Read = ',';
type IfZero = '[';
type IfNotZero = ']';

type Instruction = Right | Left | Increment | Decrement | Print | Read | IfZero | IfNotZero;
type Instructions = DoublyLinkedList<Instruction>;

type BrainFuck<Instructions> = Instructions;

// Unit tests
type EmptyList = LinkedList<number>;

const unitTests: [EmptyProgram, SingleOutput] extends true[] ? true : never = true

// Integration tests
type EmptyProgram = BrainFuck<[]> extends [] ? true : false;
type SingleOutput = BrainFuck<['.']> extends [0] ? true : false;

const integrationTests: [EmptyProgram, SingleOutput] extends true[] ? true : never = true
