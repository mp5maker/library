// First Lesson

export default interface IFooBar {
  foo: string;
  bar: string;
}

const fooBars: Array<IFooBar> = [
  {
    foo: "foo1",
    bar: "bar1",
  },
  {
    foo: "foo2",
    bar: "bar2",
  },
  {
    foo: "foo3",
    bar: "bar3",
  },
  {
    foo: "foo4",
    bar: "bar4",
  },
  {
    foo: "foo5",
    bar: "bar5",
  },
  {
    foo: "foo6",
    bar: "bar6",
  },
];

function sortByFoo(fooBars: Array<IFooBar>) {
  return fooBars.sort((a, b) => {
    if (a.foo > b.foo) return 1;
    if (a.foo < b.foo) return -1;
    return 0;
  });
}

function sortByBar(fooBars: Array<IFooBar>) {
  return fooBars.sort((a, b) => {
    if (a.bar > b.bar) return 1;
    if (a.bar < b.bar) return -1;
    return 0;
  });
}

function sortByKey<T>({ data, key }: { data: Array<T>; key: keyof T }) {
  return data.sort((a, b) => {
    if (a[key] > b[key]) return 1;
    if (a[key] < b[key]) return -1;
    return 0;
  });
}

sortByKey<IFooBar>({ data: fooBars, key: "foo" });

// Second Lesson
class Animal {
  public legCount = 0;

  constructor(legCount: number) {
    this.legCount = legCount;
    console.log(this.legCount);
  }
}

class Cat extends Animal {
  constructor() {
    super(4);
  }
}

class Kangaroo extends Animal {
  constructor() {
    super(2);
  }
}

class Bacteria {}

function printLegCount<T extends Animal>(animal: T) {
  console.log(`My leg count is: ${animal.legCount}`);
}

const myCat = new Cat();
const myKangaroo = new Kangaroo();
const myBacteria = new Bacteria();
