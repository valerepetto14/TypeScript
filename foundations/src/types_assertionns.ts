let variable1 : any = "hola";
let variable2 : number = 1;

//las dos formas son validas
let change1 = variable1 as string;
let change2 = <string>variable1;
let change3 = variable2 as any;

console.log(change1);
