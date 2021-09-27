function sum(x, y) {
  return x + y;
}

function double(x) {
  return sum(x, x);
}

function minus(x, y) {
  return x - y;
}

function addOne(x) {
  return sum(x, 1);
}

function execute() {
  return this.value;
}

function chain(fns) {
  this.value = null;
  Object.keys(fns).forEach((key) => {
    this[key] = function () {
      if (key == "execute") return this.value;
      const args = [...(this.value ? [this.value] : []), ...arguments];
      this.value = fns[key](...args);
      return this
    };
  });
  return this;
}

let c = chain({ sum, minus, double, addOne, execute });
console.log(c.sum(3, 4).addOne().execute());

let c1 = chain({ sum, minus, double, addOne, execute });
c1.sum(4, 5)
let c2 = c1.sum(5)
console.log(c1.execute())