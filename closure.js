function createAdder (baseNumber) {
    return function returnAdder (numberToAdd) {
        return baseNumber + numberToAdd;
    }
}

var addTen = createAdder(10);
console.log(addTen(2));
console.log(addTen(0));

/*function greetMaker (name) {
    function greet () {
        console.log('Hello ' + name + '!');
    }

    return greet;
}

var greetDavid = greetMaker('David');
greetDavid();

var greetWorld = greetMaker('World');
greetWorld(); */