class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    presentacion() {
        console.log("Hi, I am " + this.name);
    }
}
 
let Valentin = new Person("Valentin");
 
Valentin.presentacion();