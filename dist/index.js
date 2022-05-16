"use strict";
class Robot {
    constructor(name) {
        this.name = name;
    }
    askName() {
        console.log(`My Name is ${this.name}`);
    }
    move(distance) {
        console.log(`${this.name} moved ${distance} meters`);
    }
}
class FlyingRobot extends Robot {
    constructor(name, jetpackSize) {
        super(name);
        this.jetpackSize = jetpackSize;
        this.jetpackSize;
    }
    move(distance) {
        console.log(`${this.name} is flying`);
        super.move(distance);
    }
}
const robot = new Robot("John");
robot.askName();
const flyingRobot = new FlyingRobot("Jim", 2);
flyingRobot.move(10);
console.log(`Flying robots jetpack size is `, flyingRobot.jetpackSize);
