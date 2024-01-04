"use strict";
//convert to more or less specific type
let a = 'Hello';
let b = a; //assignment to less specific type
let c = b; //assignment to more specific type
//Typescript allows to convert to more or less specific type with 'as' keyword
let d = 'world'; //type alias
let e = 'world';
//Practical example of type assertion
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
console.log(myVal);
//Be careful! TS sees no problem - but a string is required
let nextVal = addOrConcat(2, 2, 'concat');
console.log(nextVal);
// Force Casting or Double Casting (not recommended)
// To define 10 as string
10; //force casting to unknown first and then to string
// The DOM
const img = document.querySelector('img'); //non-null assertion operator
const myImg = document.getElementById('#img'); //type assertion
const nextImg = document.getElementById('#img'); //This will not work in TSX file
img.src;
