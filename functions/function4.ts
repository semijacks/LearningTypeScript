declare function MulFn(a: number, b: number): number;

declare namespace MulFn {
  let operator: "+";
}

const mul: typeof MulFn = (a, b) => a * b;
mul.operator = "+";

console.log(mul(4, 5));
