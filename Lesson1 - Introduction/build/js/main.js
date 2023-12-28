"use strict";
//TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces.
//TypeScript is strongly typed language which provides the feature of compile time checking. It means it will check the error while compiling the code as compared to JavaScript which shows the error at runtime.
let username = "Nishu";
console.log(username);
//to compile--> tsc main.ts
//for continuous compilation--> tsc main.ts -w
//To get config file for typescript--> tsc --init
//change setting of tsconfig.json
// "outDir": "./build/js", 
// "rootDir": "./src",
// Enable "noEmitOnError": true, in tsconfig.json if you want to compile typescript files only after all errors are resolved otherwise it will compile even if there are errors into js file
// add "include": ["src"] in tsconfig.json to compile all ts files only in src folder
//after specifying outDir and rootDir in tsconfig.json directle run 'tsc -w' to compile all ts files in js files in build/js folder
//Without enabling "noEmitOnError": true, in tsconfig.json it will compile the below comment code
// let a =12;
// let b="6";
// let c=2;
// console.log(a/b);
// console.log(c*b);
// After enabling "noEmitOnError": true, in tsconfig.json change and gives types to variables
let a = 12;
let b = 6;
let c = 2;
console.log(a / b);
console.log(c * b);
