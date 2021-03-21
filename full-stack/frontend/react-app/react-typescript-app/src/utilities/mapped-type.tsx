export type Properties = "propA" | "propB";
type MyMappedType<T> = {
  [P in keyof T]: T[P];
};
type MyNewType = MyMappedType<{ a: "a"; b: "b" }>;

const data = { a: "a", b: "b", boo: true };
const hello: MyMappedType<typeof data> = data;

type Pick1<T, Properties extends keyof T> = {
  [P in Properties]: T[P];
};
type MyNewType2 = Pick1<{ a: "a"; b: "b" }, "a" | "b">;

interface ShapeShifter<DATA> {
  data: Readonly<
    Array<
      {
        [KEY in keyof DATA]: DATA[KEY];
      }
    >
  >;
}

export function shapeShifter<P>({ data }: ShapeShifter<P>) {
  return data.map((item) => {
    return item;
  });
}

export function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
let user = { name: 'John Doe', age: 25}
const name = getProperty(user, 'name')
const age = getProperty(user, 'age')