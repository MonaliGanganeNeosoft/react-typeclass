"use strict";
let profile = {
    name: "Moni",
};
const a = { someProp: "Some Prop" };
a.x = 1;
a.y = 2;
const sum = (a, b) => a + b;
sum.prop1 = "Some Prop";
console.log(sum.prop1);
console.log(sum(2, 8));
let Child = { x: "Some prop", y: "y prop", z: "z prop" };
console.log(Child);
