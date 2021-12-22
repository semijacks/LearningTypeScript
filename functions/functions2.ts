type AddFn = {
  (a: number, b: number): number;
};

const add: AddFn = (a, b) => a + b;

console.log(add(12, 4));
