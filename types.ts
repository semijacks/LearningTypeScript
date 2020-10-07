//Unions key = *|*
type MyBool = true | false;

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "open";
type oddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

const getLength = (obj: string | string[]): number => {
  console.log(obj.length);
  return obj.length;
};

const stringArray = ["semilore", "hello", "world", "very"];

getLength("hello");
getLength(stringArray);

const wrapInArray = (obj: string | string[]) => {
  if (typeof obj === "string") {
    console.log([obj]);
  } else {
    console.log(obj);
  }
};

wrapInArray("hello");
wrapInArray(stringArray);
