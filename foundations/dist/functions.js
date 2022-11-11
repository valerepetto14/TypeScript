"use strict";
function getNumber() {
    return Math.random();
}
function printNumber(num) {
    console.log(`the number is ${num}`);
}
function getPosition(position) {
    console.log(`the position is ${position.lat}, %${position.lon}`);
}
printNumber(20);
console.log(getNumber());
console.log(getPosition({ lat: 12, lon: 12 }));
