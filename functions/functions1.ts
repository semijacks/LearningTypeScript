type MathFn = (a: number, b: number) => number;

const sum: MathFn = (a, b) => a + b;

console.log(sum(5, 3));
