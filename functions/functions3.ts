interface diffFn {
  (a: number, b: number): number;
}

const diff: diffFn = (a, b) => a - b;

console.log(diff(11, 1));
