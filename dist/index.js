"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multi_1 = __importDefault(require("./multi"));
const a = 2;
const b = 2;
console.log(`${a} * ${b} = ${(0, multi_1.default)(a, b)}`);
//->data-types
let c = false;
console.log(c);
let num = 1 + 0b1 + 0o1 + 0x1;
console.log(num);
const hello = "Hello";
console.log(hello);
const world = "World";
const helloWorld = `${hello} and ${world}`;
console.log(helloWorld);
//null and undefined
let n = null;
let u = undefined;
//let someNumber: number = null;
function uppercaseFirstLetter(str) {
    if (str) {
        return str[0].toUpperCase() + str.substr(1);
    }
}
console.log(uppercaseFirstLetter("hello"));
const myObj = new Map();
//void
function log(message) {
    console.log(message);
    //   return "a string";
}
//Array
let array1 = ["x", "y"];
let array2 = array1;
console.log(array2);
//tuple
let tuple = ["str", 1];
console.log(tuple);
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Grren"] = 4] = "Grren";
    Color[Color["Blue"] = 99] = "Blue";
})(Color || (Color = {}));
console.log(Color);
let myFavoriteColor = Color.Blue;
console.log(Color.Red, Color.Grren, Color.Blue);
console.log(Color[99]);
//type any
let ANY;
ANY = "a string";
ANY = 1;
ANY = true;
console.log(ANY);
//Type Assertions
// const email = document.getElementById("email");
// if (email) {
//   email.addEventListener("change", (e) => {
//     const input = e.currentTarget as HTMLInputElement;
//     console.log(input.value);
//   });
// }
