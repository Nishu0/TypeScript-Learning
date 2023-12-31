//Type Aliases is a way to create a new name for a type. Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.

type stringOrNumber = string | number;
type stringOrNumberAraay =(string | number)[];
type Guitarist={
    name?: string,
    active: boolean,
    albums: stringOrNumberAraay,
}

type UserId=stringOrNumber;

// In Interface we cannnot use like Type Aliases
//interface  PostId=stringOrNumber;


//Literal Types
// A literal is a more concrete sub-type of a collective type. 

let myName:'Nisarg'

let userName: 'Nisarg' | 'Nishu' | 'Nisu' | 'Nisarg Thakkar'

//userName can only be one of the four strings mentioned above. Any other string will not be accepted. It is used to restrict the values that a variable can take.

//userName='Anushka'
userName='Nisarg'

//functions
const add = (a:number, b:number): number =>{
    return a+b;
}

//void is used when we don't want to return anything
const logMsg=(message:any): void =>{
    console.log(message)
}

logMsg('Hello World')
logMsg(add(2,3))


// Function without arrow 
let subtract = function(c:number, d:number):number{
    return c-d;
}

//type mathFunction=(a:number, b:number)=>number;
interface mathFunction{
    (a:number, b:number): number
}

let multiply:mathFunction = function(c,d){
    return c*d;
}

logMsg(multiply(2,2))

//optional parameters

const addAll =(a:number, b:number, c?:number):number=>{
    //add type gaurd
    if(typeof c !== 'undefined'){
        return a+b+c;
    }
    //if c is not defined we have to return number so add return 
    return a+b;
}

//default parameters

const sumAll =(a:number=10, b:number, c:number=97):number=>{
    return a+b+c;
}
logMsg(addAll(2,3,4))
logMsg(addAll(2,3))
logMsg(sumAll(undefined,3));
//We added undefined because we want to skip the first parameter and pass the second parameter.

//Default values will not work with type aliases and interfaces

//Rest Parameters is used for rest of the parameters. It is used to pass a variable number of arguments to a function.  

const total =(...nums:number[]):number=>{
    return nums.reduce((prev,curr)=>prev+curr)
}

const total1 =(a:number, ...nums:number[]):number=>{
    return a + nums.reduce((prev,curr)=>prev+curr)
}
//Rest should be the last parameter

logMsg(total(1,2,3,4))//10
logMsg(total1(10,2,3))//10

//Never Type is used when we know that something is never going to occur. For example, we can use never when we know that our function will never return anything.

//Generally, never is used as the return type of a function that always throws an exception or one that never returns. Variables also acquire the type never when narrowed by any type guards that can never be true.

const createError=(errMsg:string):never=>{
    throw new Error(errMsg);
}

const infinite=()=>{
    let i:number=1;
    while(true){
        i+=1;
        //condition is added to break loop otherwise it will have never type
        if(i>50){
            break;
        }
    }
}
//custom type guard
const isNumber=(value:any):boolean=>{
    return typeof value === 'number' ? true: false;
}

//use of never type
const numberOrString =(value: number | string):string=>{
    //Type Guard
    if(isNumber(value)) return 'number'
    if(typeof value === 'string') return 'string'
    //We have to return string because we have defined return type as string
    return createError('This should never happen')
}