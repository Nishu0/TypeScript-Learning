//Explicitly Inferred Types by adding :type after variable name

let myString: string;
myString = 'Nisarg Thakkar';


//Basic Types in Typescript
let myName: string ='Nishu'
let meaningOfLife: number;
let isLoading:boolean;
// Any type in Typescript is denoted by any keyword. It means that the variable can be of any type. It is used when we don't know the type of the variable. 
let album: any;
// Union Types in Typescript is denoted by | symbol. It means that the variable can be of any type mentioned in the union.
let age: number | string;
let isActive: boolean | number;
//RegEx is also a type in Typescript. It is used to check if the string matches the pattern or not.
let regEx: RegExp;

myName="Nisarg"
meaningOfLife=97
isLoading=true
album = true || 18 || "Nisarg"
age = 18 || "Eighteen"
console.log(meaningOfLife)
regEx=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/
//Above RegEx is used to check if the string is a valid email or not.
const sum =(a: number, b:string)=>{
    return a+b;
}
