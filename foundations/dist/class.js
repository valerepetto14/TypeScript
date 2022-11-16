"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    presentacion() {
        console.log("Hi, I am " + this.name);
    }
}
let Valentin = new Person("Valentin");
Valentin.presentacion();
