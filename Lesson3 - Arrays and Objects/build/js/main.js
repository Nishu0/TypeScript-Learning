"use strict";
let stringArr = ['nishu', 'nisarg', 'nature'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['NCT', 2002, true];
// stringArr[0]=97;
// Because of type inference, the above line will throw an error
stringArr[0] = 'Karan';
stringArr.push('AZ');
guitars[0] = 1984;
guitars.push('SG');
//stringArr = guitars
// Above line will throw an error 
guitars = stringArr;
mixedData = guitars;
let test = []; //Any Type
let bands = []; //Array of strings
bands.push('Van Halen');
//Tuple: Tuple is an array with strict position of elements
let myTuple = ['NCT', 2002, true];
let mixed = ['Nishu', 2023, false];
mixed = myTuple;
myTuple[1] = 97;
//Objects
//Arrays are also objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Nishu',
    prop2: true
};
exampleObj.prop1 = 'Nisarg';
let evh = {
    name: 'Eddie',
    active: true,
    albums: [1978, 1984, 'OU812']
};
let JP = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'III']
};
evh = JP;
let alex = {
    name: 'Alex',
    instrument: 'Drums',
    active: true,
};
//how to use it in function
const greet = (person) => {
    return `Hello ${person.name}`;
};
console.log(greet(alex));
let ryan = {
    name: 'Ryan',
    instrument: 'Guitar',
    age: 25,
    active: true,
};
const greet2 = (person) => {
    // If we want to use optional property with method, we need to use ? after the property name because it can be undefined and we can't use method on undefined
    var _a;
    //another way is to use if statement defined below
    return `Hello ${(_a = person.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
};
//another way is to use if statement to check if the property is defined or not
// It is called narrowing the type
const greet3 = (person) => {
    if (person.name) { //narrowing the type
        return `Hello ${person.name.toUpperCase()}`;
    }
    else {
        return `Hello`;
    }
};
console.log(greet2(ryan));
console.log(greet3(ryan));
//Interface is used to define the shape of an object
//Type is used to define the type of an object
//Enums
// "Unlike most TypeScript features, enums are not a type. Instead, they are a way to create a set of named constants that can be referenced later using a friendly syntax."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
