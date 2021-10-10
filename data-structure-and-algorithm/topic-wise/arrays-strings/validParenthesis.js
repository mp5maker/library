class Stack {
  constructor() {
    this.head = 0;
    this.data = {};
  }

  push(data) {
    this.data[this.head] = data;
    this.head++;
  }

  pop() {
    const lastIndex = this.head - 1;
    const value = this.data[lastIndex];
    delete this.data[lastIndex];
    this.head--;
    return value;
  }

  peek() {
    const lastIndex = this.head - 1;
    return this.data[lastIndex];
  }

  size() {
    return Object.keys(this.data).length;
  }
}


function validParenthesis(s) {
  const stack = new Stack();
  for (bracket of s) {
    if (bracket == "{" || bracket == "[" || bracket == "(") stack.push(bracket);
    else if (bracket == "}" || bracket == "]" || bracket == ")") {
      if (stack.peek() == "(" && bracket == ")") stack.pop();
      else if (stack.peek() == "[" && bracket == "]") stack.pop();
      else if (stack.peek() == "{" && bracket == "}") stack.pop();
      else return false;
    }
  }
  return stack.size() ? false : true;
}

console.log(validParenthesis("()[]{}"));