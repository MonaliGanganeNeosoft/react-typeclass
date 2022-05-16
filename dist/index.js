"use strict";
//Functions (optional and default parameters)
function sum(a, b = 0) {
    return a + b;
}
console.log(sum(2, 3));
const num2 = (a, b) => a + b;
console.log(num2(2, 5));
//Unknown number of arguments
function sumEveryThing(arg1, arg2, ...numbers) {
    return numbers.reduce((result, num) => result + num, 0);
}
console.log(sumEveryThing("check:", true, 2, 3, 4, 5));
// function calcArea(width: number, height: number): number;
// function calcArea(length: number): number;
function calcArea(...args) {
    if (args.length === 2) {
        return args[0] * args[1];
    }
    return Math.pow(args[0], 2);
}
console.log(calcArea(3));
