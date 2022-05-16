//Functions (optional and default parameters)
function sum(a: number, b: number = 0): number {
  return a + b;
}
console.log(sum(2, 3));

type myFunc = (a: number, b: number) => number;
const num2: myFunc = (a, b) => a + b;
console.log(num2(2, 5));

//Unknown number of arguments
function sumEveryThing(
  arg1: string,
  arg2: boolean,
  ...numbers: number[]
): number {
  return numbers.reduce((result: any, num: any) => result + num, 0);
}
console.log(sumEveryThing("check:", true, 2, 3, 4, 5));

// function calcArea(width: number, height: number): number;
// function calcArea(length: number): number;

function calcArea(...args: number[]): number {
  if (args.length === 2) {
    return args[0] * args[1];
  }
  return Math.pow(args[0], 2);
}
console.log(calcArea(3));
