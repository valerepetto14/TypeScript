function getNumber():number {
    return Math.random()
}

function printNumber(num:number):void{
    console.log(`the number is ${num}`);
}

function getPosition(position: {lat:number,lon:number}):void{
    console.log(`the position is ${position.lat}, %${position.lon}`);
    
}

printNumber(20)
console.log(getNumber());
console.log(getPosition({lat:12,lon:12}));

