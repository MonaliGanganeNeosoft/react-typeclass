//Interfaces
interface Profile {
  readonly name: string;
  age?: number;
}
let profile: Profile = {
  name: "Moni",
};
//index Signature
interface A {
  someProp: string;
  [key: string]: number | string;
}
const a: A = { someProp: "Some Prop" };
a.x = 1;
a.y = 2;

//Call Signature
interface Sum {
  (a: number, b: number): number;
  prop1: string;
}
const sum: Sum = (a, b) => a + b;
sum.prop1 = "Some Prop";
console.log(sum.prop1);
console.log(sum(2, 8));

//Extending interfaces
interface Parent {
  x: string;
}
interface Parent2 {
  y: string;
}
interface Parent3 {
  z: string;
}
interface Child extends Parent, Parent2, Parent3 {}
let Child: Child = { x: "Some prop", y: "y prop", z: "z prop" };
console.log(Child);
