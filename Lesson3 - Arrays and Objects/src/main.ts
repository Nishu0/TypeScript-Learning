let stringArr =['nishu', 'nisarg','nature']

let guitars=['Strat','Les Paul', 5150]

let mixedData=['NCT',2002,true]

// stringArr[0]=97;
// Because of type inference, the above line will throw an error

stringArr[0]='Karan'
stringArr.push('AZ')

guitars[0]=1984
guitars.push('SG')

//stringArr = guitars
// Above line will throw an error 
guitars = stringArr
mixedData = guitars

let test = [] //Any Type
let bands: string[] = [] //Array of strings
bands.push('Van Halen')

//Tuple: Tuple is an array with strict position of elements
let myTuple:[string, number, boolean] = ['NCT', 2002, true]

let mixed = ['Nishu', 2023, false]

mixed = myTuple
myTuple[1]=97

//Objects
//Arrays are also objects
let myObj: object
myObj =[]
console.log(typeof myObj)
myObj=bands
myObj={}

const exampleObj={
    prop1: 'Nishu',
    prop2: true
}

exampleObj.prop1='Nisarg'

//Annotate type in object instead of inference
//type is used for custom types
type Guitarlist={
    name: string,
    active: boolean,
    albums:(string|number)[],
}

let evh: Guitarlist={
    name: 'Eddie',
    active: true,
    albums: [1978, 1984, 'OU812']
}

let JP: Guitarlist={
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'III']
}

evh=JP
//If we want to make any property optional, we can use ? after the property name

type BandMember={
    name: string,
    age?: number, //optional
    instrument: string,
    active: boolean,
}

let alex: BandMember={
    name: 'Alex',
    instrument: 'Drums',
    active: true,
}

//how to use it in function

const greet=(person: BandMember)=>{
    return `Hello ${person.name}`
}

console.log(greet(alex))

// Another way is interface

interface BandMember2{
    name?: string,
    age: number, //optional
    instrument: string,
    active: boolean,
}

let ryan: BandMember2={
    name: 'Ryan',
    instrument: 'Guitar',
    age: 25,
    active: true,
}

const greet2=(person: BandMember2)=>{
    // If we want to use optional property with method, we need to use ? after the property name because it can be undefined and we can't use method on undefined

    //another way is to use if statement defined below
    return `Hello ${person.name?.toUpperCase()}`
}

//another way is to use if statement to check if the property is defined or not

// It is called narrowing the type
const greet3=(person: BandMember2)=>{
    if(person.name){ //narrowing the type
        return `Hello ${person.name.toUpperCase()}`
    }else{
        return `Hello`
    }
}


console.log(greet2(ryan))
console.log(greet3(ryan))
//Interface is used to define the shape of an object
//Type is used to define the type of an object

//Enums

// "Unlike most TypeScript features, enums are not a type. Instead, they are a way to create a set of named constants that can be referenced later using a friendly syntax."

enum Grade{
    U=1,
    D,
    C,
    B,
    A,
}

console.log(Grade.U)