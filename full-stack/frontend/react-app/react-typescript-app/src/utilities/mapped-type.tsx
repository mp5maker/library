type MyMappedType<T> = {
  [P in keyof T]: T[P];
};
type MyNewType = MyMappedType<{ a: 'a', b: 'b'}>