interface A {
  someProp: number;
}
interface B {
  someProp: number;
  anotherProp: number;
}
let a: A = { someProp: 1 };
let b: B = { someProp: 7, anotherProp: 8 };
console.log(b);
