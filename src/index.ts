import { Col } from "react-bootstrap";
import multi, { HelloWorld } from "./multi";
const a = 2;
const b = 2;
console.log(`${a} * ${b} = ${multi(a, b)}`);
//->data-types

let c: boolean = false;
console.log(c);

let num: number = 1 + 0b1 + 0o1 + 0x1;
console.log(num);

const hello: string = "Hello";
console.log(hello);
const world: string = "World";
const helloWorld = `${hello} and ${world}`;
console.log(helloWorld);

//null and undefined
let n: null = null;
let u: undefined = undefined;

//let someNumber: number = null;

function uppercaseFirstLetter(str: string | null) {
  if (str) {
    return str[0].toUpperCase() + str.substr(1);
  }
}
console.log(uppercaseFirstLetter("hello"));
//Object
type primitiveTypes = boolean | number | string | symbol | null | undefined;
const myObj: object = new Map();

//void
function log(message: string): void {
  console.log(message);
  //   return "a string";
}

//Array
let array1: string[] = ["x", "y"];
let array2: Array<string> = array1;
console.log(array2);

//tuple
let tuple: [string, number] = ["str", 1];
console.log(tuple);

//Enum
enum Color {
  Red = 3,
  Grren,
  Blue = 99,
}
console.log(Color);
let myFavoriteColor: Color = Color.Blue;
console.log(Color.Red, Color.Grren, Color.Blue);
console.log(Color[99]);

//type any
let ANY: any;
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
