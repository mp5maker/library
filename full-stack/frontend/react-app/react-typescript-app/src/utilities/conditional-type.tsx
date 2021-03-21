export function someFunction<T>(value: T) {
  type A = T extends boolean
    ? "TYPE A"
    : T extends string
    ? "TYPE B"
    : T extends number
    ? "TYPE C"
    : "TYPE D";
  const someOtherFunction = (
    someArg: T extends boolean ? "TYPE A" : "TYPE B"
  ) => {
    const a: "TYPE A" | "TYPE B" = someArg;
  };
  return someOtherFunction;
}

const result = someFunction(true);
type StringOrNot<T> = T extends string ? string : never;
type AUnion = string | boolean | never;
type ResultType = Exclude<"a" | "b" | "c", "a" | "b">;

type MyType<T> = T extends string | number ? T : never;
type MyResult = MyType<string | number | boolean>;

type InferSomething<T> = T extends infer U ? U : any;
type Inferred = InferSomething<"I am a string">;

type InferSomething2<T> = T extends { a: infer A; b: infer B } ? A & B : any;
type Inferred2 = InferSomething2<{
  a: { someAProp: 1 };
  b: { someBProp: "B" };
}>;

interface GenericType<T> {
  value: T;
}

export const sampleFunction = ({ value }: GenericType<string>): string => {
  return value;
};

export const sampleFunctionTwo = ({ value }: GenericType<number>): number => {
  return value;
};
